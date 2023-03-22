import React, { useEffect } from 'react';
import Context from './createContext';
import reducer from "./reducer";
import { useReducer } from 'react';
import axios from "axios";



const NoteContext = (props) => {




    const initialValue = {
        apiValue: [],
        cartProduct: [],
        
    };


    const [state, dispatch] = useReducer(reducer, initialValue);
    // console.log(state.cartProduct);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((result) => {
            state.apiValue = result.data
        }).catch((er) => console.log(er))

    }, [])

    const addToCart = (id) => {
        dispatch({ type: "ADDTOCART", id: id });
    }
    const deleteCart = (id) => {
        dispatch({ type: "DELETE", id: id });
    }

    useEffect(() => {
        let val = new Set(state.cartProduct);
        state.cartProduct = [...val];
    }, [state.cartProduct])

    console.log(state.cartProduct);

    return (
        <>
            <Context.Provider value={{ state, addToCart, deleteCart }}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default NoteContext;
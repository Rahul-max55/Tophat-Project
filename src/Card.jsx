import React, { useContext } from 'react';
import Context from './cardContext/createContext';


const Card = ({ img, price, rating, id }) => {

    const value = useContext(Context);
    const {addToCart} = value


    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="details">
                <p>{price}</p>
                <p>{rating}</p>
            </div>
            <button onClick={() => addToCart(id)} >Add to Card</button>
        </div>
    )
}

export default Card
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products").then((result) => {
            setData(result.data);
        }).catch((error) => {
            console.log(`Fetch error ${error}`);
        })

    }, [])

    return (
        <>

            <h1 className='head' >Product list</h1>
            <div className="All_card">
                {data.map((val, i) => {
                   return <Card key={i} id={val.id} img={val.image} price={val.price} rating={val.rating.rat}  />
               })}
            </div>
        </>

    )
}

export default Home
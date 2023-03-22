import React, { useContext } from 'react';
import Context from './cardContext/createContext';

const Cart = () => {

  const value = useContext(Context);
  const { state, deleteCart } = value
  const { cartProduct } = state;

console.log(value);

  return (
    <>

      <h1>Cart page</h1>
      <div className="container_cart">
        {cartProduct.map((v, i) => {
          console.log(v.id);
          return <div className="card">
            <img src={v.image} alt="" />
            <div className="details">
              <p>{v.price}</p>
              <p>{v.rating.rate}</p>
            </div>
            <button onClick={()=>deleteCart(v.id)} >Delete</button>
          </div>
        })}
      </div>
    </>
  )
}

export default Cart
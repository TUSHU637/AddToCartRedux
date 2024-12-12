import React, { useState } from 'react'
import products from '../data.js' 
import { Link } from 'react-router-dom'
import Summary from '../component/Summary.js'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQunatity, DeleteFromCart, increaseQunatity } from '../redux/CartSlice.js'
const Product = () => {
    
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        dispatch(DeleteFromCart(id));
    }
    const DecreaseQuantity=(product)=>{
          if(product.quantity<=1){
            dispatch(DeleteFromCart(product.id));
          }
          else{
            dispatch(decreaseQunatity(product.id))
          }
          
    }
    const IncreaseQunatity=(product)=>{
        dispatch(increaseQunatity(product.id))
    }
const products=useSelector(state=>state.cart.cart);
  return (
    <div className='bg-dark'>
        {products.length==0 && <h1><center>Cart is empty!!</center></h1> }
        {products.length>0 && <h1>Cart({products.length})</h1> }
        <button>CheckOut</button>
    <div class="container-fluid  mt-3 w-100 d-flex justify-content-around ">
    
  <div class="row d-flex justify-content-between">
  {products.map((product) => (
    <>
          <div className="col-md-6 mb-4 " key={product.id}>
            <div className="card" style={{ width: "100%" }}>
              <img src={product.img} className="card-img-top" alt={product.title}  style={{widht:"100%",height:"300px"}}/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price}</p>
                <button  className="btn btn-primary" onClick={()=>handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
               <div>
                <button onClick={()=>DecreaseQuantity(product)}>-</button>&nbsp;<span><bold>{product.quantity}</bold></span>&nbsp;<button onClick={()=>IncreaseQunatity(product)}>+</button>
               </div>
               <div>
                <h1>{product.price*product.quantity}</h1>
               </div>
          </div>
          </>
        ))}
    
  </div>
  <div class="row mx-5">
    <Summary />
  </div>
</div>
   </div>
  )
}

export default Product
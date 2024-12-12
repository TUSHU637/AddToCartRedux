import React from 'react'
import products from '../data.js' 
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Summary from '../component/Summary.js'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../redux/CartSlice.js'
const Product = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleCart=(product)=>{
        dispatch(AddToCart(product));
        navigate("/cart")
    }
  return (
    <div class="container-fluid  mt-3 w-100 ">
  <div class="row bg-dark">
  {products.map((product) => (
          <div className="col-md-4 mb-4 " key={product.id}>
            <div className="card" style={{ width: "100%" }}>
              <img src={product.img} className="card-img-top" alt={product.title}  style={{height:"270px"}}/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary" onClick={()=>handleCart(product)}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
    
  </div>
</div>
  )
}

export default Product
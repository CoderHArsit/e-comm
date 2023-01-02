import React from 'react'
import {useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Modal=()=> {
    
    const {id}=useParams();
    const [product, setProduct]=useState([]);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        const getProduct = async()=>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);
    
    const Loading=()=>{
        return(<>
        Loading...</>)
    }
    const ShowProduct=()=>
    {
        return(
            <>
           <div className="card" style={{width: "18rem"}}>
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">your name=username</p>
    <p className="card-text">your number=xxxxxxxx</p>
    <p className="card-text">your address=9djnnlxj,z kjd c</p>
    
    <Link to="/products" className="btn btn-primary">Shop More</Link>
  </div>
</div>
            </>
        )
    }
  return (
    <div>
      <h1 className='d-flex justify-content-center'>Thanks For Ordering from our store</h1>
      <div className='container'>
      <h3 className='row ' >Your order Summary</h3>
      
    </div>
    <div className='row'>
            {loading ? <Loading/>:<ShowProduct/>}
        </div>
    
    </div>
    
  )
}

export default Modal

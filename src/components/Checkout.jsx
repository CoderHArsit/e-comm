import React from 'react'
import {useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Checkout=()=> {
 

    const handleSubmit=()=>{}
   
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
            <p className='container'>{product.title}</p>
            <img src={product.image} alt="no image" height="100px" width="100px" ></img>
            </>
        )
    }
    
  return (
     

    <div className='container'>

      <form className="row g-3">         <div className='row'>
            {loading ? <Loading/>:<ShowProduct/>}
        </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >First Name</label>
    <input type="fname"   id="fname" ></input>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Last Name</label>
    <input type="lname" id="lname" />
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label" >contact number</label>
    <input type="number" className="number" id="number"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">landmark</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="near iimt college"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <Link to={`/model/${product.id}`} type="submit" className="btn btn-primary d-flex justify-content-center">Submit</Link>
  </div>
</form>
    </div>
  )
}

export default Checkout

import React from 'react'
import {useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import Modal from './Modal';
const Checkout=()=> {
 

    const handleSubmit=()=>{}
   
        const {id}=useParams();
    const [product, setProduct]=useState([]);
    const [loading, setLoading]=useState(false);
    
    // const [user,setUser]=useState({
    //     name:" ",email:" ",phone:" ",address:" "
    // });
    // let name,value;
    // const handleInputs=(e)=>{
    //     console.log(e);
    //     name=e.target.name;
    //     value=e.target.value;

    //     setUser({...user, [name]:value}); 
    // // }
    // const [name,setName]= useState("enter the name");
    // const [number,setNumber]=useState("enter the number");
    // const [address,setAddress]=useState("enter the address");
    // const namech=(e)=>
    // {
    // //  e.preventDefault();
    //  setName(e);
    // }
    // const numch=(e)=>
    // {
    // //  e.preventDefault();
    //  setNumber(e);
    // }
    // const addch=(e)=>
    // {
    // //  e.preventDefault();
    //  setAddress(e);
    // }
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
            <div className='container' style={{margin:"20px 20px"}}>{product.title} <img src={product.image} alt="no image" height="50%" width="50%" ></img></div>
            {/* <img  src={product.image} alt="no imag" height="10pt" width="10pt"></img> */}
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
    <input type="fname"  name='name'  id="fname" ></input>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Last Name</label>
    <input type="lname" id="lname" />
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >Email</label>
    <input type="email" className="form-control" name='email'   id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label" >contact number</label>
    <input type="number" className="number" name='phone'  id="number"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" name='address' id="inputAddress"  placeholder="1234 Main St"/>
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

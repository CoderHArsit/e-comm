import React,{useState,useEffect} from 'react';


import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Product=()=> {
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
        <div className="col-md-4">
            <img src={product.image} alt="https://www.mbassett.com/hubfs/Blog%20Images%20New/prod%20marketing.jpg" height="400px" width="400px"/>

        </div>
        <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50'>
                {product.category}

            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead fw-bolder'>
                Rating {product.rating && product.rating.rate}
                <i className='fa-fa-star'></i>
            </p>
            <h3 className='display-6  fw-bold my-4'>
                ${product.price}
            </h3>
            <p className='lead'>{product.description}</p>
          
            <Link to={`/cart/${product.id}`} className='btn btn-dark ms-2 px-3 py-2'>
                Buy Now
            </Link>
        </div>
        </>
    )}
  return (
    <div>
     <div className='container py-4'>
        <div className='row'>
            {loading ? <Loading/>:<ShowProduct/>}
        </div>
     </div>
    </div>
  );
}

export default Product
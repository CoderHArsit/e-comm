import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const Home=()=> {
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
    let componentMounted=true;
    useEffect(()=>{
        const getProducts =async()=>{
            setLoading(true);
            const response=await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
        
        return ()=>{
            componentMounted=false;
        }
    }
    getProducts();
},[]);
const Loading=()=>{
    return(
        <>
       <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </>
    );
};
const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category===cat);
    setFilter(updatedList);
}
const ShowProducts=()=>{
    return(<>
     <div className='buttons  d-flex justify-content-center mb-5 pb-5'>
        <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}> All</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}> Men's Clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}> Women's Clothing</button>
        

    </div>
    {filter.map((product)=>{
        return(
            <>
            <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4" key={(product.id)}>
    <img src={product.image} className="card-img-top" alt="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="250px"/>
    <div className="card-body">
      <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
      <p className="card-text lead fw-bold">Rs.{product.price}</p>
        <Link to={`/products/${product.id}`} className='btn btn-primary'> Buy Product</Link>
    </div>
  </div>
            </div>
            </>
        )
    })}
    </>)
   
}
  return (
   <div>
     <div className='container my-0 py-3'>
        <div className='row'>
            <div className='col-12 mb-5'>
                <h1 className='display-6 fw-bolder text-center'> Latest Products</h1>
                <hr/>
            </div>
        </div>
        <div className='row justify-content-center'>
            {loading?<Loading/>:<ShowProducts/>}
        </div>
     </div>
   </div>
  );
}

export default Home
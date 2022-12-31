import React from 'react'
import { Link } from 'react-router-dom'
const Catalogue=(props)=> {
  return (
    <div className="card" style={{width: "18rem", margin:"20px 50px"}}>
    <img src={props.src} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      < Link className="btn btn-primary" to="/modal">More Details</Link>
    </div>
  </div>

    
  )
}

export default Catalogue

import React from 'react'
import { Link } from 'react-router-dom'

const  Navbar=()=> {
 
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div className="container">
  <Link className="navbar-brand" to="/">
      <img src="https://media.licdn.com/dms/image/C4D0BAQEUajf8TU8UqQ/company-logo_200_200/0/1658766335957?e=2147483647&v=beta&t=l74pBprKgQDc4e04oHAi8jSPGCpx2Ntm8QwFQx1iLxc" alt="Bootstrap" width="30" height="24"/>
    </Link>
    <Link className="navbar-brand fw-bold fs-4" to="/">
           SARVMATRe
           </Link>
    <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/products">Products</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        
        
      </ul>
        </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

import React from 'react'

const checkout=()=> {

   
    const handleSubmit=()=>{

    }
  return (
    <div>
      <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">First Name</label>
    <input type="name" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Last Name</label>
    <input type="name" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">contact number</label>
    <input type="number" className="form-control" id="inputPassword4"/>
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
    <button type="submit" className="btn btn-primary d-flex justify-content-center" onClick={handleSubmit()}>Submit</button>
  </div>
</form>
    </div>
  )
}

export default checkout

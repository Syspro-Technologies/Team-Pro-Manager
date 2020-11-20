import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function profile() {
  sessionStorage.setItem("menuactive","Home");
  
  
  return (
      
        <div id='wrapper'>
            <Navigation></Navigation>
            <div id="content-wrapper" className="d-flex flex-column">
                 <div id="content">
                    <Navbar></Navbar>
            <div className="container-fluid">
  <div className="row no-gutters">
    <div className="col-lg-9 col-xl-9 col-md-9">
      <div className="card mb-4">
        <div className="p-3 pt-3 pb-3">
          <div className="navbar-expand-lg ">
            <div className=" navbar-collapse">
              <ul className="navbar-nav">
              <li className="breadcrumb-item active" aria-current="page"><a href="Home"><small><h6 className="d-inline">Home</h6></small></a></li>
                <li className="breadcrumb-item active " aria-current="page"><small><h6 className="d-inline">My Profile</h6></small></li>
              </ul>
              <ul className="navbar-nav ml-auto ">
                <li className=" navbar-item nav-user mx-2">
                  <a href="Home" className="btn btn-outline-primary py-2 px-3 label-text">Cancel</a>
                </li>
                <li className=" navbar-item nav-user mx-2">
                  <a href="Home" className="btn btn-primary py-2 px-3 label-text">Update</a>
                </li>
                <li className=" navbar-item nav-user">
                  <a href="Home" className="btn btn-primary py-2 px-3 label-text">Reset</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-0" />
        <div className="p-3">
          <div className="row">
            <div className="form-group col-lg-6 col-md-12">
              <label className="label-text">First Name</label>
              <input type="text" className="form-control" placeholder="Enter First Name" />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label className="label-text">Last Name</label>
              <input type="text" className="form-control" placeholder="Enter Last Name" />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label className="label-text">Nobile Number</label>
              <input type="text" className="form-control" placeholder="Enter Mobile Number" />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label htmlFor="exampleFormControlSelect1">Gender</label>
              <select className="form-control">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>                   
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label className="label-text">Address Line 1</label>
              <input type="text" className="form-control" placeholder="Enter Address 1" />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label className="label-text">Address Line 2</label>
              <input type="text" className="form-control" placeholder="Enter Address 2" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-3 col-md-12">
              <label className="label-text">Zip</label>
              <input type="text" className="form-control" placeholder="Enter Zip" />
            </div>
            <div className="form-group col-lg-3 col-md-12">
              <label className="label-text">City</label>
              <input type="text" className="form-control" placeholder="Enter City" />
            </div>
            <div className="form-group col-lg-3 col-md-12">
              <label className="label-text">State</label>
              <input type="text" className="form-control" placeholder="Enter State" />
            </div>
            <div className="form-group col-lg-3 col-md-12">
              <label className="label-text">Country</label>
              <input type="text" className="form-control" placeholder="Enter Country" />
            </div>
          </div>
        </div>
        <hr className="mb-0 mt-0" />
      </div>
    </div>
  </div>
  {/* Page Heading */}
  {/* Content Row */}
  {/* Content Row */}
</div>


        </div>
    </div>
    </div>
     )
}


export default profile;
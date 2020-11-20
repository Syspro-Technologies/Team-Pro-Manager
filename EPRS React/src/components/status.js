import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function status() {
    return (
        <div id='wrapper'>
          <Navigation></Navigation>
          
          <div className="container-fluid">
          <Navbar></Navbar>
  <div className="card mb-4">
    <div className="p-3 pt-3 pb-3">
      <div className="navbar-expand-lg ">
        <div className=" navbar-collapse">
          <ul className="navbar-nav">
            <li className="breadcrumb-item active" aria-current="page"><a href="/"><small><h6 className="d-inline">Home</h6></small></a></li>
            <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Master</h6></small></li>
            <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Status</h6></small></li>
          </ul>
        </div>
      </div>
    </div>
    <div className=" bg-light">
      {/*
<div class="p-3 row">
<div class="form-group col-lg-4 col-md-12">
<label for="exampleFormControlSelect1">Select User</label>
<select class="form-control" id="exampleFormControlSelect1">
<option>Aakash Kulkarni</option>
<option>Wahid Kazi</option>
<option>Avadhoot Gupte</option>
</select>
</div>

<div class="form-group col-lg-3 col-md-12">
<label class="label-text">Start Date</label>
<input type="text" class="form-control" placeholder="Enter Start Date">
</div>
<div class="form-group col-lg-3 col-md-12">
<label class="label-text">End Date</label>
<input type="text" class="form-control" placeholder="Enter End Date">
</div>
<div class="form-group col-lg-2 mt-4 px-4 float-left col-md-12">
<a href="add-project.html" class="btn btn-primary py-2 px-3 label-text">Search</a>
</div>


</div>
*/}
    </div>
  </div>
  <div className="card">
    <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
      <thead style={{backgroundColor: '#e4e4fb'}}>
        <tr>
          <th scope="col">Sr.</th>
          <th scope="col">Project Status Title</th>
          <th scope="col">Status</th>
          <th scope="col">Create</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr className>
          <td data-label="Subject">1</td>
          <td data-label="Schedule Start date">Completed</td>
          <td data-label="Schedule Start date">Active</td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
        </tr>
        <tr className>
          <td data-label="Subject">1</td>
          <td data-label="Schedule Start date">Completed</td>
          <td data-label="Schedule Start date">Active</td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
        </tr>
        <tr className>
          <td data-label="Subject">1</td>
          <td data-label="Schedule Start date">Completed</td>
          <td data-label="Schedule Start date">Active</td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
        </tr>
        <tr className>
          <td data-label="Subject">1</td>
          <td data-label="Schedule Start date">Completed</td>
          <td data-label="Schedule Start date">Active</td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
        </tr>
        <tr className>
          <td data-label="Subject">1</td>
          <td data-label="Schedule Start date">Completed</td>
          <td data-label="Schedule Start date">Active</td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
          <td data-label="Assigned To"><center><input type="checkbox" className="form control checkbox" /></center></td>
        </tr>
      </tbody>
    </table>
    <div className="border py-1 px-1" style={{backgroundColor: '#e4e4fb'}}>
      <label className="mb-0">1 - 10 of 30 ( 1 selected )</label>	
      <div className="float-right">
        <a href="#" className="text-muted"><i className="material-icons icon-buttons" style={{verticalAlign: 'middle'}}>keyboard_arrow_left</i></a>
        <a href="#" className="text-white btn-primary  font-weight-bold"><span className=" h6 p-2">1</span></a>
        <a href="#"><span className="mr-3 h6 text-dark">2</span></a>
        <a href="#"><span className="mr-0 h6 text-dark">3</span></a>
        <a href="#" className="text-dark"><i className="material-icons icon-buttons" style={{verticalAlign: 'middle'}}>keyboard_arrow_right</i></a>
      </div>
    </div>
  </div>
  {/* Page Heading */}
  {/* Content Row */}
  {/* Content Row */}
</div>



  </div>
    )
}


export default status;
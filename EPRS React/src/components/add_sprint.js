import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function add_sprint() {
    return (

        <div id='wrapper' >
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
              <li className="breadcrumb-item active" aria-current="page"><a href="#"><small><h6 className="d-inline">Sprints</h6></small></a></li>
              <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Create Sprint</h6></small></li>
            </ul>
            <ul className="navbar-nav ml-auto ">
              <li className=" navbar-item nav-user mx-2">
                <a href="#" className="btn btn-outline-primary py-2 px-3 label-text">Cancle</a>
              </li>
              <li className=" navbar-item nav-user mx-2">
                <a href="#" className="btn btn-primary py-2 px-3 label-text">Save</a>
              </li>
              <li className=" navbar-item nav-user">
                <a href="#" className="btn btn-primary py-2 px-3 label-text">Save &amp; New</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <div className="p-3">
        <div className="row">
          <div className="form-group col-lg-6 col-md-12">
            <label className="label-text">Sprint Title</label>
            <input type="text" className="form-control" placeholder="Enter Sprint Title" />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor="exampleFormControlSelect1">Project</label>
            <input type="text" disabled className="form-control" placeholder defaultValue="QAD Net" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-lg-3 col-md-12">
            <label className="label-text">Start Date</label>
            <input type="text" className="form-control" placeholder="Enter Start Date" />
          </div>
          <div className="form-group col-lg-3 col-md-12">
            <label className="label-text">End Date</label>
            <input type="text" className="form-control" placeholder="Enter End Date" />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor="exampleFormControlSelect1">Status</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Select Status</option>
              <option>Completed</option>
              <option>In-Progress</option>
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label className="label-text">Actual Start Date</label>
            <input type="text" className="form-control" placeholder="Enter Start Date" />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label className="label-text">Actual End Date</label>
            <input type="text" className="form-control" placeholder="Enter End Date" />
          </div>
          <div className="form-group col-lg-12 col-md-12 "><grammarly-extension style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}} className="_1KJtL" />
            <label className="label-text">Description</label>
            <textarea className="form-control form-group" rows={3} style={{height: 'auto !important'}} autoComplete="off" spellCheck="false" defaultValue={""} />
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <div className="navbar-expand-lg bg-light p-3 form-bottom ">
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto form-bottom-right">
            <div className="border-right mobile-hide" />
            <li className=" navbar-item nav-user px-3 ">
              <div className>
                <label className="label-text mb-1">Created by</label>
                <small className="d-block text-muted">Aakash Kulkarni</small>
              </div>
            </li>
            <div className="border-right mobile-hide" />
            <li className=" navbar-item nav-user px-3 ">
              <div className>
                <label className="label-text mb-1">Updated by</label>
                <small className="d-block text-muted">Wahid Kazi</small>
              </div>
            </li>
            <div className="border-right mobile-hide" />
            <li className=" navbar-item nav-user px-3 ">
              <div className>
                <label className="label-text mb-1">Created on</label>
                <small className="d-block text-muted">21/4/2020 - 03:12 PM</small>
              </div>
            </li>
            <div className="border-right mobile-hide" />
            <li className=" navbar-item nav-user px-3 ">
              <div className>
                <label className="label-text mb-1">Updated on </label>
                <small className="d-block text-muted">27/5/2020 - 04:36 PM</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-3 col-xl-3 col-md-3 px-2">
    <div className="card mb-2">
      <div className="p-3 pt-3 pb-3 border-bottom-primary">
        <div className="navbar-expand-lg ">
          <div className=" navbar-collapse">
            <ul className="navbar-nav">
              <li className="breadcrumb-item text-dark" aria-current="page"><small><h6 className="d-inline">Sprint List</h6></small></li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="breadcrumb-item text-dark" aria-current="page"><small className="d-inline "><a href="sprints">View More</a></small></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <ul className="navbar-nav p-3">
        <li>Lorem ipsum, or lipsum.</li>
        <small>Date: 12 Sept, 2020</small>
        <br />
        <li>Lorem ipsum, or lipsum.</li>
        <small>Date: 12 Sept, 2020</small>
      </ul>
    </div>
    <div className="card mb-4">
      <div className="p-3 pt-1 pb-3 border-bottom-primary">
        <div className="navbar-expand-lg ">
          <div className=" navbar-collapse">
            <ul className="navbar-nav">
              <li className="breadcrumb-item text-dark" aria-current="page"><small><h6 className="d-inline">Last Updated By</h6></small></li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="breadcrumb-item text-dark" aria-current="page"><small className="d-inline"><a href="sprints">View More</a> </small></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <ul className="navbar-nav p-3">
        <li>Add task by Ajay Patil</li>
        <small>Date: 12 Sept, 2020</small>
        <br />
        <li>Add task by Vinay Shah</li>
        <small>Date: 12 Sept, 2020</small>
        <br />
        <li>Add task by Vinay Shah</li>
        <small>Date: 12 Sept, 2020</small>
      </ul>
    </div>
  </div>
</div>


                    </div>

                </div>

            </div>

        </div>



    )
}


export default add_sprint;
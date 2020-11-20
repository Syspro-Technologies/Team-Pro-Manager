import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function add_project() {
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
              <li className="breadcrumb-item active" aria-current="page"><a href="project_list"><small><h6 className="d-inline">Project</h6></small></a></li>
              <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Create Project</h6></small></li>
            </ul>
            <ul className="navbar-nav ml-auto ">
              <li className=" navbar-item nav-user mx-2">
                <a href="project_list" className="btn btn-outline-primary py-2 px-3 label-text">Cancle</a>
              </li>
              <li className=" navbar-item nav-user mx-2">
                <a href="project_list" className="btn btn-primary py-2 px-3 label-text">Save</a>
              </li>
              <li className=" navbar-item nav-user">
                <a href="add_project" className="btn btn-primary py-2 px-3 label-text">Save &amp; New</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <div className="p-3">
        <div className="row">
          <div className="form-group col-lg-6 col-md-12">
            <label className="label-text">Project Title</label>
            <input type="text" className="form-control" placeholder="Enter Project Title" />
          </div>
          <div className="form-group col-lg-3 col-md-12">
            <label className="label-text">Start Date</label>
            <input type="text" className="form-control" placeholder="Enter Start Date" />
          </div>
          <div className="form-group col-lg-3 col-md-12">
            <label className="label-text">End Date</label>
            <input type="text" className="form-control" placeholder="Enter End Date" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-lg-3 col-md-12">
            <label className="label-text">Actual Start Date</label>
            <input type="text" className="form-control" placeholder="Enter Start Date" />
          </div>
          <div className="form-group col-lg-3 col-md-12">
            <label className="label-text">Actual End Date</label>
            <input type="text" className="form-control" placeholder="Enter End Date" />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor="exampleFormControlSelect1">Select Status</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>In-Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor="exampleFormControlSelect1">Select Project Manager</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option> Manager 1</option>
              <option>Manager 2</option>
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor="exampleFormControlSelect1">Select Assigne Users</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option> User 1</option>
              <option>User 2</option>
              <option>User 3</option>
              <option>User 4</option>
              <option>User 5</option>
            </select>
          </div>
          <div className="form-group col-lg-12 col-md-12 "><grammarly-extension style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}} className="_1KJtL" />
            <label className="label-text">Description</label>
            <textarea className="form-control form-group" rows={3} style={{height: 'auto !important'}} autoComplete="off" spellCheck="false" defaultValue={""} />
          </div>
        </div>
      </div>
      <hr className="mb-0 mt-0" />
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
            <li className=" navbar-item nav-user px-3 ">Logout
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
    <div id="accordion">
      <div className="card mb-4">
        <div className="p-3 pt-3 pb-3 ">
          <div className="navbar-expand-lg ">
            <div className=" navbar-collapse">
              <ul className="navbar-nav">
                <button className="btn btn-link  text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Project Task 
                  <i className="material-icons mr-1  " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{fontSize: 30, color: '#2276d9', verticalAlign: 'text-top'}}>expand_more</i>
                </button>
              </ul>
              <ul className="navbar-nav ml-auto ">
                <li className=" navbar-item nav-user">
                  <a href="add_task" className="btn btn-primary py-2 px-3 label-text">Add Task</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <div className="row no-gutter">
              <div className=" mb-2 col-lg-12 col-xl-12 col-md-12">
                <div className="card">
                  <div className="inner-data">
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="activities" role="tabpanel" aria-labelledby="activities-tab">
                        {/*Activity*/}
                        <div className style={{overflowX: 'scroll'}}>
                          <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
                            <thead style={{backgroundColor: '#e4e4fb'}}>
                              <tr>
                                <th scope="col">Task Title</th>
                                <th scope="col">Start date</th>
                                <th scope="col">Finish date</th>
                                <th scope="col">Sprint</th>
                                <th scope="col">Poject</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className>
                                <td data-label="Subject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                <td data-label="Schedule Start date">Sep 13, 2019</td>
                                <td data-label="Schedule Start date">Sep 17, 2019</td>
                                <td data-label="Assigned To">Sprint 1</td>
                                <td data-label="Assigned To">Project 1</td>
                                <td data-label="Status">Inprogress</td>
                                <td data-label="Action">
                                  <div className="align-right tile-icon">
                                    <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                                    <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                                  </div>
                                </td>
                              </tr>
                              <tr className>
                                <td data-label="Subject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                <td data-label="Schedule Start date">Sep 13, 2019</td>
                                <td data-label="Schedule Start date">Sep 17, 2019</td>
                                <td data-label="Assigned To">Sprint 1</td>
                                <td data-label="Assigned To">Project 1</td>
                                <td data-label="Status">Inprogress</td>
                                <td data-label="Action">
                                  <div className="align-right tile-icon">
                                    <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                                    <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                                  </div>
                                </td>
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
                        {/*Activity*/}
                      </div>
                      <div className="tab-pane fade" id="bids" role="tabpanel" aria-labelledby="bids-tab">
                        {/*Consultant*/}
                        <div className="inner-data border">
                          <div className="mb-2">
                            <small className="text-success label-text pl-0">Bid PVL Status Master</small>
                          </div>
                        </div>
                        {/*Consultant*/}
                      </div>
                    </div>
                  </div>
                  <hr className="my-0" />
                </div>
                {/*<div class="inner-data bg-light p-4">
<a href="#" class="btn btn-primary px-4 py-2 mr-2">Save</a>
<a href="#" class="btn btn-secondary px-4 py-2">Cancel</a>
</div>*/}
              </div>
            </div>
          </div>
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


export default add_project;
import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function sprints() {
  sessionStorage.setItem("menuactive","sprints");
    return (
        <div id='wrapper' >
          <Navigation></Navigation>
         <div className="container-fluid">
         <Navbar></Navbar>
  <div className="card mb-4">
    <div className="p-3 pt-3 pb-3">
      <div className="navbar-expand-lg ">
        <div className=" navbar-collapse">
          <ul className="navbar-nav">
            <li className="breadcrumb-item active" aria-current="page"><a href="/"><small><h6 className="d-inline">Home</h6></small></a></li>
            <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Sprints</h6></small></li>
          </ul>
          <ul className="navbar-nav ml-auto ">
            <li className=" navbar-item nav-user">
              <a href="add_sprint" className="btn btn-primary py-2 px-3 label-text">Add Sprint</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-0" />
    <div className="collapse " id="Searchcollapse" style={{}}>
      <div className="inner-data bg-light py-2">
        <div className="mb-2">
          <small className="text-success label-text pl-3">Search Activity</small>
        </div>
        <div className="border-box inner-data">
          <div className="row">
            <div className="form-group col-lg-2 col-md-2">
              <label className="label-text">Activity Type </label>
              <select className="form-control">
                <option>Phone Call</option>
                <option>Personal Visit</option>
                <option>Inqury</option>
              </select>
            </div>
            <div className="form-group col-lg-2 col-md-2">
              <label className="label-text">Regarding</label>
              <select className="form-control">
                <option>Project</option>
                <option>Customer</option>
                <option>Quote</option>
              </select>
            </div>
            <div className="form-group col-lg-2 col-md-2">
              <label className="label-text">Status</label>
              <select className="form-control">
                <option>New</option>
                <option>Inprogress</option>
                <option>Complete</option>
              </select>
            </div>
            <div className="form-group col-lg-2 col-md-2">
              <label className="label-text">Schedule Start date </label>
              <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" id="datepicker" className="form-control" placeholder="Select Date" data-type="datepicker" data-guid="04d6d14d-64b4-082b-5aa8-b0f9115265cf" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>
            </div>
            {/*

*/}
            <div className="form-group col-lg-2 col-md-2">
              <label className="label-text">Schedule End date </label>
              <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" id="datepicker" className="form-control" placeholder="Select Date" data-type="datepicker" data-guid="04d6d14d-64b4-082b-5aa8-b0f9115265cf" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>
            </div>
            <div className="form-group col-lg-1 col-md-1">
              <label className="label-text d-block ">Priority</label>
              <a href="#" className="text-warning"><i className="material-icons">star_border</i></a>
              <a href="#" className="text-warning"><i className="material-icons">star_border</i></a>
              <a href="#" className="text-warning"><i className="material-icons">star_border</i></a>
            </div>
            <div className="form-group col-lg-1 col-md-1 ">
              <label className="label-text d-block">&nbsp;</label>
              <a href="#" className="btn btn-primary px-4 py-2 label-text">Search</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  <div class="row ">
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary  ">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Classic Software project</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
              </div>
            </div>
              
              <div class="row no-gutters align-items-center">
              <div class="col mt-4">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label class="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title="" data-original-title="My Open Issues">2</label></div>
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
              </div>
            </div>
            </div>
            <ul class="list-unstyled mb-0  bg-light p-1">
                                      <li class="d-inline pl-2 pr-2">
                                          
                                          <label class="mt-1 dropdown-toggle px-2 mr-4 tile-icon "id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Sprint2</a>
    <a class="dropdown-item" href="#">Sprint3</a>
    <a class="dropdown-item" href="#">Sprint4</a>
  </div>
                                      </li>
                                      
                                  </ul>
        </div>
                  
      </div>
              
              <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary  ">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Classic Software project</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
              </div>
            </div>
              
              <div class="row no-gutters align-items-center">
              <div class="col mt-4">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label class="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title="" data-original-title="My Open Issues">2</label></div>
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
              </div>
            </div>
            </div>
            <ul class="list-unstyled mb-0  bg-light p-1">
                                      <li class="d-inline pl-2 pr-2">
                                          
                                          <label class="mt-1 dropdown-toggle px-2 mr-4 tile-icon "id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Sprint2</a>
    <a class="dropdown-item" href="#">Sprint3</a>
    <a class="dropdown-item" href="#">Sprint4</a>
  </div>
                                      </li>
                                      
                                  </ul>
        </div>
                  
      </div>
              
              <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary  ">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Classic Software project</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
              </div>
            </div>
              
              <div class="row no-gutters align-items-center">
              <div class="col mt-4">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label class="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title="" data-original-title="My Open Issues">2</label></div>
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
              </div>
            </div>
            </div>
            <ul class="list-unstyled mb-0  bg-light p-1">
                                      <li class="d-inline pl-2 pr-2">
                                          
                                          <label class="mt-1 dropdown-toggle px-2 mr-4 tile-icon "id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Sprint2</a>
    <a class="dropdown-item" href="#">Sprint3</a>
    <a class="dropdown-item" href="#">Sprint4</a>
  </div>
                                      </li>
                                      
                                  </ul>
        </div>
                  
      </div>
              
              <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary  ">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Classic Software project</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
              </div>
            </div>
              
              <div class="row no-gutters align-items-center">
              <div class="col mt-4">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label class="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title="" data-original-title="My Open Issues">2</label></div>
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
              </div>
            </div>
            </div>
            <ul class="list-unstyled mb-0  bg-light p-1">
                                      <li class="d-inline pl-2 pr-2">
                                          
                                          <label class="mt-1 dropdown-toggle px-2 mr-4 tile-icon "id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Sprint2</a>
    <a class="dropdown-item" href="#">Sprint3</a>
    <a class="dropdown-item" href="#">Sprint4</a>
  </div>
                                      </li>
                                  </ul>
        </div>
                  
      </div>
                  </div>  */}
  {/* Page Heading */}
  <div className="row no-gutter">
    <div className=" mb-2 col-lg-12 col-xl-12 col-md-12 ">
      <div className="card">
        <div className="inner-data">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="activities" role="tabpanel" aria-labelledby="activities-tab">
              {/*Activity*/}
              <div className style={{overflowX: 'scroll'}}>
                <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
                  <thead style={{backgroundColor: '#e4e4fb'}}>
                    <tr>
                      <th scope="col">Sprint Title</th>
                      <th scope="col">Project</th>
                      <th scope="col">Start date</th>
                      <th scope="col">End date</th>
                      <th scope="col">Actual Start date</th>
                      <th scope="col">Actual End date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className>
                      <td data-label="Subject"><a className="text-dark" href="add_sprint">Sprint 1</a></td>
                      <td data-label="Project Name">EPRS</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Sep 20, 2020</td>
                      <td data-label="Status">Inprogress</td>
                      <td data-label="Subject">Lorem ipsum dolor sit amet.</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_sprint" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject"><a className="text-dark" href="add_sprint">Sprint 2</a></td>
                      <td data-label="Project Name">Qad Net</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Sep 20, 2020</td>
                      <td data-label="Status">Inprogress</td>
                      <td data-label="Subject">Lorem ipsum dolor sit amet.</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_sprint" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject"><a className="text-dark" href="add_sprint">Sprint 3</a></td>
                      <td data-label="Project Name">MLD</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Sep 20, 2020</td>
                      <td data-label="Status">Inprogress</td>
                      <td data-label="Subject">Lorem ipsum dolor sit amet.</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_sprint" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject"><a className="text-dark" href="add_sprint">Sprint 4</a></td>
                      <td data-label="Project Name">MMG</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Sep 20, 2020</td>
                      <td data-label="Status">Inprogress</td>
                      <td data-label="Subject">Lorem ipsum dolor sit amet.</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_sprint" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject"><a className="text-dark" href="add_sprint">Sprint 5</a></td>
                      <td data-label="Project Name">Qad Net</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Sep 20, 2020</td>
                      <td data-label="Status">Inprogress</td>
                      <td data-label="Subject">Lorem ipsum dolor sit amet.</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_sprint" className><small><i className="material-icons text-dark">edit</i></small></a>
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
            <div className="tab-pane fade" id="quotes" role="tabpanel" aria-labelledby="quotes-tab">
              {/*quote*/}
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
                    </tr>
                    <tr className>
                      <td data-label="Subject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">Sprint 1</td>
                      <td data-label="Assigned To">Project 1</td>
                      <td data-label="Status">Inprogress</td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">Sprint 1</td>
                      <td data-label="Assigned To">Project 1</td>
                      <td data-label="Status">Inprogress</td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">Sprint 1</td>
                      <td data-label="Assigned To">Project 1</td>
                      <td data-label="Status">Inprogress</td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">Sprint 1</td>
                      <td data-label="Assigned To">Project 1</td>
                      <td data-label="Status">Inprogress</td>
                    </tr>
                  </tbody>
                </table>
                <div className="border py-2 px-4" style={{backgroundColor: '#e4e4fb'}}>
                  <label className="mb-0">1 - 10 of 30 ( 1 selected )</label>	
                  <div className="float-right">
                    <a href="#" className="text-muted"><i className="material-icons icon-buttons" style={{verticalAlign: 'middle'}}>keyboard_arrow_left</i></a>
                    <a href="#" className="text-success font-weight-bold"><span className="mr-3 h6">1</span></a>
                    <a href="#"><span className="mr-3 h6 text-dark">2</span></a>
                    <a href="#"><span className="mr-0 h6 text-dark">3</span></a>
                    <a href="#" className="text-dark"><i className="material-icons icon-buttons" style={{verticalAlign: 'middle'}}>keyboard_arrow_right</i></a>
                  </div>
                </div>
              </div>
              {/*quote*/}
            </div>
            <div className="tab-pane fade" id="projects" role="tabpanel" aria-labelledby="projects-tab">
              {/*Projects*/}
              <div className="inner-data border">
                <div className="mb-2">
                  <small className="text-success label-text pl-0">Projects Status Master</small>
                </div>
                <table className="table table-bordered table-hover table-responsive w-100 d-table" style={{overflowX: 'scroll'}}>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Value</th>
                      <th scope="col">Sort order</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" className="form-control" placeholder="Enter Status value" defaultValue />
                      </td>
                      <td>
                        <input type="text" className="form-control" placeholder="Enter Sort Order" defaultValue />
                      </td>
                      <td>
                        <div className="form-group mb-0 text-center pt-2">
                          <a href="#" className="btn btn-primary label-text" data-toggle="tooltip" data-placement="top" title data-original-title="Add Item">Add Item</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">Job In Hand</td>
                      <td data-label="Sort order">1</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">Tender</td>
                      <td data-label="Sort order">2</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Projects*/}
            </div>
            <div className="tab-pane fade" id="cutomer" role="tabpanel" aria-labelledby="cutomer-tab">
              {/*Customer*/}
              <div className="inner-data border">
                <div className="mb-2">
                  <small className="text-success label-text pl-0">Customer Status Master</small>
                </div>
                <div className="form-group ">
                  <label className="label-text">Select Option</label>
                  <select className="form-control col-md-4">
                    <option>Grade</option>
                    <option>Credit Rating</option>
                    <option>Customer Type</option>
                  </select>
                </div>
                <table className="table table-bordered table-hover table-responsive w-100 d-table" style={{overflowX: 'scroll'}}>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Value</th>
                      <th scope="col">Sort order</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" className="form-control" placeholder="Enter Status value" defaultValue />
                      </td>
                      <td>
                        <input type="text" className="form-control" placeholder="Enter Sort Order" defaultValue />
                      </td>
                      <td>
                        <div className="form-group mb-0 text-center pt-2">
                          <a href="#" className="btn btn-primary label-text" data-toggle="tooltip" data-placement="top" title data-original-title="Add Item">Add Item
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">A</td>
                      <td data-label="Sort order">1</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">B</td>
                      <td data-label="Sort order">2</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Customer*/}
            </div>
            <div className="tab-pane fade" id="consultant" role="tabpanel" aria-labelledby="consultant-tab">
              {/*Consultant*/}
              <div className="inner-data border">
                <div className="mb-2">
                  <small className="text-success label-text pl-0">Consultant PVL Status Master</small>
                </div>
                <table className="table table-bordered table-hover table-responsive w-100 d-table" style={{overflowX: 'scroll'}}>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Value</th>
                      <th scope="col">Sort order</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" className="form-control" placeholder="Enter Status value" defaultValue />
                      </td>
                      <td>
                        <input type="text" className="form-control" placeholder="Enter Sort Order" defaultValue />
                      </td>
                      <td>
                        <div className="form-group mb-0 text-center pt-2">
                          <a href="#" className="btn btn-primary label-text" data-toggle="tooltip" data-placement="top" title data-original-title="Add Item">Add Item
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">All Products Approved in PVL</td>
                      <td data-label="Sort order">1</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">Limited Products Approved in PVL</td>
                      <td data-label="Sort order">2</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Value">No Products in PVL</td>
                      <td data-label="Sort order">3</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="#" className><small><i className="material-icons  text-dark">edit</i></small></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Consultant*/}
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
  {/* Content Row */}
  {/* Content Row */}
</div>


          </div>
    )
}


export default sprints;
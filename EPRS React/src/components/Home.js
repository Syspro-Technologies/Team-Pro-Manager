import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'


function Home() {
  sessionStorage.setItem("menuactive","home");
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
            <li className="breadcrumb-item " aria-current="page"><a href="#"><small><h6 className="d-inline text-dark">Home</h6></small></a></li>
          </ul>
          <ul className="navbar-nav ml-auto ">
            <li className=" navbar-item nav-user mx-2">
              <a href="add_task" className="btn btn-primary py-2 px-3 label-text">Add Task</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-0" />
    <div className id="accordion">
      <div className="card ">
        <div className="bg-light" id="headingOne">
          <h5 className="mb-0 px-1 mt-3">
            <button className="btn btn-link  text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              My Projects 
              <i className="material-icons px-1" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{fontSize: 30, color: '#a0a0a0', verticalAlign: 'text-top'}}>arrow_drop_down_circle</i>
            </button>
            <a className="float-right mt-2 mx-4" href="project_list"> <small>Load More</small></a>
          </h5>
          <hr className="mb-0 " />
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card border-left-primary">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary mb-1">Start: <span className="text-dark">25-10-2020 / <span className="text-primary">End:</span> 2-11-2020</span></div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mt-4">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label className="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title data-original-title="My Open Issues">2</label></div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0  bg-light p-1">
                    <li className="d-inline pl-2 pr-2">
                      <label className="mt-1 dropdown-toggle px-2 mr-4 tile-icon " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Sprint2</a>
                        <a className="dropdown-item" href="#">Sprint3</a>
                        <a className="dropdown-item" href="#">Sprint4</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card border-left-primary">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary mb-1">Start: <span className="text-dark">25-10-2020 / <span className="text-primary">End:</span> 2-11-2020</span></div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mt-4">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label className="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title data-original-title="My Open Issues">2</label></div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0 bg-light p-1">
                    <li className="d-inline pl-2 pr-2">
                      <label className="mt-1 dropdown-toggle px-2 mr-4 tile-icon " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Sprint2</a>
                        <a className="dropdown-item" href="#">Sprint3</a>
                        <a className="dropdown-item" href="#">Sprint4</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card border-left-primary">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary mb-1">Start: <span className="text-dark">25-10-2020 / <span className="text-primary">End:</span> 2-11-2020</span></div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mt-4">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label className="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title data-original-title="My Open Issues">2</label></div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0  bg-light p-1">
                    <li className="d-inline pl-2 pr-2">
                      <label className="mt-1 dropdown-toggle px-2 mr-4 tile-icon " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Sprint2</a>
                        <a className="dropdown-item" href="#">Sprint3</a>
                        <a className="dropdown-item" href="#">Sprint4</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card border-left-primary  ">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary mb-1">Start: <span className="text-dark">25-10-2020 / <span className="text-primary">End:</span> 2-11-2020</span></div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Project-1</div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mt-4">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">My Open Issues <label className="float-right bg-danger text-white px-2 py-1 mb-0 label-text  rounded small" data-toggle="tooltip" data-placement="top" title data-original-title="My Open Issues">2</label></div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Done Issues</div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0  bg-light p-1">
                    <li className="d-inline pl-2 pr-2">
                      <label className="mt-1 dropdown-toggle px-2 mr-4 tile-icon " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sprint1</label>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Sprint2</a>
                        <a className="dropdown-item" href="#">Sprint3</a>
                        <a className="dropdown-item" href="#">Sprint4</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*          Project Box start              */}
  {/*          Project Box End              */}                   
  {/* Page Heading */}
  <div className="row no-gutter mt-4">
    <div className=" mb-2 col-lg-12 col-xl-12 col-md-12">
      <div className="card">
        <div className="inner-data">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link label-text active" id="activities-tab" data-toggle="tab" href="#activities" role="tab" aria-controls="home" aria-selected="true">Today Work Items</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="enquiry-tab" data-toggle="tab" href="#" role="tab" aria-controls="profile" aria-selected="false">Overdue Work Items</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="quotes-tab" data-toggle="tab" href="#quotes" role="tab" aria-controls="contact" aria-selected="false">Next 5 Days Items</a>
            </li>
            <span style={{marginRight: 420}}>
            </span>
            <li className="mt-2 float-right">
              <button type="button" className="btn btn-danger btn-circle btn-sm " data-toggle="tooltip" data-placement="top" title="Wahid Kulkarni">
                WK
              </button>
            </li>
            <li className="mt-2">
              <button type="button" className="btn btn-success btn-circle btn-sm " data-toggle="tooltip" data-placement="top" title="Aakash Kulkarni">
                AK
              </button>
            </li>
            <li className="mt-2">
              <button type="button" className="btn btn-info btn-circle btn-sm " data-toggle="tooltip" data-placement="top" title="Kapil Kulkarni">
                KK
              </button>
            </li>
            <li className="mt-2">
              <button type="button" className="btn btn-secondary btn-circle btn-sm " data-toggle="tooltip" data-placement="top" title="Vishaka Patil">
                VK
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="activities" role="tabpanel" aria-labelledby="activities-tab">
              {/*Activity*/}
              <div className style={{overflowX: 'scroll'}}>
                <table className="table table-bordered table-hover table-responsive w-100 d-table " style={{overflowX: 'scroll'}}>
                  <thead style={{backgroundColor: '#e4e4fb'}}>
                    <tr>
                      <th scope="col">Task#</th>
                      <th scope="col">Task Title</th>
                      <th scope="col">Start date</th>
                      <th scope="col">End date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Task Type</th>
                      <th scope="col">Assigned To</th>
                      <th scope="col">Team Lead</th>
                      <th scope="col">Actual Start date</th>
                      <th scope="col">Actual End date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className>
                      <td data-label="Subject">1020</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1021</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1022</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1023</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1024</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
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
            <div className="tab-pane fade" id="enquiry" role="tabpanel" aria-labelledby="enquiry-tab">
              {/*Enquiry*/}
              <div className style={{overflowX: 'scroll'}}>
                <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
                  <thead style={{backgroundColor: '#e4e4fb'}}>
                    <tr>
                      <th scope="col">Task#</th>
                      <th scope="col">Task Title</th>
                      <th scope="col">Start date</th>
                      <th scope="col">End date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Task Type</th>
                      <th scope="col">Assigned To</th>
                      <th scope="col">Team Lead</th>
                      <th scope="col">Actual Start date</th>
                      <th scope="col">Actual End date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className>
                      <td data-label="Subject">1020</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1021</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1022</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1023</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1024</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
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
              {/*Enquiry*/}
            </div>
            <div className="tab-pane fade" id="quotes" role="tabpanel" aria-labelledby="quotes-tab">
              {/*quote*/}
              <div className style={{overflowX: 'scroll'}}>
                <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
                  <thead style={{backgroundColor: '#e4e4fb'}}>
                    <tr>
                      <th scope="col">Task#</th>
                      <th scope="col">Task Title</th>
                      <th scope="col">Start date</th>
                      <th scope="col">End date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Task Type</th>
                      <th scope="col">Assigned To</th>
                      <th scope="col">Team Lead</th>
                      <th scope="col">Actual Start date</th>
                      <th scope="col">Actual End date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className>
                      <td data-label="Subject">1020</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1021</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1022</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1023</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
                    </tr>
                    <tr className>
                      <td data-label="Subject">1024</td>
                      <td data-label="Subject">Design</td>
                      <td data-label="Schedule Start date">Sep 13, 2019</td>
                      <td data-label="Schedule Start date">Sep 17, 2019</td>
                      <td data-label="Assigned To">InProgress</td>
                      <td data-label="Assigned To">Custom</td>
                      <td data-label="Status">Ajay Jadhav</td>
                      <td data-label="Status">Satish Pawar</td>
                      <td data-label="Schedule Start date">Oct 13, 2020</td>
                      <td data-label="Schedule Start date">Nov 5, 2020</td>
                      <td data-label="Action">
                        <div className="align-right tile-icon">
                          <a href="add_task" className><small><i className="material-icons text-dark">edit</i></small></a>
                          <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
                        </div>
                      </td>
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

export default Home;

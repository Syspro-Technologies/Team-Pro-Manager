import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function project_list() {
  sessionStorage.setItem("menuactive","projects");
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
            <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Project</h6></small></li>
          </ul>
          <ul className="navbar-nav ml-auto ">
            <li className=" navbar-item nav-user">
              <a href="add_project" className="btn btn-primary py-2 px-3 label-text">Add Project</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
      <thead style={{backgroundColor: '#e4e4fb'}}>
        <tr>
          <th scope="col">Project Title</th>
          <th scope="col">Start date</th>
          <th scope="col">End Date</th>
          <th scope="col">Status</th>
          <th scope="col">Project Manager</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Actual Start date</th>
          <th scope="col">Actual End date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className>
          <td data-label="Subject"><a className="text-dark" href="add_project">Qad Net Project</a></td>
          <td data-label="Schedule Start date">Sep 13, 2019</td>
          <td data-label="Schedule Start date">Sep 17, 2019</td>
          <td data-label="Status">Inprogress</td>
          <td data-label="Assigned To">Ajay Patil</td>
          <td data-label="Assigned To">Ramesh S</td>
          <td data-label="Schedule Start date">Oct 11, 2020</td>
          <td data-label="Schedule Start date">Sep 13, 2020</td>
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="add_project" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Subject"><a className="text-dark" href="add_project">MMG Project</a></td>
          <td data-label="Schedule Start date">Sep 13, 2019</td>
          <td data-label="Schedule Start date">Sep 17, 2019</td>
          <td data-label="Status">Inprogress</td>
          <td data-label="Assigned To">Ajay Patil</td>
          <td data-label="Assigned To">Ramesh S</td>
          <td data-label="Schedule Start date">Oct 11, 2020</td>
          <td data-label="Schedule Start date">Sep 13, 2020</td>
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="add_project" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Subject"><a className="text-dark" href="add_project">MLD Project</a></td>
          <td data-label="Schedule Start date">Sep 13, 2019</td>
          <td data-label="Schedule Start date">Sep 17, 2019</td>
          <td data-label="Status">Inprogress</td>
          <td data-label="Assigned To">Ajay Patil</td>
          <td data-label="Assigned To">Ramesh S</td>
          <td data-label="Schedule Start date">Oct 11, 2020</td>
          <td data-label="Schedule Start date">Sep 13, 2020</td>
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="add_project" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Subject"><a className="text-dark" href="add_project">EPRS Project</a></td>
          <td data-label="Schedule Start date">Sep 13, 2019</td>
          <td data-label="Schedule Start date">Sep 17, 2019</td>
          <td data-label="Status">Inprogress</td>
          <td data-label="Assigned To">Ajay Patil</td>
          <td data-label="Assigned To">Ramesh S</td>
          <td data-label="Schedule Start date">Oct 11, 2020</td>
          <td data-label="Schedule Start date">Sep 13, 2020</td>
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="add_project" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Subject"><a className="text-dark" href="add_project">CIT Project</a></td>
          <td data-label="Schedule Start date">Sep 13, 2019</td>
          <td data-label="Schedule Start date">Sep 17, 2019</td>
          <td data-label="Status">Inprogress</td>
          <td data-label="Assigned To">Ajay Patil</td>
          <td data-label="Assigned To">Ramesh S</td>
          <td data-label="Schedule Start date">Oct 11, 2020</td>
          <td data-label="Schedule Start date">Sep 13, 2020</td>
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="add_project" className><small><i className="material-icons text-dark">edit</i></small></a>
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
  {/* Page Heading */}
  {/* Content Row */}
  {/* Content Row */}
</div>
 
          </div>
    )
}


export default project_list;
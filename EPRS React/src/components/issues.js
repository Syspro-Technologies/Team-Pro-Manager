import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function issues() {
  sessionStorage.setItem("menuactive","issues");
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
            <li className="breadcrumb-item active" aria-current="page"><a href="index"><small><h6 className="d-inline">Home</h6></small></a></li>
            <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Issues</h6></small></li>
          </ul>
          <ul className="navbar-nav">
            <li className="px-2">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Select Project</option>
                <option>Project1</option>
                <option>Project2</option>
                <option>Project3</option>
                <option>Project4</option>
              </select>
            </li>
            <li>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Select Sprint</option>
                <option>Sprint1</option>
                <option>Sprint2</option>
                <option>Sprint3</option>
                <option>Sprint4</option>
              </select>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto px-2">
            <li className=" navbar-item nav-user">
              <a href="add_issue" className="btn btn-primary py-2 px-3 label-text">Add Issue</a>
            </li>
          </ul>
          <div className=" view-button inner-data pb-0 ">
            <ul className="navbar-nav border-box ">
              <li className="text-right">
                <a href="#" className="text-dark " data-toggle="tooltip" data-placement="top" title="Kanban View" data-original-title="Kanban View">
                  <i className="material-icons">view_week</i>
                </a>
              </li>
              <li className>
                <a href="#" className="text-dark" data-toggle="tooltip" data-placement="top" title data-original-title="List View">
                  <i className="material-icons">format_list_bulleted</i>
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0 " style={{overflowX: 'scroll'}}>
      <thead style={{backgroundColor: '#e4e4fb'}}>
        <tr>
          <th scope="col">Issue#</th>
          <th scope="col">Defect Name</th>
          <th scope="col">Task</th>
          <th scope="col">Status	</th>
          <th scope="col">Release Version(Sprint)</th>
          <th scope="col">Severity</th>
          <th scope="col">Type</th>
          <th scope="col">Priority</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Reported By</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className>
          <td data-label="Bug No.">1</td>
          <td data-label="Defect Name">Defectname</td>
          <td data-label="Task">Task1</td>
          <td data-label="Status">Open</td>
          <td data-label="Release Version(Sprint)">Sprint1</td>
          <td data-label="Severity">High</td>
          <td data-label="Type">Issuetype</td>
          <td data-label="Priority">High</td> 
          <td data-label="Assigned to">Name1</td> 
          <td data-label="Reported By">Name1</td> 
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="edit-issue.html" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Bug No.">1</td>
          <td data-label="Defect Name">Defectname</td>
          <td data-label="Task">Task1</td>
          <td data-label="Status">Open</td>
          <td data-label="Release Version(Sprint)">Sprint1</td>
          <td data-label="Severity">Low</td>
          <td data-label="Type">Issuetype</td>
          <td data-label="Priority">High</td> 
          <td data-label="Assigned to">Name1</td> 
          <td data-label="Reported By">Name1</td> 
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="edit-issue.html" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Bug No.">1</td>
          <td data-label="Defect Name">Defectname</td>
          <td data-label="Task">Task1</td>
          <td data-label="Status">Open</td>
          <td data-label="Release Version(Sprint)">Sprint1</td>
          <td data-label="Severity">Low</td>
          <td data-label="Type">Issuetype</td>
          <td data-label="Priority">High</td> 
          <td data-label="Assigned to">Name1</td> 
          <td data-label="Reported By">Name1</td> 
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="edit-issue.html" className><small><i className="material-icons text-dark">edit</i></small></a>
              <a href="#"><small><i className="material-icons text-dark">delete</i></small></a>
            </div>
          </td>
        </tr>
        <tr className>
          <td data-label="Bug No.">1</td>
          <td data-label="Defect Name">Defectname</td>
          <td data-label="Task">Task1</td>
          <td data-label="Status">Open</td>
          <td data-label="Release Version(Sprint)">Sprint1</td>
          <td data-label="Severity">Major</td>
          <td data-label="Type">Issuetype</td>
          <td data-label="Priority">High</td> 
          <td data-label="Assigned to">Name1</td> 
          <td data-label="Reported By">Name1</td> 
          <td data-label="Action">
            <div className="align-right tile-icon">
              <a href="edit-issue.html" className><small><i className="material-icons text-dark">edit</i></small></a>
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

export default issues;
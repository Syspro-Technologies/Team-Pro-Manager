import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

function add_issue() {
    return (

        <div id='wrapper' >
            <Navigation></Navigation>
            <div id="content-wrapper" className="d-flex flex-column">
  {/* Main Content */}
  <div id="content">
      <Navbar></Navbar>
    {/* Topbar */}
    
    {/* End of Topbar */}
    {/* Begin Page Content */}
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-lg-9 col-xl-9 col-md-9">
          <div className="card mb-4">
            <div className="p-3 pt-3 pb-3">
              <div className="navbar-expand-lg ">
                <div className=" navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="breadcrumb-item active" aria-current="page"><a href="issues"><small><h6 className="d-inline">Issues</h6></small></a></li>
                    <li className="breadcrumb-item active mt-1" aria-current="page"><small><h6 className="d-inline">Create Issue</h6></small></li>
                  </ul>
                  <ul className="navbar-nav ml-auto ">
                    <li className=" navbar-item nav-user mx-2">
                      <a href="issues" className="btn btn-outline-primary py-2 px-3 label-text">Cancel</a>
                    </li>
                    <li className=" navbar-item nav-user mx-2">
                      <a href="issues" className="btn btn-primary py-2 px-3 label-text">Save</a>
                    </li>
                    <li className=" navbar-item nav-user">
                      <a href="issues" className="btn btn-primary py-2 px-3 label-text">Save &amp; New</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-0" />
            <div className="p-3">
              <div className="row">
                <div className="form-group col-lg-6 col-md-12">
                  <label className="label-text" style={{fontWeight: 700}}>Project: EPRS Project</label>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label className="label-text" style={{fontWeight: 700}}>Task: Task Selected</label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-6 col-md-12">
                  <label className="label-text">Issue Title</label>
                  <input type="text" className="form-control" placeholder="Enter Defect Name" />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label className="label-text">Select Priority</label>
                  <select className="form-control">
                    <option>Select Priority</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Select Assignee </label>
                  <select className="form-control form-group">
                    <option>Select User</option>
                    <option>User1</option>
                    <option>User2</option>
                    <option>User3</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Select Severity </label>
                  <select className="form-control form-group">
                    <option>Select Severity</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Select Status </label>
                  <select className="form-control form-group">
                    <option>Select Status</option>
                    <option>Open</option>
                    <option>Closed</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Select Type </label>
                  <select className="form-control form-group">
                    <option>Select Defect Type</option>
                    <option>Technical</option>
                    <option>Type2</option>
                    <option>Type3</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Select Version </label>
                  <select className="form-control form-group">
                    <option>Select Version</option>
                    <option>Sprint1</option>
                    <option>Sprint2</option>
                    <option>Sprint3</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Select Capture Source </label>
                  <select className="form-control form-group">
                    <option>Select Source</option>
                    <option>Source1</option>
                    <option>Source2</option>
                    <option>Source3</option>
                  </select>
                </div>
                <div className="form-group col-lg-12 col-md-12 "><grammarly-extension style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}} className="_1KJtL" />
                  <label className="label-text">Steps to Reproduce</label>
                  <textarea className="form-control form-group" rows={3} style={{height: 'auto !important'}} autoComplete="off" spellCheck="false" placeholder="Enter Description" defaultValue={""} />
                </div>
                <div className="form-group col-lg-12 col-md-12 "><grammarly-extension style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}} className="_1KJtL" />
                  <label className="label-text">Document Reference</label>
                  <input className="form-control form-group" style={{height: 'auto !important'}} autoComplete="off" spellCheck="false" placeholder="Document and Section" />
                </div>
                <div className="col-lg-12 col-md-12">
                  <a style={{fontSize: 12}} href="#">View Files</a>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="board-activity ppt-2 text-center" style={{}}>
                    <label className="label-text mt-2"><i className="material-icons mr-2" style={{verticalAlign: 'middle'}}>cloud_upload</i>Screenshot / Suppoted Documents</label>
                    <label className="d-block">Supported files: .jpg, .png, .pdf</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-3 col-md-3 px-2">
          <div className="card mb-2">
            <div className="p-2 pt-1 pb-2 border-bottom-primary">
              <label className="label-text">Issue History</label>
            </div>
            <div className="pt-2 pb-2">
              <span><i id="arrowissue" className="material-icons ml-5 pl-2" style={{color: '#bfbfbf', fontSize: 22}}>arrow_downward</i></span>
              <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column mb-2">
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div> <span className="vertical-timeline-element-icon bounce-in"> <i className="badge badge-dot badge-dot-xl badge-success"> </i> </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>10 Oct 12020, 3:00 PM</p>
                      <p><span className="text-success">Submitted </span>by Prachi
                      </p></div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div> <span className="vertical-timeline-element-icon bounce-in"> <i className="badge badge-dot badge-dot-xl badge-success"> </i> </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>10 Oct 12020, 3:00 PM</p>
                      <p><span className="text-success">Assigned </span>to Prachi
                      </p></div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div> <span className="vertical-timeline-element-icon bounce-in"> <i className="badge badge-dot badge-dot-xl badge-danger"> </i> </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>10 Oct 12020, 3:00 PM</p>
                      <p><span className="text-danger">Closed </span>by Prachi
                      </p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Heading */}
        {/* Content Row */}
        {/* Content Row */}
      </div>
      {/* /.container-fluid */}
    </div>
    {/* End of Main Content */}
    {/* Footer */}
    {/*
<footer class="sticky-footer bg-white">
<div class="container my-auto">
<div class="copyright text-center my-auto">
<span>Copyright &copy; Syspro Technologies Inc.</span>
</div>
</div>
</footer>
*/}
    {/* End of Footer */}
  </div>
  {/* End of Content Wrapper */}
</div>


        </div>



    )
}


export default add_issue;
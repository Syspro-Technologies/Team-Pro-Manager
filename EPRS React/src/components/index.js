import React from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'

function index() {
    return (

       <div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="Emplpyee Task Management and Review System" />
  <meta name="author" content="Syspro" />
  <title>EPRS / Home</title>
  {/* Custom fonts for this template*/}
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
  {/* Custom styles for this template*/}
  <link href="css/sb-admin-2.css" rel="stylesheet" />
  <link rel="shortcut icon" type="image/x-icon" href="../img/favicon.png" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  {/* Page Wrapper */}
  <div id="wrapper" className="top-space">
    <nav className="navbar navbar-expand navbar-light bg-white fixed-top topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <a href="#" className="navbar-brand ">
        <img src="img/logo-eprs.png" className="d-inline" alt="EPRS-logo" /> </a>
      <div className="collapse navbar-collapse " id="navbarCollapse">
        <ul className="navbar-nav ml-auto ">
          <li className="navbar-item px-3">
            <a href="#" className="nav-link " id>Features</a>
          </li>
          <li className="navbar-item ">
            <a href="#" className="nav-link " id>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="bd-example">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="container" style={{position: 'relative'}}>
            <div className="row">
              <div className="col-md-8 col-lg-6">
                <div className="carousel-caption">
                  <h1 className="mb-3"><b>Project Management and Employee Performance System</b></h1>
                  <form className="user">
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                        <label className="float-right"> <a href="#">forgot Password?</a></label>
                      </div>
                    </div>
                  </form>
                  <a href="/Home" className="btn btn-danger px-4 mx-1 py-3 label-text text-uppercase mt-3">Login</a>
                  <a href="#" className="btn btn-primary px-4 py-3 label-text text-uppercase mt-3">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active carousel-img bg-light">
            <img src="img/banner.svg" className="d-block " alt="slider-one" />
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container"> 
          <div className="form-row">
            <div className="col-md-6 px-4 text-center">
              <img src="img/manage.svg" alt="committee-member" className="img-fluid feature-img-height" />
            </div>
            <div className="col-md-6 px-4 section-padding">
              <h3 className><b>Manage everything in one workspace</b></h3>
              <div className>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  <br /><br />consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container section-padding"> 
          <div className="text-center ">
            <h3 className><b>Our Features</b></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
          </div>
          <div className="form-row">
            <div className="col-md-4 px-4 section-padding text-center">
              <img src="img/Monitoring%20247.svg" alt="committee-member" className=" feature-img-icon" />
              <h4 className="mt-3"><b>Monitoring 24/7</b></h4>
              <div className>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi </p>
              </div>
            </div>
            <div className="col-md-4 px-4 section-padding text-center">
              <img src="img/Task%20Management.svg" alt="committee-member" className="img-fluid feature-img-icon" />
              <h4 className="mt-3"><b>Task Management</b></h4>
              <div className>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi </p>
              </div>
            </div>
            <div className="col-md-4 px-4 section-padding text-center">
              <img src="img/Best%20Performance.svg" alt="committee-member" className="img-fluid feature-img-icon" />
              <h4 className="mt-3"><b>Best Performance</b></h4>
              <div className>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container"> 
          <div className="form-row">
            <div className="col-md-6 px-4 section-padding">
              <h3 className><b>Project planning software for everyone</b></h3>
              <div className>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  <br /><br />consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
              </div>
            </div>
            <div className="col-md-6 px-4 text-center">
              <img src="img/project.svg" alt="committee-member" className="img-fluid feature-img-height" />
            </div>
          </div>
        </div>
      </div>
      <div className="graidient-bg section-padding" id="contact" style={{position: 'relative', zIndex: 1, overflow: 'hidden'}}>
        <div className="container">
          <div className>
            <div className style={{position: 'relative', overflow: 'hidden', zIndex: 1}}>
              <div className="row no-gutters text-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="inner-data">
                    <h1 className="text-light mb-3" style={{fontWeight: 'bold', textShadow: '2px 2px #1111118c'}}>See everything the team’s
                      working on in one place.</h1>
                  </div>
                  <div className=" inner-data">
                    <div className="mobile-hide mt-4" />
                    <a href="#" className="btn btn-warning px-4 py-2 text-dark"><b>Get Started</b></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container"> 
          <div className="form-row">
            <div className="col-md-6 px-4 text-center">
              <img src="img/task-manage.svg" alt="committee-member" className="img-fluid feature-img-height" />
            </div>
            <div className="col-md-6 px-4 section-padding">
              <h3 className><b>Task management software for teams</b></h3>
              <div className>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  <br /><br />consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
  {/* Footer */}
  <footer className="sticky-footer graidient-bg">
    <div className="container my-auto">
      <div className="text-light text-center my-auto">
        <span>Copyright © 2020 EPRS. All rights reserved
        </span>
      </div>
    </div>
  </footer>
  {/* End of Footer */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  {/* Bootstrap core JavaScript*/}
  {/* Core plugin JavaScript*/}
  {/* Custom scripts for all pages*/}
</div>

    )
}

export default index;
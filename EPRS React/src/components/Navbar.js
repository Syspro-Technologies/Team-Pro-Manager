import React from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'


function Navbar() {
    return (
         <nav className="navbar w-100 navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
  {/* Sidebar Toggle (Topbar) */}
  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars" />
  </button>
  {/* Topbar Search */}
  <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div className="input-group">
      <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          <i className="fas fa-search fa-sm" />
        </button>
      </div>
    </div>
  </form>
  {/* Topbar Navbar */}
  <ul className="navbar-nav ml-auto">
  {/* Nav Item - Search Dropdown (Visible Only XS) */}
  <li className="nav-item dropdown no-arrow d-sm-none">
    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-search fa-fw" />
    </a>
    {/* Dropdown - Messages */}
    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
      <form className="form-inline mr-auto w-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </li>
  <li className=" navbar-item p-3">
    <a href="index30min.html" className="btn btn-success py-2 px-3 label-text"><i className="material-icons icon-buttons mr-1 text-white" style={{fontSize: 18, verticalAlign: 'text-top'}}>query_builder</i>Check In</a>
    <label>0:00 hrs</label>
    <span> | </span>
    <a href="#"> <small>More Details</small></a>
  </li> 
  {/* Nav Item - Alerts */}
  <li className="nav-item dropdown no-arrow mx-1">
    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-bell fa-fw" />
      {/* Counter - Alerts */}
      <span className="badge badge-danger badge-counter">3+</span>
    </a>
    {/* Dropdown - Alerts */}
    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
      <h6 className="dropdown-header">
        Alerts Center
      </h6>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="mr-3">
          <div className="icon-circle bg-primary">
            <i className="fas fa-file-alt text-white" />
          </div>
        </div>
        <div>
          <div className="small text-gray-500">December 12, 2019</div>
          <span className="font-weight-bold">A new monthly report is ready to download!</span>
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="mr-3">
          <div className="icon-circle bg-success">
            <i className="fas fa-donate text-white" />
          </div>
        </div>
        <div>
          <div className="small text-gray-500">December 7, 2019</div>
          $290.29 has been deposited into your account!
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="mr-3">
          <div className="icon-circle bg-warning">
            <i className="fas fa-exclamation-triangle text-white" />
          </div>
        </div>
        <div>
          <div className="small text-gray-500">December 2, 2019</div>
          Spending Alert: We've noticed unusually high spending for your account.
        </div>
      </a>
      <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
    </div>
  </li>
  {/* Nav Item - Messages */}
  <li className="nav-item dropdown no-arrow mx-1">
    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="material-icons mr-1 " style={{fontSize: 25, color: '#cbcbcb', verticalAlign: 'text-top'}}>group</i>
      {/* Counter - Messages */}
      <span className="badge badge-danger badge-counter">7</span>
    </a>
    {/* Dropdown - Messages */}
    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
      <h6 className="dropdown-header">
        Message Center
      </h6>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="dropdown-list-image mr-3">
          <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt />
          <div className="status-indicator bg-success" />
        </div>
        <div className="font-weight-bold">
          <div className="text-truncate">Kapil Kulkarni</div>
          <div className="small text-gray-500">Available</div>
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="dropdown-list-image mr-3">
          <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt />
          <div className="status-indicator" />
        </div>
        <div>
          <div className="text-truncate">Ajay Patil</div>
          <div className="small text-gray-500">Not Available</div>
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="dropdown-list-image mr-3">
          <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt />
          <div className="status-indicator bg-warning" />
        </div>
        <div>
          <div className="text-truncate">Vijay Pawar</div>
          <div className="small text-gray-500">In Meeting</div>
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="dropdown-list-image mr-3">
          <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt />
          <div className="status-indicator bg-success" />
        </div>
        <div>
          <div className="text-truncate">Vinay Jadhav</div>
          <div className="small text-gray-500">Available</div>
        </div>
      </a>
      <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
    </div>
  </li>
  <div className="topbar-divider d-none d-sm-block" />
  {/* Nav Item - User Information */}
  <li className="nav-item dropdown no-arrow">
    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="mr-2 d-none d-lg-inline text-gray-600 small">User 1</span>
      <i className="material-icons mr-1 " style={{fontSize: 40, color: '#0f3131', verticalAlign: 'text-top'}}>account_circle</i>
    </a>
    {/* Dropdown - User Information */}
    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
      <a className="dropdown-item" href="profile">
        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
        Profile
      </a>
      <a className="dropdown-item" href="#">
        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
        Settings
      </a>
      <a className="dropdown-item" href="#">
        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
        Activity Log
      </a>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="/" >
        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
        Logout
      </a>
    </div>
  </li>
</ul>


  
</nav>


                    
   
    )
}

export default Navbar
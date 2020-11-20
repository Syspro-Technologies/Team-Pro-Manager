import React from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'



function Navigation() {
    return (
        
                    <div>
                    <ul className="h-100 navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar - Brand */}
  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div className="sidebar-brand-icon">
      {/* <i class="fas fa-laugh-wink"></i> */}
      <img src="img/EPRSLogo.png" alt="Logo" style={{width: '80%'}} />
    </div>
    {/* <div class="sidebar-brand-text mx-3">ERPS</div> */}
  </a>
  {/* Divider */}
  <hr className="sidebar-divider my-0" />
  {/* Nav Item - Dashboard */}

  <li className={sessionStorage.getItem("menuactive")=="home"?"nav-item active":"nav-item"}>
  <NavLink to="/Home" className="nav-link" exact activeClassName="active-nav-react" id="">
    <i className="fas fa-fw fa-house-user" 
    />Home</NavLink>
 </li>
  
  <li className={sessionStorage.getItem("menuactive")=="dashboard"?"nav-item active":"nav-item"}>
  <NavLink to="#" className="nav-link" exact activeClassName="active-nav-react" id="">
    <i className="fas fa-fw fa-tachometer-alt" 
    />Dashboard</NavLink>
 </li>
  <li className={sessionStorage.getItem("menuactive")=="projects"?"nav-item active":"nav-item"}>
  <NavLink to="/project_list" className="nav-link" exact activeClassName="active-nav-react" id="">
    <i className="fas fa-fw fa-archway" 
    />Projects</NavLink>
 </li>
  <li className={sessionStorage.getItem("menuactive")=="sprints"?"nav-item active":"nav-item"}>
  <NavLink to="/sprints" className="nav-link" exact activeClassName="active-nav-react" id="">
    <i className="fas fa-fw fa-running" 
    />Sprint</NavLink>
 </li>

 <li className={sessionStorage.getItem("menuactive")=="tasks"?"nav-item active":"nav-item"}>
  <NavLink to="/tasks" className="nav-link" exact activeClassName="active-nav-react" id="">
    <i className="fas fa-fw fa-tasks" 
    />Tasks</NavLink>
 </li>

 <li className={sessionStorage.getItem("menuactive")=="issues"?"nav-item active":"nav-item"}>
  <NavLink to="/issues" className="nav-link" exact activeClassName="active-nav-react" id="">
    <i className="fas fa-fw fa-times" 
    />Issues</NavLink>
 </li>

  {/* Divider */}
  <hr className="sidebar-divider" />
  {/* Nav Item - Pages Collapse Menu */}
  {/* <li class="nav-item">
<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
<i class="fas fa-fw fa-cog"></i>
<span>Components</span>
</a>
<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
<div class="bg-white py-2 collapse-inner rounded">
<h6 class="collapse-header">Custom Components:</h6>
<a class="collapse-item" href="buttons.html">Buttons</a>
<a class="collapse-item" href="cards.html">Cards</a>
</div>
</div>
</li> */}
  {/* Nav Item - Utilities Collapse Menu */}
  {/* <li class="nav-item">
<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
<i class="fas fa-fw fa-wrench"></i>
<span>Utilities</span>
</a>
<div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
<div class="bg-white py-2 collapse-inner rounded">
<h6 class="collapse-header">Custom Utilities:</h6>
<a class="collapse-item" href="utilities-color.html">Colors</a>
<a class="collapse-item" href="utilities-border.html">Borders</a>
<a class="collapse-item" href="utilities-animation.html">Animations</a>
<a class="collapse-item" href="utilities-other.html">Other</a>
</div>
</div>
</li> */}
  {/* Divider */}
  {/* <hr class="sidebar-divider"> */}
  {/* Heading */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages1" aria-expanded="true" aria-controls="collapsePages">
      <i className="fas fa-fw fa-user-shield" />
      <span>Master</span>
    </a>
    <div id="collapsePages1" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
       <a className="collapse-item" href="status">Status</a>
        <a className="collapse-item" href="users">Users</a>
        <a className="collapse-item" href="roles">Roles</a>
        <a className="collapse-item" href="#">Evaluations </a>
        <a className="collapse-item" href="#">Check-ins</a>
      </div>
    </div>
  </li>
  <hr className="sidebar-divider" />
  {/* Nav Item - Pages Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
      <i className="fas fa-fw fa-user-shield" />
      <span>Admin</span>
    </a>
    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <a className="collapse-item" href="tenants">Tenants</a>
        <a className="collapse-item" href="#">Error logs</a>
        <div className="collapse-divider" />
      </div>
    </div>
  </li>
  {/* Nav Item - Charts */}
  {/* <li class="nav-item">
<a class="nav-link" href="charts.html">
<i class="fas fa-fw fa-chart-area"></i>
<span></span></a>
</li>

<li class="nav-item">
<a class="nav-link" href="charts.html">
<i class="fas fa-fw fa-chart-area"></i>
<span>Status</span></a>
</li>

<li class="nav-item">
<a class="nav-link" href="tables.html">
<i class="fas fa-fw fa-table"></i>
<span>Priority</span></a>
</li>


<li class="nav-item">
<a class="nav-link" href="tables.html">
<i class="fas fa-fw fa-table"></i>
<span>Users</span></a>
</li>

<li class="nav-item">
<a class="nav-link" href="tables.html">
<i class="fas fa-fw fa-table"></i>
<span>Roles</span></a>
</li>

<li class="nav-item">
<a class="nav-link" href="tables.html">
<i class="fas fa-fw fa-table"></i>
<span>Tenants</span></a>
</li> */}
  {/* Divider */}
  <hr className="sidebar-divider d-none d-md-block" />
  {/* Sidebar Toggler (Sidebar) */}
  <div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle" />
  </div>
</ul>

                  </div>     
   
    )
}

export default Navigation
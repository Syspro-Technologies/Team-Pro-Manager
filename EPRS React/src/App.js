import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import project_list from './components/project_list';
import sprints from './components/sprints';
import tasks from './components/tasks';
import add_project from './components/add_project';
import add_sprint from './components/add_sprint';
import add_task from './components/add_task';
import roles from './components/roles';
import users from './components/users';
import status from './components/status';
import tenants from './components/tenants';
import index from './components/index';
import issues from './components/issues';
import add_issue from './components/add_issue';
import profile from './components/profile';



function App() {
  return (
    <div>
      
      <Router>
          
          
          <Route exact path="/" component={index}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Navigation"  component={Navigation}/>
          <Route path="/Navabr" component={Navbar}/>
          <Route path="/project_list" component={project_list}/>
          <Route path="/sprints" component={sprints}/>
          <Route path="/tasks" component={tasks}/>
          <Route path="/add_project" component={add_project}/>
          <Route path="/add_sprint" component={add_sprint}/>
          <Route path="/add_task" component={add_task}/>
          <Route path="/roles" component={roles}/>
          <Route path="/users" component={users}/>
          <Route path="/status" component={status}/>
          <Route path="/tenants" component={tenants}/>
          <Route path="/issues" component={issues}/>
          <Route path="/add_issue" component={add_issue}/>
          <Route path="/profile" component={profile}/>
      </Router>
      

    </div>
    
  );
}

export default App;

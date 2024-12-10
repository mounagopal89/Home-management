import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TaskManagement from './components/TaskManagement';
import ContactsManagement from './components/ContactsManagement';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Home Maintenance</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/tasks">Task Management</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts Management</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tasks" component={TaskManagement} />
          <Route path="/contacts" component={ContactsManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


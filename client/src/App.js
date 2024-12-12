import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import TaskManagement from './components/TaskManagement';
import ContactsManagement from './components/ContactsManagement';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManagement />} />
          <Route path="/contacts" element={<ContactsManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
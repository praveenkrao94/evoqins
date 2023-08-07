import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        
        <div className="navbar-brand" id='companyLogo' href="/">
          Evoque Innovative Lab
        </div>
       
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
            <li className="nav-item d-lg-none"> 
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item d-lg-none"> 
              <a className="nav-link" href="/">
                Register
              </a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex" id='loginButtons'> 
          <a className="btn btn-outline-primary me-2" href="/">
            Login
          </a>
          <a className="btn btn-primary" href="/">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





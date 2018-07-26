import React from "react";
import NewIssueMod from "../../pages/NewIssueMod";
import "./Nav.css";



const Nav = () => (
  
  <nav className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" href="/">
      KTI
    </a>
 
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">All Issues</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/website">Website</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/flyapp">Frontier App</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/rnt">RNT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/nettracer">Net Tracer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bagform">Bag Form</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/irop">IROP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin">Admin</a>
        </li>
        </ul>
        <div className="navbar-nav ml-auto">
          <ul className="nav navbar-nav">
          <NewIssueMod/>
          </ul>
        </div>
    </div>
  </nav>
);

export default Nav;

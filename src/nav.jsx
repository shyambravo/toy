import React from 'react';
import App from "./App";
import Add from "./add";



function Nav() {
    return <div id="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="boot-nav">
    <a className="navbar-brand" href="#">Toy Store</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href={<App />}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={<Add />}>Add Toys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Edit Toys</a>
        </li>
       
      </ul>
    </div>
  </nav>
    </div>
}


export default Nav;
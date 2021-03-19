import React from 'react';
import {Link} from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="containet">
           <nav class="navbar navbar-expand-lg main-menu">
  <div class="container-fluid">
   <Link to='/'> <li class="navbar-brand" href="#">Navbar</li></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto  ">
        <Link to='/'><li class="nav-item">Home</li></Link>
        <Link to='/details'><li class="nav-item">Details</li></Link>
        <Link to='/'><li class="nav-item">Blog</li></Link>
       <Link to='/signup'> <li class="nav-item">
          <button className=" btn btn-primary">Sign Up</button>
        </li></Link>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
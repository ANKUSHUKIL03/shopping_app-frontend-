import React from "react";
import {Link} from "react-router-dom";
import "./slidersize.css";
import { BsPersonStandingDress } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FcBullish } from "react-icons/fc";
import { right } from "@popperjs/core";
import { FcPrivacy } from "react-icons/fc";
function navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary box-shadow custom shadow ml-3" style={{backgroundColor:"yellow"}}>
    <div class="container-fluid">
    <Link to="/" class="navbar-brand mb-2" style={{fontSize:"30px"}}><FcPrivacy /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item hovering">
        <Link to="/" className="nav-link active" style={{ color: '', fontFamily: "fantasy", textShadow:"2px 2px solid black" }}>Home</Link>
        </li>
        <li class="nav-item hovering">
          <Link to="/about" class="nav-link active" style={{ color: '', fontFamily: "fantasy" }}>About</Link>
        </li>
        <li class="nav-item hovering">
          <Link to="/contact" class="nav-link active" style={{ color: '', fontFamily: "fantasy" }}>Contact</Link>
        </li>
        </ul>
        <div className="navebar-nav hov" style={{marginRight: "10px"}}>
        <Link to="/login" class="nav-link active" style={{ color: '', fontFamily: "fantasy" }}>LOGIN</Link>
        </div>
        <div style={{marginRight: "15px", fontSize: "24px"}}> {/* Increased font size to 24px */}
        <CgProfile />
       </div>
        <div className="d-flex align-items-center">
          {/* Added mr-3 class for margin-right */}
             <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
               <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
</div>
    </div>
  </div>
</nav>

    );

}
export default navbar;
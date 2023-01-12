import React from "react";
import logo from "./assets/logo.png";

const Navbar = () => {
    return(
        <>

        <div classNameName="container-fluid nav_bg">
            <div classNameName="row">
                <div classNameName="col-10 mx-auto">

                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" width="60" height="45" class="d-inline-block align-text-top ms-auto"/>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto pr-3">
        <a className="nav-link active " aria-current="page" href="#">Home</a>
        <a className="nav-link " href="#">About</a>
        <a className="nav-link  " href="#">Contact</a>
       
      </div>
    </div>
  </div>
</nav>
                    
                
       
        </div>
            </div>
                </div>
        </>

    );
};

export default Navbar;


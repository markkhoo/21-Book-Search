import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">Book Search</h1>
          <p class="lead">Search for any book you like!!</p>
        </div>
      </div>
      {/* -----Navbar----- */}
      <nav class="navbar navbar-expand-lg bg-dark">
        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>

            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved" || window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved
            </Link>

            
          </div>
        </div>
      </nav>
   
    </div>
     
  );
}

export default Header;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search";
//import Saved from "./pages/saved";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link" href="/search">Search</a>
                <a className="nav-link" href="/saved">Saved</a>
             </div>
            </div>
          </nav>
          <Route exact path="/" component={Search} />
          <Route exact path="/home" component={Search} />
          {/* <Route exact path="/saved" component={saved} /> */}
        </div>
      </Router>

    </div>
  );
}


export default App;

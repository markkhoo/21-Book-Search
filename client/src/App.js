import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="/search">Search</a>
                <a class="nav-link" href="/saved">Saved</a>
             </div>
            </div>
          </nav>
          <Route exact path="/" component={search} />
          <Route exact path="/home" component={search} />
          <Route exact path="/saved" component={saved} />
        </div>
      </Router>

    </div>
  );
}


export default App;

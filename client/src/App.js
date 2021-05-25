import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        
          <Route exact path="/" component={Search} />
          <Route exact path="/home" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>

    </div>
  );
}


export default App;

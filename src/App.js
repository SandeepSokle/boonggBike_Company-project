


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./CSS/App.css"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { Search } from "./Components/Search";

function App() {
  var [showLoginModal, setShowLoginModal] = useState(false);


  return (
    <div className="App_Container">
      <Router>
        <Navbar showLoginModal = {showLoginModal} setShowLoginModal = {setShowLoginModal}/>
        <Switch>
          <Route exact path = "/">
            <Home showLoginModal = {showLoginModal}/>
          </Route>
          <Route path = "/search">
            <Search/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

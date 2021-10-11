


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./CSS/App.css"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";

function App() {

useEffect(()=>{
  window.addEventListener("scroll",(e)=>{
    console.log(window.scrollY);
  })
  return ()=>{
    window.removeEventListener("scroll",()=>{
      console.log("remove Event");
    });
  }
},[])

  return (
    <div className="App_Container">
      <Router>
        <Navbar/>
        <Switch>
          
          <Route exact path = "/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

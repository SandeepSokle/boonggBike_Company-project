


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./CSS/App.css"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {



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

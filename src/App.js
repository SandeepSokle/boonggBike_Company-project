


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Three from './Three';
import Navbar from "./Navbar";
import "./CSS/App.css"

function App() {
  return (
    <div className="App_Container">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = "/five">
              <Five/>
          </Route>
          <Route path = "/six">
              <Six/>
          </Route>
          <Route path = "/seven">
              <Seven/>
          </Route>
          <Route path = "/three">
              <Three/>
          </Route>
          <Route exact path = "/">
            Home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

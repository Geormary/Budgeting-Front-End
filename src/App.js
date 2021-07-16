//DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index"
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";

//COMPONENTS
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      {/* <h1>Budget App</h1> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
          <Index />
          </Route>
          <Route path = "/transactions/new">
            <New/>
          </Route>
          <Route exact path="/transactions/:id">
            <Show/>
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

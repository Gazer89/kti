import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";
import BagForm from "./pages/BagForm";
import FlyApp from "./pages/FlyApp";
import Website from "./pages/Website";
import RNT from "./pages/RNT";
import NetTracer from "./pages/NetTracer";
import IROP from "./pages/IROP";
import TopIssues from "./pages/TopIssues";
import Nav from "./components/Nav";
// import Login from "./components/Login";



const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={TopIssues} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/bagform" component={BagForm} />
        <Route exact path="/website" component={Website} />
        <Route exact path="/rnt" component={RNT} />
        <Route exact path="/nettracer" component={NetTracer} />
        <Route exact path="/irop" component={IROP} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/flyapp" component={FlyApp} />
      </Switch>
    </div>
  </Router>
);

export default App;

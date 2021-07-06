import React from "react";
import ReactDOM from "react-dom";
import Home from "./home/Home.js";
import Login from "./login/Login.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

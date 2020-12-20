import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Example from "./components/example/Example";
import States from "./components/states/States";
//hash router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/main.css";
ReactDOM.render(
  <div>
      <Header />
      <HashRouter>
          <div>
              <div id='dynamic-toolbar'>
                  <Link className='view-button' to="/states">States</Link>
                  <Link className='view-button' to="/example">Example</Link>
              </div>
              <Route path="/states" component={States}></Route>
              <Route path="/example" component={Example}></Route>
          </div>
      </HashRouter>
  </div>,
  
  document.getElementById('reactapp'),
);
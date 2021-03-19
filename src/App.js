import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>
      <Header></Header>
    <div>
     

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/details">
          <Details></Details>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  </Router>
);

}

export default App;

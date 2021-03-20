import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";

import Home from './Components/Home/Home';
import Details from './Components/Details/Details';




import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';

import Header from './Components/Header/Header'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Notfound from './Components/NotFound/Notfound';
  export const UserContext=createContext()

function App() {
  const [logedInUser,setLoginUser]=useState({})
  return (
    <div className="App">
    <UserContext.Provider value={ [logedInUser,setLoginUser]}>  <Router>
     
      <Header></Header>
     
    
     

     {/* A <Switch> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <PrivateRoute path="/details/:id">
         <Details></Details>
       </PrivateRoute>
       <Route path="/signup">
        <SignUp></SignUp>
       </Route>
       
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="*">
         <Notfound></Notfound>
       </Route>
       
     </Switch>
  
 </Router></UserContext.Provider>
    </div>
);

}

export default App;

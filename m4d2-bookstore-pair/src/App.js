import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CustomNavbar from './components/CustomNavbar';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
     <Router>
       <CustomNavbar />
       <Route path="/registration" exact component={RegistrationForm} />
       
     </Router>
    </div>
  );
}

export default App;

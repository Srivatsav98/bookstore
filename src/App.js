import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Login from './components/Login';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
        <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact" exact>
            <Contact></Contact>
          </Route>
          <Route path="/about" exact>
            <AboutUs></AboutUs>
          </Route>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>

     

        
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
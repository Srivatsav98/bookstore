import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
        <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/">
            <HomePage></HomePage>
          </Route>

        
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from "./screens/Login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
             <Route path="/login" component={Login} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

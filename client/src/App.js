import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LoginSignup from './Components/LoginSingup';
import ProductList from './Components/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginSignup}></Route>
          <Route exact path="/" component={ProductList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

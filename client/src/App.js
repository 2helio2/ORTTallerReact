import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LoginSignup from './Components/LoginSingup';
import ProductList from './Components/ProductList';
import './global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginSignup}></Route>
          <Route exact path="/" component={ProductList} test='test'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import UserIndex from './UserIndex';
import Users from './Users';


function App() {

  return (
    <Router>
      <section className="App">
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            <h1>Welcome!</h1>
          </Route>
          <Route path='/about'>
            <h1>About</h1>
          </Route>
          <Route path='/users/:userId'>
            <UserIndex />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;

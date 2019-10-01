import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/location">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/location">
            <Location />
          </Route> */}
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            {/* <Home /> */}
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

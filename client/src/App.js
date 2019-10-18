import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './components/Login'
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./authentication/PrivateRoute.js"

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/bubble">Bubble Page</Link>
          </li>
        </ul>

        <Route path="/login" component={Login} />
        <PrivateRoute path='/bubble' component={BubblePage} />

      </div>
    </Router>
  );
}

export default App;
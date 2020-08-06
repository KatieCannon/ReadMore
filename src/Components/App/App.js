import React, { useState } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const user = useState('kate');

  return (
    <div className="App">
      <NavBar user={user[0]} />
      <Router >
        <Switch>
          <Route path='/login'>

          </Route>
          <Route path='/signup'>

          </Route>
          <Route path='/challenge'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

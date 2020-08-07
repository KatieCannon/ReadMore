import React, { useState } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const user = useState('kate');

  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path='/booklist'>
            <NavBar user={user[0]} />
          </Route>
          <Route path='/challenge'>
            <NavBar user={user[0]} />
          </Route>
          <Route path='/bookshelf'>
            <NavBar user={user[0]} />
          </Route>
          <Route path='/'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

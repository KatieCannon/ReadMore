import React, { useState } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';

function App() {
  const user = useState('kate');

  return (
    <div className="App">
      <NavBar user={user[0]} />
    </div>
  );
}

export default App;

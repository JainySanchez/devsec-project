import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          {isLoggedIn ? <Welcome setIsLoggedIn={setIsLoggedIn} /> : <Login onLogin={() => setIsLoggedIn(true)} />}
        </Route>
      </Router>
    </div>
  );
}

export default App;

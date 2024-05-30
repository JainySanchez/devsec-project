import React, { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <div>
            <h2>Bienvenido Usuario</h2>
            <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>
          </div>
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} /> 
        )}
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import ChangePassword from './ChangePassword'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (email, password) => {
    console.log('Registrando usuario con email:', email, 'y password:', password);
  };

  const handleChangePassword = (oldPassword, newPassword) => {
    console.log('Cambiando contraseña desde', oldPassword, 'a', newPassword);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Welcome onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
          <Route exact path="/register" element={<Register onRegister={handleRegister} />} />
          <Route exact path="/change-password" element={<ChangePassword onChangePassword={handleChangePassword} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

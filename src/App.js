import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import ChangePassword from './ChangePassword'; // Importa el componente de cambio de contraseña

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (email, password) => {
    // Aquí puedes añadir la lógica para registrar al usuario
    console.log('Registrando usuario con email:', email, 'y password:', password);
  };

  const handleChangePassword = (oldPassword, newPassword) => {
    // Aquí puedes añadir la lógica para cambiar la contraseña
    console.log('Cambiando contraseña desde', oldPassword, 'a', newPassword);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Welcome onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route exact path="/register">
            <Register onRegister={handleRegister} />
          </Route>
          <Route exact path="/change-password"> 
            <ChangePassword onChangePassword={handleChangePassword} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

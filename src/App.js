import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import PasswordRecovery from './PasswordRecovery'; // Importa el componente de recuperación de contraseña

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

  const handlePasswordRecovery = (email) => {
    // Aquí puedes añadir la lógica para enviar el correo de recuperación de contraseña
    console.log('Solicitando recuperación de contraseña para el email:', email);
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
          <Route exact path="/password-recovery"> {/* Nueva ruta para la página de recuperación de contraseña */}
            <PasswordRecovery onPasswordRecovery={handlePasswordRecovery} /> {/* Pasa la función handlePasswordRecovery */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

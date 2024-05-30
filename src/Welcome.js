import React from 'react';

const Welcome = ({ setIsLoggedIn }) => {
  return (
    <div>
      <h2>Bienvenido Usuario</h2>
      <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>
    </div>
  );
};

export default Welcome;

import React, { useState } from 'react';

const PasswordRecovery = ({ onPasswordRecovery }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('El campo de correo electrónico es obligatorio.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('El formato del correo electrónico no es válido.');
      return;
    }
    onPasswordRecovery(email);
    setSuccessMessage('Se ha enviado un correo electrónico con instrucciones para recuperar la contraseña.');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;

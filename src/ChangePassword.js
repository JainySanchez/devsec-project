import React, { useState } from 'react';

const ChangePassword = ({ onChangePassword }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar fortaleza de la contraseña
    if (newPassword.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    if (!/[a-z]/.test(newPassword)) {
      setErrorMessage('La contraseña debe contener al menos una letra minúscula.');
      return;
    }
    if (!/[A-Z]/.test(newPassword)) {
      setErrorMessage('La contraseña debe contener al menos una letra mayúscula.');
      return;
    }
    if (!/\d/.test(newPassword)) {
      setErrorMessage('La contraseña debe contener al menos un número.');
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(newPassword)) {
      setErrorMessage('La contraseña debe contener al menos un carácter especial.');
      return;
    }
    // Aquí puedes añadir la lógica para cambiar la contraseña
    onChangePassword(oldPassword, newPassword);
    setOldPassword('');
    setNewPassword('');
    setErrorMessage('');
    setSuccessMessage('La contraseña se ha cambiado correctamente.');
  };

  return (
    <div>
      <h2>Cambiar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contraseña Antigua:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Cambiar Contraseña</button>
      </form>
    </div>
  );
};

export default ChangePassword;

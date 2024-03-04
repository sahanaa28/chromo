
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


// Import useHistory from React Router

const AccountBox = () => {
   
    const navigate = useNavigate();
    navigate('/HomePage'); // Access the history object for navigation

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check if username and password match (you may want to replace this with actual authentication logic)
    if (username === 'yourValidUsername' && password === 'yourValidPassword') {
      // Redirect to the home page if credentials are valid
      navigate('/home');
    } else {
      // Display an error message if credentials are invalid
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AccountBox;


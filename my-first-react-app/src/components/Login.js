// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isNewUser) {
      localStorage.setItem('user', JSON.stringify({ email }));
      alert('User signed up successfully!');
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email) {
        alert('Login successful!');
        navigate('/profile');
      } else {
        alert('User not found. Please sign up.');
      }
    }
  };

  return (
    <div>
      <h2>{isNewUser ? 'Sign Up' : 'Login'}</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>
        {isNewUser ? 'Sign Up' : 'Login'}
      </button>
      <button onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? 'Have an account? Login' : 'New here? Sign Up'}
      </button>
    </div>
  );
};

export default Login;

// AdminLogin.jsx

import React, { useState } from 'react';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      maxWidth: '300px',
      margin: 'auto',
      marginTop: '50px',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '1.5em',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '10px',
      fontSize: '1em',
    },
    input: {
      padding: '8px',
      fontSize: '1em',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      fontSize: '1em',
      cursor: 'pointer',
    },
  };

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [presentToken, setPresentToken] = useState(localStorage.getItem('token') || '');

  
  const verifyToken = async () =>{
    try {
      const response = await fetch('http://localhost:5000/api/tokenVerify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ presentToken }),
      });

      const data = await response.json();

      if (response.ok) {// Store the token in local storage
        window.location.href="./admin";
        console.log(data.message);
        setLoginError(false);
      } else {
        // Login failed
        setPresentToken('');
        localStorage.setItem('token', '')
        console.log(data.message);
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError(true);
    }
  }
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        localStorage.setItem('token', data.token); // Store the token in local storage
        window.location.href="./admin";
        console.log(data.message);
        setLoginError(false);
      } else {
        // Login failed
        console.log(data.message);
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError(true);
    }
  };

  return (
    <div style={styles.container}>
      
      <h2 style={styles.title}>Admin Login</h2>
      {presentToken.length < 10 ? (
        <form style={styles.form} >
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
      ) : (
        <button onClick={verifyToken}>Login</button>
      )}
      
    </div>
  );
};

export default AdminLogin;

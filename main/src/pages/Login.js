import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLogin = () => {
    const isAuthenticated = true;
    if (isAuthenticated && username==='Admin' && password==='admin') {
      onLogin(username);
      onLogin(password);
      window.location.href = 'http://localhost:3000/Search';
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <div className="form-group"><label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      </div>
      <div className="form-group">
          <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      /></div>
      <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

const SearchPage = ({ username, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Redirecting to search page.</p>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <SearchPage username={username} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
      setUser({ email });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setRegisteredUser({ email, password });
    alert('Sign up successful! Please log in.');
    setIsLogin(true);
  };

  const handleLogout = () => {
    setUser(null);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h2>Dashboard</h2>
          <p>Welcome, React Developer!</p>
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="form-container">
          {isLogin ? (
            <div>
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </form>
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Sign Up
                </a>
              </p>
            </div>
          ) : (
            <div>
              <h2>Sign Up</h2>
              <form onSubmit={handleSignup}>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <p>
                Already have an account?{' '}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Login
                </a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

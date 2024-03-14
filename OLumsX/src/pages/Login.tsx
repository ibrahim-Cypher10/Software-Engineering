import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      // Simulate API call for login
      const response = await axios.post('/api/login', { email, password });
      console.log('Login successful', response.data); // Handle success appropriately
      
      navigate('/home'); // Navigate to home page or dashboard
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.error || 'Login failed');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In to OLumsX</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <span className="password-toggle">
            <input 
              type="checkbox" 
              id="show-password" 
              checked={showPassword}
              onChange={togglePasswordVisibility} 
            />
            <label htmlFor="show-password">Show password</label>
          </span>
        </div>
        <a href="#" className="forgot-password">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseDb } from '../utils/apiDb';
import { useUserRole } from '../context/UserRoleContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useUserRole();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userData = await supabaseDb.login(email, password);
      login(userData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/bpdacc-logo.png" alt="BPDACC Logo" className="login-logo" onError={(e) => e.target.style.display = 'none'} />
          <h2>BPDACC Inventory</h2>
          <p>Please sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>

      <style>{`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .login-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .login-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 15px;
          object-fit: contain;
        }

        .login-header h2 {
          color: #2c3e50;
          margin: 0 0 10px 0;
          font-size: 24px;
        }

        .login-header p {
          color: #7f8c8d;
          margin: 0;
          font-size: 14px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #34495e;
        }

        .form-group input {
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .login-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 10px;
        }

        .login-button:hover {
          background-color: #2980b9;
        }

        .login-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }

        .login-error {
          background-color: #fee;
          color: #e74c3c;
          padding: 12px;
          border-radius: 6px;
          font-size: 13px;
          text-align: center;
          border: 1px solid #fcc;
        }
      `}</style>
    </div>
  );
};

export default Login;

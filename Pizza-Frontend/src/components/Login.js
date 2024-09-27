import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'; 

const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Email and password are required');
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json(); // Parse response data as JSON
            console.log(data);
            setSuccess('Login successful!');
            setError('');
            // Store the JWT token in local storage
            localStorage.setItem('token', data.token);
            // Redirect to a protected route or dashboard
            setTimeout(() => {
                navigate('/dashboard'); // Redirect to dashboard
            }, 2000);
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please try again.');
            setSuccess('');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Redirect to the register page
    };

    return (
        <div className="login-container">
            <div className='side_box_login'>
                 <h1 id="side_h1_l">Hello, Friend!</h1>
                 <p id="side_p_r">Enter your personal details and start jouney with us</p>
                 <button id="side_login" onClick={() => navigate('/register')}>Sign Up</button>
            </div>
            <div id="div_login">
                <h1 id="login_h2">Sign In</h1>
                <form onSubmit={handleLogin}>
                    <input
                        id="login_input"
                        type="email"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign In</button>
                </form>
                {success && <p style={{ color: 'green' }}>{success}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p id="login_p" style={{ marginTop: '20px' }}>
                    Don't have an account?{' '}
                    <span
                        style={{ color: 'white', cursor: 'pointer' }}
                        onClick={handleRegisterClick}
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;

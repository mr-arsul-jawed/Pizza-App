import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Register.css'; 

const server_url = process.env.SERVER_URL

const Register = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(server_url)
        console.log(`${server_url}/api/auth/register`)
        try {
            const response = await axios.post(`${server_url}/api/auth/register`, {
                username, 
                email, 
                password 
            });
            if(response.data.success){
                console.log(response.data.message); 
                // After registration, redirect to login page
                navigate('/login');
            }
            else{
                console.log(response.data.message);
            }
            
        } catch (error) {
            console.error(error);
            // Handle registration error, e.g., display an error message
        }
    };

    // Function to handle the login link click
    const handleLoginClick = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="register-container">
            <div className='side_box_register'>
                 <h1 id="side_h1_r">Welcome Back!</h1>
               
<p id="side_p_l">To keep connected with us please login with your personal info</p>
                <button id="side_login"onClick={() => navigate('/login')}>Sign In</button>
            </div>
        <div id="div_register">
            <h2 id="register_h2">Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input
                    id="register_input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button id="register_button" type="submit">Sign Up</button>
            </form>
            <p id="register_p"  style={{ marginTop: '20px' }}>
                Have an account?{' '}
                <span
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={handleLoginClick}
                >
                    Login
                </span>
            </p>
        </div>
        </div>
    );
};

export default Register;

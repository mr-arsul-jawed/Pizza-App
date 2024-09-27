import React from 'react';
import './CSS/Login.css';
import './CSS/Register.css'; 
import './CSS/Navbar.css'; 
import './CSS/Home.css'; 
import './CSS/Contact.css'; 
import './CSS/Footer.css'; 

import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Contact from './components/Contact';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Footer from './components/Footer';


import dotenv from 'dotenv';

dotenv.config();

// New Component that contains the Routes and Footer logic
function MainContent() {
    const location = useLocation();

    console.log('MainContent component rendered');
    // const noFooterPages = ['/login', '/register', '/admin'];

    return (
        <>
        
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/contact" element={<Contact />} /> 
            </Routes>

            {/* Conditionally render the Footer: hide it on login and register pages */}
            {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
    
        </>
    );
}

function App() {
    console.log('App component rendered');

    return (
        <Router>
            <Navbar />
            <MainContent /> {/* Keep the routes and footer logic inside MainContent */}
        </Router>
    );
}

export default App;
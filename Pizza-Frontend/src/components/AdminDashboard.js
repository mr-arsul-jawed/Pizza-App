// src/components/AdminDashboard.js
import React from 'react';
import Inventory from './Inventory';  // Ensure this path is correct based on your directory structure

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Inventory />
            {/* You can add more admin-related components here */}
        </div>
    );
}

export default AdminDashboard;

import React from 'react';
import Inventory from '../components/Inventory';
import OrderStatus from '../components/OrderStatus';

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Inventory />
            <OrderStatus />
        </div>
    );
};

export default AdminPage;

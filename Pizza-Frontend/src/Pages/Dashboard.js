import React from 'react';
import PizzaMenu from '../components/PizzaMenu';
import CustomPizza from '../components/CustomPizza';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to Pizza Dashboard</h1>
            <PizzaMenu />
            <CustomPizza />
        </div>
    );
};

export default Dashboard;

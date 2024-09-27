// src/components/OrderStatus.js
import React from 'react';

const OrderStatus = ({ status }) => {
    return (
        <div>
            <h2>Order Status</h2>
            <p>{status}</p>
            {/* You can add more details about the order status here */}
        </div>
    );
}

export default OrderStatus;

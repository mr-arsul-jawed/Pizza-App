import React from 'react';

const PizzaMenu = () => {
    const pizzas = ['Margherita', 'Pepperoni', 'Veggie', 'BBQ Chicken', 'Hawaiian'];
    
    return (
        <div>
            <h2>Pizza Varieties</h2>
            <ul>
                {pizzas.map((pizza, index) => (
                    <li key={index}>{pizza}</li>
                ))}
            </ul>
        </div>
    );
};

export default PizzaMenu;

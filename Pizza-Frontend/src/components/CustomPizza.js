import React, { useState } from 'react';

const CustomPizza = () => {
    const [base, setBase] = useState('');
    const [sauce, setSauce] = useState('');
    const [cheese, setCheese] = useState('');
    const [veggies, setVeggies] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const customPizza = {
            base,
            sauce,
            cheese,
            veggies,
        };
        console.log('Custom Pizza:', customPizza);
        // You can send this data to the backend
    };

    const veggieOptions = ['Tomato', 'Onion', 'Pepper', 'Mushroom', 'Olives'];

    const handleVeggieChange = (e) => {
        const value = e.target.value;
        setVeggies((prev) => 
            prev.includes(value) 
                ? prev.filter(veggie => veggie !== value) 
                : [...prev, value]
        );
    };

    return (
        <div>
            <h2>Create Your Custom Pizza</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Choose Base:</label>
                    <select onChange={(e) => setBase(e.target.value)} value={base}>
                        <option value="">Select Base</option>
                        <option value="Thin">Thin</option>
                        <option value="Thick">Thick</option>
                    </select>
                </div>
                <div>
                    <label>Choose Sauce:</label>
                    <select onChange={(e) => setSauce(e.target.value)} value={sauce}>
                        <option value="">Select Sauce</option>
                        <option value="Tomato">Tomato</option>
                        <option value="BBQ">BBQ</option>
                    </select>
                </div>
                <div>
                    <label>Choose Cheese:</label>
                    <select onChange={(e) => setCheese(e.target.value)} value={cheese}>
                        <option value="">Select Cheese</option>
                        <option value="Mozzarella">Mozzarella</option>
                        <option value="Cheddar">Cheddar</option>
                    </select>
                </div>
                <div>
                    <label>Choose Veggies:</label>
                    {veggieOptions.map((veggie) => (
                        <div key={veggie}>
                            <input
                                type="checkbox"
                                id={veggie}
                                value={veggie}
                                onChange={handleVeggieChange}
                                checked={veggies.includes(veggie)}
                            />
                            <label htmlFor={veggie}>{veggie}</label>
                        </div>
                    ))}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CustomPizza;

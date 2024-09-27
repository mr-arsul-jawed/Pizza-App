import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
    const [inventory, setInventory] = useState({ bases: [], sauces: [], cheeses: [], veggies: [], meats: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/inventory');
                setInventory(res.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch inventory');
                setLoading(false);
            }
        };

        fetchInventory();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Inventory Management</h2>
            <div>
                <h3>Pizza Bases</h3>
                <ul>
                    {inventory.bases.map((base, index) => <li key={index}>{base}</li>)}
                </ul>
            </div>
            <div>
                <h3>Sauces</h3>
                <ul>
                    {inventory.sauces.map((sauce, index) => <li key={index}>{sauce}</li>)}
                </ul>
            </div>
            <div>
                <h3>Cheeses</h3>
                <ul>
                    {inventory.cheeses.map((cheese, index) => <li key={index}>{cheese}</li>)}
                </ul>
            </div>
            <div>
                <h3>Veggies</h3>
                <ul>
                    {inventory.veggies.map((veggie, index) => <li key={index}>{veggie}</li>)}
                </ul>
            </div>
            <div>
                <h3>Meats</h3>
                <ul>
                    {inventory.meats.map((meat, index) => <li key={index}>{meat}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Inventory;

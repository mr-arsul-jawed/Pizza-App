import Pizza, { find } from '../models/Pizza.js';

// Get Pizzas
export async function getPizzas(req, res) {
  try {
    const pizzas = await find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create Pizza
export async function createPizza(req, res) {
  try {
    const pizza = new Pizza(req.body);
    await pizza.save();
    res.status(201).json(pizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

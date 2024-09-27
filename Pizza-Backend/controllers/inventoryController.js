import Inventory from '../models/Inventory.js';
import  {validateInventoryUpdate}  from '../validators/inventory.js';

// Get Inventory
export async function getInventory(req, res) {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    if (error.name === 'MongoError') {
      res.status(500).json({ message: 'Database error' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

// Update Inventory
export async function updateInventory(req, res) {
  try {
    const { error } = validateInventoryUpdate(req.body);
    if (error) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(inventory);
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).json({ message: 'Invalid ID' });
    } else if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Invalid request body' });
    } else {
      res.status(400).json({ message: 'Failed to update inventory' });
    }
  }
}
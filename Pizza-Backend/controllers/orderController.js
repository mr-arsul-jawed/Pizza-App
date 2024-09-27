// import Order, { findById } from '../models/order.js';
import Order from '../models/order.js';
// import { findOne } from '../models/Inventory.js';
import email from '../utils/email.js';
// import { sendEmail } from '../utils/email';

// Place Order
export async function placeOrder(req, res) {
  try {
    const { userId, items, totalAmount } = req.body;

    // Validate request data
    if (!userId || !items || !totalAmount) {
      return res.status(400).json({ message: 'Missing required fields' });
    } 

    // Create a new order
    const order = new Order({
      user: userId,
      items,
      totalAmount,
      status: 'Order Received',
    });

    

    // Save the order
    await order.save();

    // Update inventory
    for (const item of items) {
      const { productId, quantity } = item;

      const inventoryItem = await findOne({ productId });

      if (inventoryItem) {
        inventoryItem.stock -= quantity;
        if (inventoryItem.stock < 0) {
          return res.status(400).json({ message: 'Insufficient stock' });
        }
        await inventoryItem.save();
      } else {
        return res.status(404).json({ message: 'Product not found' });
      }
    }

    // Send confirmation email
    const user = await user.findById(userId); // Assuming you have a User model
    await email(user.email, 'Order Confirmation', `Your order of $${totalAmount} has been placed successfully.`, `<p>Your order of $${totalAmount} has been placed successfully.</p>`);

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    if (error.name === 'MongoError') {
      res.status(500).json({ message: 'Database error' });
    } else if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Invalid request data' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

// Update Order Status
export async function updateOrderStatus(req, res) {
  
  try {
    const { orderId, status } = req.body;

    // Validate request data
    if (!orderId || !status) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Find and update the order
    const order = await findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    // Send status update email to user
    const user = await User.findById(order.user); // Assuming you have a User model
    await sendEmail(user.email, 'Order Status Update', `Your order status has been updated to: ${status}.`, `<p>Your order status has been updated to: ${status}.</p>`);

    res.status(200).json({ message: 'Order status updated successfully', order });
  } catch (error) {
    if (error.name === 'MongoError') {
      res.status(500).json({ message: 'Database error' });
    } else if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Invalid request data' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
    
  }
}

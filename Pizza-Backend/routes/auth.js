// import { Router } from 'express';
// import { register, login, verifyEmail, forgotPassword, resetPassword } from '../controllers/authController.js';
// // import { getInventory } from '../controllers/inventoryController.js';
// // import {orderController} from '../controllers/orderController.js';

// const router = Router();

// // Authentication routes
// router.post('/register', register);
// router.post('/login', login);
// router.get('/verify-email/:token', verifyEmail);
// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password/:token', resetPassword);
// // router.post('/order', orderController);

// // Inventory route
// // router.get('/inventory', getInventory);

// // Route: GET /api/auth/ (Returns 'Hello')
// router.get('/', (req, res) => {
//     res.send('Hello');
// });

// export default router;


import { Router } from 'express';
import { 
  register, 
  login, 
  verifyEmail, 
  forgotPassword, 
  resetPassword 
} from '../controllers/authController.js';
import { getInventory } from '../controllers/inventoryController.js';
import { createOrder, getOrderStatus } from '../controllers/orderController.js';

const router = Router();

// Authentication routes
router.post('/register', register);
router.post('/login', login);
router.get('/verify-email/:token', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

// Order routes
router.post('/order', createOrder);
router.get('/order-status/:orderId', getOrderStatus);

// Inventory routes
router.get('/inventory', getInventory);

// Test route to check if API is working
router.get('/', (req, res) => {
  res.send('API is working');
});

export default router;


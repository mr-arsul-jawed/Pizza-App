import Razorpay from 'razorpay';
import { createHmac } from 'crypto';
import { config } from 'dotenv';

config();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create an order
export async function createOrder(req, res) {
  const { amount, currency } = req.body;
  const options = {
    amount: amount * 100, // Razorpay amount is in paise
    currency,
  };
  try {
    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Razorpay order', error });
  }
}

// Verify the payment signature
export async function verifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const hmac = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === razorpay_signature) {
    res.json({ message: 'Payment verified successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid payment signature!' });
  }
}

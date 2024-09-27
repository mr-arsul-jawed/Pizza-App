import { Schema, model } from 'mongoose';


const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  pizza: { type: Schema.Types.ObjectId, ref: 'Pizza', required: true },
  status: { type: String, enum: ['received', 'in kitchen', 'sent to delivery'], default: 'received' },
  paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export default model('Order', OrderSchema);

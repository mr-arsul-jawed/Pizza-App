import { Schema, model } from 'mongoose';

const InventorySchema = new Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export default model('Inventory', InventorySchema);

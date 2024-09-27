// const mongoose = require('mongoose');

// const PizzaSchema = new mongoose.Schema({
//   base: { type: String, required: true },
//   sauce: { type: String, required: true },
//   cheese: { type: String, required: true },
//   veggies: [{ type: String }],
//   meat: [{ type: String }],
// });

// module.exports = mongoose.model('Pizza', PizzaSchema);


import { Schema, model } from 'mongoose';

const PizzaSchema = new Schema({
  base: { type: String, required: true, default: 'Hand-tossed' },
  sauce: { type: String, required: true, default: 'Marinara' },
  cheese: { type: String, required: true, default: 'Mozzarella' },
  veggies: [{ type: String }],
  meat: [{ type: String }],
  pizzaId: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default model('Pizza', PizzaSchema);
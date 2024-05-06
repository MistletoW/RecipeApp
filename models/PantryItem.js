// models/PantryItem.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const pantryItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: String,
  expiryDate: Date, // Optional field for tracking expiry
  addedBy: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User
  addedAt: { type: Date, default: Date.now }
});

const PantryItem = mongoose.model('PantryItem', pantryItemSchema);
module.exports = PantryItem;

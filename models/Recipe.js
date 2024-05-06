// models/Recipe.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ name: String, quantity: String }],
  instructions: { type: String, required: true },
  nutrition: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbs: Number
  },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User
  createdAt: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

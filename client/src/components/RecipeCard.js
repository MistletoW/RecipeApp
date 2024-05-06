// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <h3>{recipe.name}</h3>
    <p>Ingredients: {recipe.ingredients.map(ing => ing.name).join(', ')}</p>
    <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
  </div>
);

export default RecipeCard;

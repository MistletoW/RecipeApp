// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card" style={{ border: '2px solid navy' }}>
    <h1 style={{ fontSize: '2em' }}>{recipe.name}</h1>
    <ul>
      {recipe.ingredients.map(ing => <li key={ing._id}>{ing.name}</li>)}
    </ul>
    <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
  </div>
);

export default RecipeCard;

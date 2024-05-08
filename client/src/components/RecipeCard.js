// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card" style={{ border: '2px solid navy' }}>
    <h2 style={{ fontSize: '3em', color: 'navy', fontWeight: 'bold' }}>{recipe.name}</h2>
    <h3 style={{ color: 'navy' }}>Ingredients:</h3>
    <ul style={{ listStyleType: 'circle' }}>
      {recipe.ingredients.map((ing, index) => (
        <li key={index} style={{ borderBottom: '1px dotted navy' }}>{ing.name}</li>
      ))}
    </ul>
    <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
  </div>
);

export default RecipeCard;

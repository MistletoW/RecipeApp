// src/pages/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api/recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2 style={{ fontSize: '3em', color: 'navy' }}>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul style={{ listStyleType: 'circle' }}>
        {recipe.ingredients.map((ing, index) => (
          <li key={index} style={{ borderBottom: '1px dotted navy' }}>{ing.name}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;

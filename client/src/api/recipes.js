// client/src/api/recipes.js
const API_URL = 'http://localhost:3000/api/recipes';

export const getRecipes = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch recipes');
  return response.json();
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch recipe');
  return response.json();
};

// Add functions for creating, updating, and deleting recipes if needed

const BASE_URL = 'http://localhost:3000/api/recipes';

export const fetchRecipes = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch recipes');
  return response.json();
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch recipe');
  return response.json();
};

export const createRecipe = async (recipeData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData)
  });
  if (!response.ok) throw new Error('Failed to create recipe');
  return response.json();
};

export const updateRecipe = async (id, recipeData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData)
  });
  if (!response.ok) throw new Error('Failed to update recipe');
  return response.json();
};

export const deleteRecipe = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete recipe');
  return response.json();
};

// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRecipes } from '../api/recipes';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <div>
        {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default Home;

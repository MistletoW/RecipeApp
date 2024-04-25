import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipe({ match }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`/api/recipes/${match.params.id}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe', error);
            }
        };

        fetchRecipe();
    }, [match.params.id]);

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h2>Steps</h2>
            <ol>
                {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditRecipe({ match }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState(['']);
    const [ingredients, setIngredients] = useState(['']);

    useEffect(() => {
        if (match.params.id) {
            const fetchRecipe = async () => {
                try {
                    const response = await axios.get(`/api/recipes/${match.params.id}`);
                    const recipe = response.data;
                    setTitle(recipe.title);
                    setDescription(recipe.description);
                    setSteps(recipe.steps);
                    setIngredients(recipe.ingredients);
                } catch (error) {
                    console.error('Error fetching recipe', error);
                }
            };

            fetchRecipe();
        }
    }, [match.params.id]);

    const handleAddStep = () => {
        setSteps([...steps, '']);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const recipe = {
            title,
            description,
            steps,
            ingredients,
        };

        try {
            if (match.params.id) {
                await axios.put(`/api/recipes/${match.params.id}`, recipe);
                alert('Recipe updated successfully!');
            } else {
                await axios.post('/api/recipes', recipe);
                alert('Recipe added successfully!');
            }
        } catch (error) {
            console.error('Error saving recipe', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            {steps.map((step, index) => (
                <label key={index}>
                    Step {index + 1}:
                    <input type="text" value={step} onChange={(e) => {
                        const newSteps = [...steps];
                        newSteps[index] = e.target.value;
                        setSteps(newSteps);
                    }} required />
                </label>
            ))}
            <button type="button" onClick={handleAddStep}>Add Step</button>
            {ingredients.map((ingredient, index) => (
                <label key={index}>
                    Ingredient {index + 1}:
                    <input type="text" value={ingredient} onChange={(e) => {
                        const newIngredients = [...ingredients];
                        newIngredients[index] = e.target.value;
                        setIngredients(newIngredients);
                    }} required />
                </label>
            ))}
            <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EditRecipe;
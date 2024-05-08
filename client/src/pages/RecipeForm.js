import React, { useState, useEffect } from 'react';
import { getRecipeById, createRecipe, updateRecipe } from '../api/recipes';

function RecipeForm({ match = { params: {} } }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState(['']);
    const [ingredients, setIngredients] = useState(['']);

    useEffect(() => {
        if (match.params.id) {
            const fetchRecipe = async () => {
                try {
                    const recipe = await getRecipeById(match.params.id);
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
                await updateRecipe(match.params.id, recipe);
                alert('Recipe updated successfully!');
            } else {
                await createRecipe(recipe);
                alert('Recipe added successfully!');
            }
        } catch (error) {
            console.error('Error saving recipe', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial', color: 'navy', gap: '20px' }}>
            <label style={{ fontSize: '2em', fontWeight: 'bold' }}>
                Title:
            </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ fontSize: '1.5em' }} />
            <label style={{ fontSize: '2em', fontWeight: 'bold' }}>
                Description:
            </label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
                <div style={{ border: '2px solid navy', padding: '20px', margin: '20px 0', width: '45%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                </div>
                <div style={{ border: '2px solid navy', padding: '20px', margin: '20px 0', width: '45%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                </div>
            </div>
            <button type="submit" style={{ backgroundColor: 'navy', color: 'white', padding: '20px 40px', fontSize: '1.2em' }}>Submit</button>
        </form>
    );
}

export default RecipeForm;
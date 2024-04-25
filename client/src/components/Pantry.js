import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pantry() {
    const [pantryItems, setPantryItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const fetchPantryItems = async () => {
            try {
                const response = await axios.get('/api/pantry');
                setPantryItems(response.data);
            } catch (error) {
                console.error('Error fetching pantry items', error);
            }
        };

        fetchPantryItems();
    }, []);

    const handleAddItem = async () => {
        try {
            const response = await axios.post('/api/pantry', { item: newItem });
            setPantryItems([...pantryItems, response.data]);
            setNewItem('');
        } catch (error) {
            console.error('Error adding pantry item', error);
        }
    };

    const handleEditItem = async (id, updatedItem) => {
        try {
            const response = await axios.put(`/api/pantry/${id}`, { item: updatedItem });
            setPantryItems(pantryItems.map(item => item.id === id ? response.data : item));
        } catch (error) {
            console.error('Error editing pantry item', error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`/api/pantry/${id}`);
            setPantryItems(pantryItems.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting pantry item', error);
        }
    };

    return (
        <div>
            <h1>Pantry</h1>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {pantryItems.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        <input type="text" defaultValue={item.name} onBlur={(e) => handleEditItem(item.id, e.target.value)} />
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pantry;
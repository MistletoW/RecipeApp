// src/pages/Pantry.js
import React, { useState, useEffect } from 'react';
import { getPantryItems } from '../api/pantry';

const Pantry = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    const fetchPantryItems = async () => {
      const data = await getPantryItems();
      setPantryItems(data);
    };
    fetchPantryItems();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'navy', fontSize: '2em', padding: '20px', fontWeight: 'bold', textDecoration: 'underline' }}>My Pantry</h2>
      <ul>
        {pantryItems.map(item => <li key={item._id}>{item.name} ({item.quantity})</li>)}
      </ul>
    </div>
  );
};

export default Pantry;

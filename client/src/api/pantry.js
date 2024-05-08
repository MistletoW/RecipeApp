const BASE_URL = 'http://localhost:3000/api/pantry';

export const fetchPantryItems = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch pantry items');
  return response.json();
};

export const addPantryItem = async (itemData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData)
  });
  if (!response.ok) throw new Error('Failed to add pantry item');
  return response.json();
};
  
export const updatePantryItem = async (id, itemData) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
    });
    if (!response.ok) throw new Error('Failed to update pantry item');
    return response.json();
};

export const deletePantryItem = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete pantry item');
    return true;
};


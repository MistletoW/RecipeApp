const BASE_URL = 'http://localhost:3000/api/users';

export const fetchUsers = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (!response.ok) throw new Error('Failed to create user');
  return response.json();
};

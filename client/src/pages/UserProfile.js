// src/pages/UserProfile.js
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../api/users';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1 style={{ color: 'navy' }}>{profile.username}</h1>
      <h2 style={{ color: 'navy' }}>Saved Recipes</h2>
      <ul>
        {profile.savedRecipes.map(recipe => <li key={recipe._id}>{recipe.name}</li>)}
      </ul>
    </div>
  );
};

export default UserProfile;

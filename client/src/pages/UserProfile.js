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
      <h2>{profile.username}</h2>
      <h3>Saved Recipes</h3>
      <ul>
        {profile.savedRecipes.map(recipe => <li key={recipe._id}>{recipe.name}</li>)}
      </ul>
    </div>
  );
};

export default UserProfile;

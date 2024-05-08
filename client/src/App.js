// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Pantry from './pages/Pantry';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';
import RecipeForm from './pages/RecipeForm';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/add" element={<RecipeForm />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/recipe/:id/edit" element={<RecipeForm />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Recipe from './components/Recipe';
import EditRecipe from './components/EditRecipe';
import Pantry from './components/Pantry';
import UserProfile from './components/UserProfile';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={SearchPage} />
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/edit/:id" component={EditRecipe} />
                <Route path="/pantry" component={Pantry} />
                <Route path="/profile" component={UserProfile} />
            </Switch>
        </Router>
    );
}

export default App;
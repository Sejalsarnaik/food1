import React, { useState } from 'react';
import './App.css';
import Axios from "axios";
import RecepieItem from './RecepieItem'; // Import the RecipeItem component

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [health, setHealth] = useState("vegan");
  const url = `https://api.edamam.com/search?q=${query}&app_id=ed208857&app_key=7bb05d8ad21425f4852533a31d2405a3`;

  async function getRecipes() {
    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <h1>Food Recipe Plaza 🍔</h1>
      <form className='search-form' onSubmit={submit}>
        <input className="app-input" type="text" placeholder='enter ingredient name' value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <input className="app-submit" type="submit" value="search"></input>

        <select className='app-health-labels'>
          <option onClick={()=>setHealth("vegan")}>vegan</option>
          <option onClick={()=>setHealth("vegetarian")}>Vegetarian</option>
          <option onClick={()=>setHealth("wheat-free")}>Wheat-free</option>
          <option onClick={()=>setHealth("soy-free")}>Soy-free</option>
          <option onClick={()=>setHealth("pork-free")}>Pork-free</option>
          <option onClick={()=>setHealth("paleo")}>Paleo</option>
          <option onClick={()=>setHealth("peanut-free")}>Peanut-free</option>
        </select>

      </form>
      <div className='app-recepie-grid'>
        {recipes.map((recipe, index) => (
          <RecepieItem key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;

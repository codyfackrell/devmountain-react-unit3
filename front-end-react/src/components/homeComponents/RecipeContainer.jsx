import React, { useState } from "react";
import RecipeCard from "../../elements/RecipeCard";

import { AiOutlineSearch } from "react-icons/ai";

const RecipeContainer = ({ recipes }) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
  .filter((recipe) => {
    let title = recipe.recipe_name.toLowerCase();
    let userInput = search.toLowerCase();
    return title.includes(userInput);
  })
  .map(recipe => {
      return <RecipeCard recipe={recipe}/>
  });

  return (
    <section className="recipe-section">
      <div className="search-container">
        <div className="search-bar">
          <AiOutlineSearch className="search-icon" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          />
        </div>
      </div>
      <div className="cards-container">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer;

import React, { useState } from "react";
import { Formik } from "formik";

import "./NewRecipeScreen.css";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    axios
      .post("https://recipes.devmountain.com/recipes", values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className="radio-container">
              <span>
                <input
                  type="radio"
                  id="cook"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <label for="cook">Cook</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="bake"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <label for="bake">Bake</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="drink"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <label for="drink">Drink</label>
              </span>
            </div>
            <div className="input-container">
              <input
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <div className="input-container">
              <div className="ingredient-inputs">
                <input
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >
              Add Another
            </button>
            <textarea
              placeholder="What are the instructions?"
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button type="submit" className="blue-btn">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

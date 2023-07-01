import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className="recipe-card-container">
      <div className='recipe-image-container'>
        <img src={recipe.image_url} alt="recipe image"/>
      </div>
      <h5 className="recipe-title">{recipe.recipe_name}</h5>
      <button className="blue-btn" onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;

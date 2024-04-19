import { useParams } from "react-router-dom";
import { getRecipeById } from "../../../store/recipe/recipeSlice";
import { addRecipeToCart } from "../../../store/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "../style/recipe.css";

const RecipeDetail = () => {
  const dispatch = useDispatch();
  const id = Number(useParams().id);

  const recipe = useSelector((state) => getRecipeById(state, id));

  return (
    <div className="recipe__detail__container">
      <div className={"hero"}>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt="Recipe Image" />
      </div>
      <div className={"misc"}>
        <p>Prep Time: {recipe.prepTimeMinutes} min</p>
        <p>Cook Time: {recipe.cookTimeMinutes} min</p>
        <p>Servings: {recipe.servings}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Calories per Serving: {recipe.caloriesPerServing}</p>
        <p>Tags: {recipe.tags.slice("").join(", ")}</p>
        <p>Meal Type: {recipe.mealType}</p>
      </div>
      <div className={"ingredients"}>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={"instructions"}>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <button
        className="add__to__cart"
        onClick={() => dispatch(addRecipeToCart(recipe))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default RecipeDetail;

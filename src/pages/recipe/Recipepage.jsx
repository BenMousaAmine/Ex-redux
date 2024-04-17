import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipes, getRecipes } from "../../store/recipe/recipeSlice";
import { useEffect } from "react";
import GenericError from "../error/GenericError";
import "./style/recipe.css";
import { router } from "../../App";

const Recipepage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);

  useEffect(() => {
    dispatch(fetchAllRecipes(10));
  }, []);

  return (
    <div className="recipe__page">
      <h1>Recipes</h1>
      <div className="recipe__list">
        {recipes.loading ? (
          <h3>Loading ...</h3>
        ) : recipes.error ? (
          <GenericError />
        ) : (
          recipes.data.length > 0 &&
          recipes.data.map((r) => (
            <div key={r.id} className="recipe__list__item">
              <h2>{r.name}</h2>
              <img src={r.image} alt={r.name} />
              <button onClick={() => router.navigate(`/recipes/${r.id}`)}>
                View Recipe
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recipepage;

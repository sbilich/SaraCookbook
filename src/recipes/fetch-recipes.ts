import { CuisineType, DishType, Recipe, RecipeType } from './types';
import { RECIPES } from './recipe-data/recipes';

export const fetchRecipes = (
  dishType?: DishType,
  cuisineType?: CuisineType,
): RecipeType[] => {
  const filteredRecipes = filterRecipes(RECIPES, dishType, cuisineType);
  return filteredRecipes.map((recipe) => Recipe.parse(recipe));
};

const filterRecipes = (
  recipes: RecipeType[],
  dishType?: DishType,
  cuisineType?: CuisineType,
) => {
  if (cuisineType && dishType) {
    return recipes.filter(
      (recipe) =>
        recipe.dish.includes(dishType) && recipe.cuisine.includes(cuisineType),
    );
  }
  if (cuisineType) {
    return recipes.filter(
      (recipe) => cuisineType && recipe.cuisine.includes(cuisineType),
    );
  }
  if (dishType) {
    return recipes.filter(
      (recipe) => dishType && recipe.dish.includes(dishType),
    );
  }
  return recipes;
};

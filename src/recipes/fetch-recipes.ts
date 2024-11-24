import { CuisineType, DishType, Recipe, RecipeType } from './types';
import { RECIPES } from './recipe-data/recipes';

export const fetchRecipes = (
  searchTerm?: string,
  dishType?: DishType,
  cuisineType?: CuisineType,
): RecipeType[] => {
  const filteredRecipes = filterRecipes(
    RECIPES,
    searchTerm,
    dishType,
    cuisineType,
  );
  return filteredRecipes.map((recipe) => Recipe.parse(recipe));
};

const filterRecipes = (
  recipes: RecipeType[],
  _searchTerm?: string,
  dishType?: DishType,
  cuisineType?: CuisineType,
) => {
  let filteredRecipes: RecipeType[] = recipes;
  if (cuisineType && dishType) {
    filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.dish.includes(dishType) && recipe.cuisine.includes(cuisineType),
    );
  } else if (cuisineType) {
    filteredRecipes = recipes.filter(
      (recipe) => cuisineType && recipe.cuisine.includes(cuisineType),
    );
  } else if (dishType) {
    filteredRecipes = recipes.filter(
      (recipe) => dishType && recipe.dish.includes(dishType),
    );
  }
  // filter by search term if one is given
  const searchTerm = _searchTerm?.toLowerCase();
  return searchTerm
    ? filteredRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm),
      )
    : filteredRecipes;
};

import { CuisineType, DishType, Recipe, RecipeType } from './types';
import TomatoSoup from './recipe-data/tomato-soup.json';

export const fetchRecipes = (
  dishType: DishType | undefined,
  cuisineType: CuisineType | undefined,
): RecipeType[] => {
  return [loadRecipe('./recipe-data/tomato-soup.json')];
};

export const loadRecipe = (path: string): RecipeType => {
  return Recipe.parse(TomatoSoup);
};

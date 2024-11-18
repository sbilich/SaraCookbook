import { IngredientType, NestedRecipeType } from './types';

export const isNestedRecipe = (
  ingredient: NestedRecipeType | IngredientType,
): ingredient is NestedRecipeType => {
  return (ingredient as NestedRecipeType).instructions !== undefined;
};

export const isIndividualRecipe = (
  ingredient: NestedRecipeType | IngredientType,
): ingredient is IngredientType => {
  return (ingredient as IngredientType).unit !== undefined;
};

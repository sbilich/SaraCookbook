import { IngredientType, NestedRecipeType } from './types';

export const isNestedRecipe = (
  ingredient: NestedRecipeType | IngredientType,
): ingredient is NestedRecipeType => {
  return (ingredient as NestedRecipeType).ingredients !== undefined;
};

export const isIndividualRecipe = (
  ingredient: NestedRecipeType | IngredientType,
): ingredient is IngredientType => {
  return (ingredient as IngredientType).unit !== undefined;
};

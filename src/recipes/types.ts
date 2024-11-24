import { z } from 'zod';

export const DishEnum = z.enum([
  'Entree',
  'Dessert',
  'Drink',
  'Soup',
  'Pasta',
  'Sandwich',
]);
export type DishType = z.infer<typeof DishEnum>;

export const CuisineEnum = z.enum([
  'Americana',
  'Chinese',
  'Italian',
  'Japanese',
  'Mexican',
  'Thai',
  'Indian',
]);
export type CuisineType = z.infer<typeof CuisineEnum>;

export const Ingredient = z.object({
  name: z.string(),
  quantity: z.number(),
  unit: z.string(),
  preparation: z.string().optional(),
  notes: z.string().optional(),
  optional: z.boolean().optional(),
  substitutions: z.array(z.string()).optional(),
});

export type IngredientType = z.infer<typeof Ingredient>;

const NestedRecipe = z.object({
  name: z.string(),
  description: z.string().optional(),
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      unit: z.string(),
      preparation: z.string().optional(),
      notes: z.string().optional(),
      optional: z.boolean().optional(),
      substitutions: z.array(z.string()).optional(),
    }),
  ),
});

export type NestedRecipeType = z.infer<typeof NestedRecipe>;

export const Recipe = z.object({
  name: z.string(),
  dateAdded: z.string().datetime(),
  description: z.string(),
  baseServingSize: z.number(),
  estimatedTime: z.number(),
  dish: z.array(z.string()),
  cuisine: z.array(z.string()),
  instructions: z.array(z.string()),
  ingredients: z.array(Ingredient.or(NestedRecipe)),
});

export type RecipeType = z.infer<typeof Recipe>;

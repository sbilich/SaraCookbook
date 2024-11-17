import { z } from 'zod';

const DishEnum = z.enum([
  'Entree',
  'Dessert',
  'Drink',
  'Soup',
  'Pasta',
  'Sandwich',
]);
export type DishType = z.infer<typeof DishEnum>;

const CuisineEnum = z.enum([
  'Americana',
  'Chinese',
  'Italian',
  'Japanese',
  'Mexican',
  'Thai',
]);
export type CuisineType = z.infer<typeof CuisineEnum>;

export const Recipe = z.object({
  name: z.string(),
  description: z.string(),
  baseServingSize: z.number(),
  dish: z.array(z.string()),
  cuisine: z.array(z.string()),
  instructions: z.array(z.string()),
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

export type RecipeType = z.infer<typeof Recipe>;

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

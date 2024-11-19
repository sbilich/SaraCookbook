import {
  Box,
  Checkbox,
  Divider,
  List,
  ListItem,
  Text,
  Title,
} from '@mantine/core';
import { RECIPES } from '../recipes/recipe-data/recipes';
import { isIndividualRecipe, isNestedRecipe } from '../recipes/utils';
import { minutesToTimeLabel, pluralize } from '../utils/lang';

interface RecipeViewerPageProps {
  recipeName: string;
}

export const RecipeViewerPage = ({ recipeName }: RecipeViewerPageProps) => {
  const recipe = RECIPES.find((r) => r.name === recipeName);
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  const {
    ingredients,
    description,
    baseServingSize,
    cuisine,
    instructions,
    estimatedTime,
  } = recipe;

  const ingredientRecipes = ingredients.filter((i) => isNestedRecipe(i));
  const individualIngredients = ingredients.filter((i) =>
    isIndividualRecipe(i),
  );

  return (
    <>
      <Title order={2}>{recipeName}</Title>
      <Box sx={{ paddingTop: 10 }}>
        <Box sx={{ display: 'flex', gap: 10 }}>
          <Text>
            <b>Serving Size:</b> {baseServingSize}
          </Text>
          |
          <Text>
            <b>Estimated Time:</b> {minutesToTimeLabel(estimatedTime)}
          </Text>
          |
          {cuisine.map((d) => (
            <i>{d}</i>
          ))}
        </Box>
        <Text sx={{ paddingTop: 10, paddingBottom: 10 }}>{description}</Text>
        <Divider />
        <Title order={4} sx={{ paddingTop: 20, paddingBottom: 10 }}>
          Ingredients
        </Title>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, 1fr)`,
            rowGap: 5,
          }}
        >
          {individualIngredients.map(
            ({ name, quantity, unit, notes, preparation }) => (
              <>
                <Box sx={{ display: 'flex', gap: 10 }}>
                  <Checkbox />
                  {name}
                </Box>
                <div>
                  {quantity} {pluralize(unit, quantity)} {preparation}
                </div>
                <div>{notes}</div>
              </>
            ),
          )}
        </Box>
        {ingredientRecipes.map((ingredientRecipe) => (
          <>
            <Title order={4} sx={{ paddingTop: 20, paddingBottom: 10 }}>
              {ingredientRecipe.name}
            </Title>
            {ingredientRecipe.description && (
              <Text sx={{ paddingBottom: 10 }}>
                {ingredientRecipe.description}
              </Text>
            )}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(3, 1fr)`,
                rowGap: 5,
              }}
            >
              {ingredientRecipe.ingredients.map(
                ({ name, quantity, unit, notes, preparation }) => (
                  <>
                    <Box sx={{ display: 'flex', gap: 10 }}>
                      <Checkbox />
                      {name}
                    </Box>
                    <div>
                      {quantity} {pluralize(unit, quantity)} {preparation}
                    </div>
                    <div>{notes}</div>
                  </>
                ),
              )}
            </Box>
          </>
        ))}
        <Title order={4} sx={{ paddingTop: 40, paddingBottom: 10 }}>
          Instructions
        </Title>
        <List>
          {instructions.map((instruction) => (
            <ListItem key={instruction}>{instruction}</ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

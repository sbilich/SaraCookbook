import { Box, Checkbox, List, ListItem, Text, Title } from '@mantine/core';
import TomatoSoup from '../recipes/recipe-data/tomato-soup.json';
import { pluralize } from '../utils/lang';

interface RecipeViewerPageProps {
  recipeName: string;
}

export const RecipeViewerPage = ({ recipeName }: RecipeViewerPageProps) => {
  const recipe = TomatoSoup;
  const { ingredients, description, baseServingSize, cuisine, instructions } =
    recipe;

  return (
    <>
      <Title order={2}>{recipeName}</Title>
      <Box sx={{ paddingTop: 10 }}>
        <Box sx={{ display: 'flex', gap: 10 }}>
          <Text>
            <b>Serving Size:</b> {baseServingSize}
          </Text>
          |
          {cuisine.map((d) => (
            <i>{d}</i>
          ))}
        </Box>
        <Text sx={{ paddingTop: 10 }}>{description}</Text>
        <Title order={4} sx={{ paddingTop: 40, paddingBottom: 10 }}>
          Ingredients
        </Title>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, 1fr)`,
            rowGap: 5,
          }}
        >
          {ingredients.map(({ name, quantity, unit, notes, preparation }) => (
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
          ))}
        </Box>
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

import { Alert, Box, Card, Title } from '@mantine/core';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { DateTime } from 'luxon';
import { RECIPES } from '../../recipes/recipe-data/recipes';

export const Route = createFileRoute('/SaraCookbook/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { navigate } = useRouter();

  // Filter for 5 recipes added in the last week
  const recipes = RECIPES.filter(
    (recipe) =>
      DateTime.fromISO(recipe.dateAdded) <= DateTime.now() ||
      DateTime.fromISO(recipe.dateAdded) >= DateTime.now().minus({ days: 7 }),
  ).slice(0, 5);

  return (
    <>
      <Alert title="Welcome to my cookbook!">
        This site is a collection of my favorite recipes that I cook often for
        my framily. I hope you enjoy them as much as I do!
      </Alert>
      <Title order={4} sx={{ paddingTop: 20 }}>
        Check out the newest recipes!
      </Title>
      <Box sx={{ display: 'flex', paddingTop: 10 }}>
        {recipes.map((recipe) => (
          <Card
            key={recipe.name}
            onClick={() =>
              navigate({
                to: `/SaraCookbook/recipe-viewer/$recipeName`,
                params: {
                  recipeName: recipe.name,
                },
              })
            }
            shadow="sm"
            radius="md"
            sx={{
              '&:hover': { cursor: 'pointer' },
              margin: 10,
              border: '1px solid #ddd',
              maxWidth: 200,
            }}
          >
            {recipe.name}
          </Card>
        ))}
      </Box>
    </>
  );
}

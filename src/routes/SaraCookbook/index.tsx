import { Alert, Box, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { createFileRoute } from '@tanstack/react-router';
import { DateTime } from 'luxon';
import { RecipeCarousel } from '../../components/displays/RecipeCarousel';
import { RECIPES } from '../../recipes/recipe-data/recipes';

export const Route = createFileRoute('/SaraCookbook/')({
  component: RouteComponent,
});

function RouteComponent() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  // Filter for 5 recipes added in the last week
  const recipes = RECIPES.filter(
    (recipe) =>
      DateTime.fromISO(recipe.dateAdded) <= DateTime.now() ||
      DateTime.fromISO(recipe.dateAdded) >= DateTime.now().minus({ days: 7 }),
  )
    .slice(0, 5)
    .sort((a, b) => {
      const keyA = new Date(a.dateAdded);
      const keyB = new Date(b.dateAdded);
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });

  return (
    <>
      <Alert title="Welcome to my cookbook!">
        This site is a collection of my favorite recipes that I cook often for
        my framily. I hope you enjoy them as much as I do!
      </Alert>
      <Title order={4} sx={{ paddingTop: 20 }}>
        Check out the newest recipes!
      </Title>
      <Box
        sx={{
          backgroundColor: 'rgba(34, 139, 230, 0.1)',
          padding: 20,
          marginTop: 10,
        }}
      >
        <RecipeCarousel recipes={recipes} isMobile={!!isMobile} />
      </Box>
    </>
  );
}

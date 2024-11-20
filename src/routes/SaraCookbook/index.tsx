import { Carousel } from '@mantine/carousel';
import { Alert, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { DateTime } from 'luxon';
import { RECIPES } from '../../recipes/recipe-data/recipes';

export const Route = createFileRoute('/SaraCookbook/')({
  component: RouteComponent,
});

function RouteComponent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const { navigate } = useRouter();

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
      <Carousel
        slideSize={{ base: '100%', sm: '33.3333%' }}
        slideGap={{ base: 2, sm: 'xl' }}
        align="start"
        sx={{
          paddingTop: 10,
          '.mantine-Carousel-control': {
            backgroundColor: 'white',
            border: 'black 1px solid',
          },
        }}
        slidesToScroll={mobile ? 1 : 2}
      >
        {recipes.map((recipe) => (
          <Carousel.Slide key={recipe.name}>
            <CarouselCard
              name={recipe.name}
              description={recipe.description}
              onClick={() =>
                navigate({
                  to: `/SaraCookbook/recipe-viewer/$recipeName`,
                  params: {
                    recipeName: recipe.name,
                  },
                })
              }
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

interface CarouselCardProps {
  name: string;
  description: string;
  onClick: () => void;
}

const CarouselCard = ({ name, description, onClick }: CarouselCardProps) => {
  return (
    <Paper
      shadow={'sm'}
      p="xl"
      radius="md"
      onClick={onClick}
      sx={{
        ':hover': {
          cursor: 'pointer',
        },
        height: '200px',
        backgroundColor: 'rgba(34, 139, 230, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Title
        order={3}
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
          fontWeight: 900,
          color: 'black',
          lineHeight: 1.2,
          fontSize: '14px',
        }}
      >
        {name}
      </Title>
      <Text>
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </Text>
    </Paper>
  );
};

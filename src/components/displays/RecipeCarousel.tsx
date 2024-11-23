import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import { RecipeType } from '../../recipes/types';

interface RecipeCarouselProps {
  recipes: RecipeType[];
  isMobile: boolean;
}

export const RecipeCarousel = ({ recipes, isMobile }: RecipeCarouselProps) => {
  const { navigate } = useRouter();

  return (
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
      slidesToScroll={isMobile ? 1 : 2}
    >
      {recipes.map((recipe) => (
        <Carousel.Slide key={recipe.name}>
          <RecipeCarouselCard
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
  );
};

interface CarouselCardProps {
  name: string;
  description: string;
  onClick: () => void;
}

const RecipeCarouselCard = ({
  name,
  description,
  onClick,
}: CarouselCardProps) => {
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

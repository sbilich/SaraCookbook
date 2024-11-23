import { Carousel } from '@mantine/carousel';
import { useRouter } from '@tanstack/react-router';
import { RecipeType } from '../../recipes/types';
import { RecipeCard } from './RecipeCard';

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
        '.mantine-Carousel-control': {
          backgroundColor: 'white',
          border: 'black 1px solid',
          transition: 'opacity 150ms ease',
          opacity: 0,
        },
        ':hover .mantine-Carousel-control': {
          opacity: 1,
        },
      }}
      slidesToScroll={isMobile ? 1 : 2}
    >
      {recipes.map((recipe) => (
        <Carousel.Slide key={recipe.name}>
          <RecipeCard
            name={recipe.name}
            description={recipe.description}
            estimatedTime={recipe.estimatedTime}
            cuisine={recipe.cuisine}
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

import { Card, ScrollArea, Title } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import { fetchRecipes } from './fetch-recipes';
import { CuisineType, DishType } from './types';

interface RecipeGalleryProps {
  title: string;
  cuisineType?: CuisineType;
  dishType?: DishType;
}

export const RecipeGallery = ({
  title,
  cuisineType,
  dishType,
}: RecipeGalleryProps) => {
  const { navigate } = useRouter();

  const recipes = fetchRecipes(dishType, cuisineType);
  return (
    <div>
      <Title order={2}>{title}</Title>

      <ScrollArea>
        {recipes.length === 0 && <div>Sorry no recipes yet!</div>}
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
      </ScrollArea>
    </div>
  );
};

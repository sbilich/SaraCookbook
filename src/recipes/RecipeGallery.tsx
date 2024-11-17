import { Card, ScrollArea } from '@mantine/core';
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
      {title}
      <ScrollArea>
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
            sx={{ '&:hover': { cursor: 'pointer' } }}
          >
            {recipe.name}
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};

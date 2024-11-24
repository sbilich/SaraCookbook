import { css } from '@emotion/css';
import { Box, Input, NativeSelect, ScrollArea, Title } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RecipeCard } from '../components/displays/RecipeCard';
import { fetchRecipes } from './fetch-recipes';
import { CuisineEnum, CuisineType, DishType } from './types';

type CuisineFilterOption = CuisineType | 'All Cuisines';

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
  const [searchTerm, setSearch] = useState('');
  const [selectedCuisine, setSelectedCuisine] =
    useState<CuisineFilterOption>('All Cuisines');

  const recipes = fetchRecipes(
    searchTerm,
    dishType,
    selectedCuisine !== 'All Cuisines' ? selectedCuisine : undefined,
  );
  return (
    <div>
      <Title order={2}>{title}</Title>

      <Box
        sx={{
          marginTop: 10,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'end',
          gap: 10,
        }}
      >
        <Input
          placeholder="Filter recipes..."
          leftSection={<BiSearch size={16} />}
          value={searchTerm}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <NativeSelect
          data={['All Cuisines', ...CuisineEnum.options]}
          onChange={(event) =>
            setSelectedCuisine(event.currentTarget.value as CuisineFilterOption)
          }
        />
      </Box>
      <ScrollArea
        sx={{
          padding: 20,
          backgroundColor: 'rgba(34, 139, 230, 0.1)',
          height: 'calc(100vh - 200px)',
        }}
      >
        {recipes.length === 0 && <div>No recipes found</div>}
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.name}
            className={css({ marginBottom: 20 })}
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
        ))}
      </ScrollArea>
    </div>
  );
};

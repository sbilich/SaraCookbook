import { createLazyFileRoute } from '@tanstack/react-router';
import { RecipeGallery } from '../../recipes/RecipeGallery';

export const Route = createLazyFileRoute('/SaraCookbook/pasta')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RecipeGallery title="Pastas" dishType="Pasta" />;
}

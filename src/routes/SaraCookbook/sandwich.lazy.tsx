import { createLazyFileRoute } from '@tanstack/react-router';
import { RecipeGallery } from '../../recipes/RecipeGallery';

export const Route = createLazyFileRoute('/SaraCookbook/sandwich')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RecipeGallery title="Sandwiches" dishType="Sandwich" />;
}

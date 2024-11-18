import { createLazyFileRoute } from '@tanstack/react-router';
import { RecipeGallery } from '../../recipes/RecipeGallery';

export const Route = createLazyFileRoute('/SaraCookbook/dessert')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RecipeGallery title="Desserts" dishType="Dessert" />;
}

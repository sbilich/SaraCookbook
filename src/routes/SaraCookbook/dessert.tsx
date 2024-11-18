import { createFileRoute } from '@tanstack/react-router';
import { RecipeGallery } from '../../recipes/RecipeGallery';

export const Route = createFileRoute('/SaraCookbook/dessert')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RecipeGallery title="Desserts" dishType="Dessert" />;
}

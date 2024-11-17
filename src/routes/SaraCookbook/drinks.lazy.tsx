import { createLazyFileRoute } from '@tanstack/react-router';
import { RecipeGallery } from '../../recipes/RecipeGallery';

export const Route = createLazyFileRoute('/SaraCookbook/drinks')({
  component: RouteComponent,
});

function RouteComponent() {
  return <RecipeGallery title="Drinks" />;
}

import { createLazyFileRoute } from '@tanstack/react-router';
import { RecipeViewerPage } from '../../pages/recipe-viewer-page';

export const Route = createLazyFileRoute(
  '/SaraCookbook/recipe-viewer/$recipeName',
)({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();

  return <RecipeViewerPage recipeName={params.recipeName} />;
}

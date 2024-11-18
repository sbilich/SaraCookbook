import { createFileRoute } from '@tanstack/react-router'
import { RecipeGallery } from '../../recipes/RecipeGallery'

export const Route = createFileRoute('/SaraCookbook/sandwich')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RecipeGallery title="Sandwiches" dishType="Sandwich" />
}

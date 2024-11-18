import { createFileRoute } from '@tanstack/react-router'
import { RecipeGallery } from '../../recipes/RecipeGallery'

export const Route = createFileRoute('/SaraCookbook/drinks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RecipeGallery title="Drinks" dishType="Drink" />
}

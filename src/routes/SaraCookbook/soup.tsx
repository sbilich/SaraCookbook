import { createFileRoute } from '@tanstack/react-router'
import { RecipeGallery } from '../../recipes/RecipeGallery'

export const Route = createFileRoute('/SaraCookbook/soup')({
  component: SoupPage,
})

function SoupPage() {
  return <RecipeGallery title="Soups" dishType="Soup" />
}

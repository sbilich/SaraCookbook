import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/SaraCookbook/soup')({
  component: SoupPage,
})

function SoupPage() {
  return 'Hello /soup!'
}

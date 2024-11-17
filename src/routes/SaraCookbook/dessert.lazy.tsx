import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/SaraCookbook/dessert')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /dessert!'
}

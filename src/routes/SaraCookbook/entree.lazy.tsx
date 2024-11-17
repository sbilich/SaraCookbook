import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/SaraCookbook/entree')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /entree!'
}

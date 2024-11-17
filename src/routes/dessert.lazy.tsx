import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/dessert')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /dessert!';
}

import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/SaraCookbook/pasta')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /pasta!';
}

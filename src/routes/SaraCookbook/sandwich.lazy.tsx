import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/SaraCookbook/sandwich')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /sandwich!';
}

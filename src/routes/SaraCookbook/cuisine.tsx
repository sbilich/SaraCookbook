import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/SaraCookbook/cuisine')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Under construction';
}

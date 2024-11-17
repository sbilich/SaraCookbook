import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/cuisine')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /cuisine!';
}

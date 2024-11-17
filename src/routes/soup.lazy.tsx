import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/soup')({
  component: SoupPage,
});

function SoupPage() {
  return 'Hello /soup!';
}

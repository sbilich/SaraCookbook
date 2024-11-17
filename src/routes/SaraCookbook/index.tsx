import { Alert } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/SaraCookbook/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Alert title="Welcome to my cookbook!">
      Stay tuned for inspiring words
    </Alert>
  );
}

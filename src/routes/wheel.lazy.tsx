import { createLazyFileRoute } from '@tanstack/react-router';
import { WheelPage } from '../pages/wheel-page';

export const Route = createLazyFileRoute('/wheel')({
  component: RouteComponent,
});

function RouteComponent() {
  return <WheelPage />;
}

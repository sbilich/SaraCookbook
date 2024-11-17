import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AppWrapper } from '../app-wrapper';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppWrapper>
          <Outlet />
        </AppWrapper>
        <TanStackRouterDevtools />
      </>
    );
  },
});

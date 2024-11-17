import { createRootRoute, Outlet } from '@tanstack/react-router';
import { AppWrapper } from '../app-wrapper';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppWrapper>
          <Outlet />
        </AppWrapper>
        {/* <TanStackRouterDevtools /> */}
      </>
    );
  },
});

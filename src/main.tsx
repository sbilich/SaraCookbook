import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import the generated route tree
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <RouterProvider router={router} />
      </MantineEmotionProvider>
    </MantineProvider>
  </React.StrictMode>,
);

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { join, parse, resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), TanStackRouterVite()],
  base: '/SaraCookbook/',
  build: {
    rollupOptions: {
      input: entryPoints('index.html', '404.html'),
    },
  },
});

function entryPoints(...paths) {
  const entries = paths.map(parse).map((entry) => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });

  const config = Object.fromEntries(entries);
  return config;
}

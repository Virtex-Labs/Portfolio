// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: "https://virtexlabs.com",
  output: 'server',
  adapter: isBuild ? cloudflare({
    prerenderEnvironment: 'node'
  }) : undefined,
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@astrojs/cloudflare', 'resend']
    }
  },
  integrations: [react(), sitemap()],
});
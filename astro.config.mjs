import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import iconset from 'astro-iconset';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), sitemap(), iconset()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'min-light',
        dark: 'min-dark',
      },
    },
  },
});

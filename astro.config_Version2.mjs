import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-domain-or-github.io',
  integrations: [tailwind()],
});
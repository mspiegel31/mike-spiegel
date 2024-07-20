import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mspiegel31.github.io/',
	basePath: 'mike-spiegel',
	integrations: [mdx(), sitemap()],
});

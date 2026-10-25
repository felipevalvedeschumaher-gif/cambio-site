import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cambioempresas.com.br',
  compressHTML: true,
  build: { format: 'file' },
});

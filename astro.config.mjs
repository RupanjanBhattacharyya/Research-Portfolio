import { defineConfig } from 'astro/config';

// `site` is used for canonical/OG URLs and the sitemap.
// If you deploy as a GitHub *user site* (repo named RupanjanBhattacharyya.github.io),
// leave this as-is. If you deploy as a *project site* (any other repo name, e.g. "portfolio"),
// change `site` to 'https://rupanjanbhattacharyya.github.io' AND add: base: '/portfolio'
export default defineConfig({
  site: 'https://rupanjanbhattacharyya.github.io',
  base: '/Research-Portfolio',
  output: 'static',
  image: {
    // Some research figures are very high-resolution; lift Sharp's input pixel cap
    // so they can be downscaled/optimized at build time.
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: { limitInputPixels: false },
    },
  },
});

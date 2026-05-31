import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://digitaliseerimine.ee",
  integrations: [sitemap()],
  output: "static"
});

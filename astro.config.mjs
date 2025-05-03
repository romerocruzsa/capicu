import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
import ghPages from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://romerocruzsa.github.io/capicu",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react()],
  adapter: ghPages(),
});

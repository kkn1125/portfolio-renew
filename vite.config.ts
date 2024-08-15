import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  const MODE = process.env.NODE_ENV || "production";

  dotenv.config({
    path: path.join(path.resolve(), ".env"),
  });
  dotenv.config({
    path: path.join(path.resolve(), `.env.${MODE}`),
  });

  const host = process.env.HOST;
  const port = +(process.env.PORT || 3000);

  const DEPLOY_PATH = process.env.VITE_DEPLOY_PATH;
  const BRAND = process.env.VITE_BRAND;
  const BLOG = process.env.VITE_BLOG;
  const GITHUB = process.env.VITE_GITHUB;
  const PUBLISHED_YEAR = process.env.VITE_PUBLISHED_YEAR;
  const PROFILE_IMAGE = process.env.VITE_PROFILE_IMAGE;

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      "process.env": {
        DEPLOY_PATH,
        BRAND,
        BLOG,
        GITHUB,
        PUBLISHED_YEAR,
        PROFILE_IMAGE,
      },
    },
    base: DEPLOY_PATH,
    server: {
      host,
      port,
    },
    plugins: [react(), tsconfigPaths()],
  };
});

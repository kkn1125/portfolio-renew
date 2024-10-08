import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import pkg from "./package.json";
import tsconfig from "./tsconfig.app.json";

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

  const VERSION = pkg.version;
  const DEPLOY_PATH = process.env.VITE_DEPLOY_PATH;
  const BRAND = process.env.VITE_BRAND;
  const BLOG = process.env.VITE_BLOG;
  const GITHUB = process.env.VITE_GITHUB;
  const PUBLISHED_YEAR = process.env.VITE_PUBLISHED_YEAR;
  const DEFAULT_COVER = process.env.VITE_DEFAULT_COVER;
  const PROFILE_IMAGE = process.env.VITE_PROFILE_IMAGE;

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      "process.env": {
        VERSION,
        DEPLOY_PATH,
        BRAND,
        BLOG,
        GITHUB,
        PUBLISHED_YEAR,
        DEFAULT_COVER,
        PROFILE_IMAGE,
      },
    },
    base: DEPLOY_PATH,
    server: {
      host,
      port,
    },
    resolve: {
      alias: Object.entries(tsconfig.compilerOptions.paths).map(
        ([key, value]) => ({
          find: key.slice(0, -2),
          replacement: path.join(path.resolve(), value[0].slice(0, -2)),
        })
      ),
    },
    plugins: [react()],
  };
});

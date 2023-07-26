import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  // 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
  // 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이 모든 환경 변수를 불러옴
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // Vite 설정
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    base: "",
    server: {
      host: process.env.HOST || "0.0.0.0",
      port: process.env.PORT || 3000,
      base: "",
    },
    preview: {
      host: process.env.HOST || "0.0.0.0",
      port: process.env.PORT || 3000,
      base: "",
    },
    build: {
      outDir: "dist",
      minify: true,
      cssMinify: true,
    },
  };
});

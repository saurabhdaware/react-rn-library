import { defineConfig } from "vite";
import { viteCrossPlatform } from "@cross-platform-tools/vite-plugin";

const isReactNative = process.env.PLATFORM === 'native';

export default defineConfig({
  plugins: [
    viteCrossPlatform({
      platform: process.env.PLATFORM!,
      supportedPlatforms: ["web", "native"],
      entryDir: 'src',
      outDir: 'dist',
    }),
  ],
  build: {
    rollupOptions: {
      external: ['react', 'react-native', 'styled-components']
    }
  }
});
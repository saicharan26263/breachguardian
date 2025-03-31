
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine which ports to use based on environment
  const isProd = mode === 'production';
  
  return {
    server: {
      host: "::",
      port: isProd ? 80 : 8080,
      https: isProd ? {
        // For HTTPS (port 443) in production
        // These are placeholder paths - you'll need to provide actual certificate files
        key: fs.existsSync('./certs/key.pem') ? './certs/key.pem' : undefined,
        cert: fs.existsSync('./certs/cert.pem') ? './certs/cert.pem' : undefined,
      } : undefined,
    },
    preview: {
      // For preview mode
      port: isProd ? 80 : 8080,
      https: isProd ? true : false,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});

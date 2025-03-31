
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
    // Base path for Apache deployment
    base: '/',
    server: {
      host: "0.0.0.0", // For better public IP compatibility
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
      https: isProd ? {
        // Match the server configuration format
        key: fs.existsSync('./certs/key.pem') ? './certs/key.pem' : undefined,
        cert: fs.existsSync('./certs/cert.pem') ? './certs/cert.pem' : undefined,
      } : undefined,
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
    build: {
      // Output to a directory that Apache can serve
      outDir: 'dist',
      // Generate an .htaccess file for Apache
      emptyOutDir: true,
    },
  }
});

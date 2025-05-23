import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['.', './node_modules/']
    },
    proxy: {
      '/spline': {
        target: 'https://my.spline.design',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/spline/, ''),
        timeout: 30000, // Increased timeout to 30 seconds
        secure: false, // Allow insecure connections for development
        ws: true, // Enable WebSocket proxy
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  }
});
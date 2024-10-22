import mkcert from "vite-plugin-mkcert";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    return {
        plugins: [
            sveltekit(),
            // Only include mkcert in development mode
            mode === 'development' && mkcert(),
        ].filter(Boolean),  // This removes falsy values (like when mkcert isn't included)
        server: {
            // Only enable HTTPS in development, Railway will handle it in production
            https: mode === 'development',  
            host: true,  // Make sure to expose your app to the public
            proxy: {}, // Avoid "can't use Symbol where you need a string" error
        }
    };
});

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
			https: mode === 'development',  // Only enable HTTPS in development
			proxy: {}, // essential to avoid "can't use Symbol where you need a string" error
		}
	};
});

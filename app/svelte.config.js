import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	optimizeDeps: {
		include: ['@coral-xyz/anchor', '@solana/web3.js', 'buffer']
	},

	kit: {
		alias: {
			$src: './src/',
			'$src/*': './src/*',
			'$components/*': './src/components/*',
			$utils: './src/utils',
			'$utils/*': './src/utils/*',
			$tests: './tests',
			'$tests/*': './tests/*',
			'$stores/*': './src/stores/*',
			'$actions/*': './src/actions/*',
			'$sdk/*': './src/sdk/*'
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

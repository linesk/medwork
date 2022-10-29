import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { VitePWA } from 'vite-plugin-pwa';
import VueI18n from '@intlify/vite-plugin-vue-i18n';

// Automate SSL for https
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			dts: true,
			resolvers: [
				IconsResolver({
					prefix: 'icon',
				}),
			],
		}),
		Icons({
			compiler: 'vue3',
		}),
		AutoImport({
			dts: true,
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue\??/, // .vue
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				'vue-i18n',
				'@vueuse/core',
				'@vueuse/head',
				// custom
			],

			// custom resolvers
			// see https://github.com/antfu/unplugin-auto-import/pull/23/
			resolvers: [],
		}),
		Pages(),
		Layouts(),
		VitePWA({
      registerType: 'autoUpdate',
			includeAssets: [
				'favicon-16x16.png',
				'favicon-32x32.png',
				'favicon.png',
				'favicon.ico',
				'robots.txt',
				'apple-touch-icon.png',
			],
			manifest: {
				name: 'MEDWORK',
				short_name: 'MEDWORK',
				description: 'MEDWORK | Platform for Internal Medicine',
				theme_color: '#0020d4',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
    // --- Disable i18n ---
		// VueI18n({
		// 	runtimeOnly: true,
		// 	compositionOnly: true,
		// 	include: [resolve(__dirname, 'locales/**')],
		// }),

    // Uncomment this for local https server
    // basicSsl(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
    port: 3000, // Remain port 3000 as Vite2 default
		fs: {
			strict: true,
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
		exclude: ['vue-demi'],
	},
	// @ts-ignore
	ssgOptions: {
		script: 'async',
		formatting: 'minify',
		format : 'cjs'
	},
});

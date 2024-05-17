import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	optimizeDeps: {
		exclude: ["color-thief-wasm-web"],
	},
	plugins: [
		sveltekit(),
		visualizer({
			emitFile: true,
			filename: "stats.html"
		})
	],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
});

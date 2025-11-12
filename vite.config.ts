import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		coverage: {
			provider: "istanbul",
			reporter: ["text", "json", "html"],
		},
		exclude: ["node_modules", "dist"],
		globals: true,
		include: ["**/*.spec.[tj]s"],
		isolate: false,
		server: {
			deps: {
				inline: [
					"authly",
					"cloudly-analytics",
					"cloudly-http",
					"cloudly-rest",
					"cloudly-router",
					"cloudly-storage",
					"cryptly",
					"flagly",
					"gracely",
					"isly",
					"isoly",
					"langly",
					"selectively",
					"sessionly",
					"tidily",
					"typedly",
				],
			},
		},
		testTimeout: 20000,
		typecheck: {
			tsconfig: "./tsconfig.json",
		},
	},
})

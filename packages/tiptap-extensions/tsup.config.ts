import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.test.ts'],
  splitting: false,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
});

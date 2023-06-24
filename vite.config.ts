import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import { ViteAliases } from 'vite-aliases';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // ViteAliases({
        //     useConfig: true,
        // }),
        react(),
        tsconfigPaths(),
    ],
});

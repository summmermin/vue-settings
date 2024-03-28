import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": "./src",
            api: "/src/api",
            assets: "/src/assets",
            components: "/src/components",
            initData: "/src/initData",
            router: "/src/router",
            store: "/src/store",
            views: "/src/views",
            style: "/src/style",
        },
    },
});

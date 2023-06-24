import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import type { UserConfig } from 'vite';

const CWD = process.cwd();

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'types/auto-imports.d.ts', // plugins này sẽ tự động generated ra file auto-imports.d.ts trong source src.
        dirs: [], // chỗ này mình có thể thêm name folder nó sẽ tự động lấy tất cả các tên file trong folder đó và mình có thể gọi bất kì ở trong file Vue nào mà không cần import. (src/stores)
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve(CWD, 'src/assets/icon')],
        // Specify symbolId format
        symbolId: 'svg-icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {},
          additionalData: `
            @import "@/styles/varriables.less";
          `,
        },
      },
    },
    server: {
      host: true,
      port: 5000,
    },
  };
});

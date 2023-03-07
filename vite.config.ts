import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

const resolve = (name: string): string => path.resolve(__dirname, name);
const CWD = process.cwd();

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],

    server: {
      port: 3002,
      host: '0.0.0.0',
      proxy: {
        '/api': 'http://127.0.0.1:3000/',
      },
    },
  };
};

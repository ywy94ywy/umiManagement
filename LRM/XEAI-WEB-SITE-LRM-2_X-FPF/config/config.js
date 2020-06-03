import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  devServer: {
    port: 8003,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});

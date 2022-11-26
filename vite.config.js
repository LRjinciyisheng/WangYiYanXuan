import { defineConfig, loadEnv,  } from "vite";
import { resolve } from 'path'
 import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; 
// https://vitejs.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': resolve(__dirname, "src"),
      },
      extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 引入 var.less 这样就可以在全局中使用 var.less中预定义的变量了
          // 给导入的路径最后加上 ;
          additionalData: '@import "./src/styles/variables.less";',
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    //代理跨域
    // server: {
    //   host: '127.0.0.1',
    //   port: 8080,
    //   proxy: {
    //     '/api': {
    //       target: 'https://m.you.163.com/',//实际请求接口url
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //   }
    // }
    //代理跨域
    server: {
      host: '127.0.0.1',
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://sph-h5-api.atguigu.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),//路径重写
        },
      }
    }
  };
});

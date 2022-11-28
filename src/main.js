import { createApp } from "vue";
//引入大仓库
import pinia from "./stores";
//element-plus插件:完整引入
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "./index.css";
import App from "./App.vue";
import "reset-css";
import router from "./router";
//引入vant
import vant from "vant";
// 引入vant样式
import "vant/lib/index.css";
const app = createApp(App);
// for (const name in Elicons) {
//   app.component(name, Elicons[name]);
// }

app
  .use(pinia)
  .use(router)
  .use(vant)
  .use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn })
  .mount("#app");
// 图标并进行全局注册

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

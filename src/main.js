import { createApp } from "vue";
//element-plus插件:完整引入
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "./index.css";
import App from "./App.vue";
import "reset-css";
import router from "./router";

createApp(App)
  .use(router)
  .use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn })
  .mount("#app");
// 图标并进行全局注册
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

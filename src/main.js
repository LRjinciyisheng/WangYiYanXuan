import { createApp } from "vue";
//element-plus插件:完整引入
import ElementPlus from 'element-plus'

import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as Elicons from "@element-plus/icons-vue";

import 'element-plus/dist/index.css'

import "./index.css";
import App from "./App.vue";
import "reset-css";
import router from './router'

const app = createApp(App);
for (const name in Elicons) {
  app.component(name, Elicons[name]);
}

app.use(router)
.use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn, })
  .mount("#app");

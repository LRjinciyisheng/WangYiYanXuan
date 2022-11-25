import { createApp } from "vue";
//element-plus插件:完整引入
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import "./index.css";
import App from "./App.vue";
import "reset-css";
import router from './router';

 
createApp(App)
.use(router)
.use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn, })
  .mount("#app");

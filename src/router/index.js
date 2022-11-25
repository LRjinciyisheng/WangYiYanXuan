import { createRouter, createWebHistory } from 'vue-router';



import Search from './module/search.js'//搜索页路由导入
import User from './module/user.js'//个人中心路由导入
import Login from './module/login.js'

const routes = [

  ...Search,//搜索页展示
  ...User, //个人中心
  ...Login //登录
]


//创建路由器
const router = createRouter({
  //路由模式
	history: createWebHistory(),
  //路由配置
	routes: routes,
  //滚动行为
  scrollBehavior() {
    //vue2滚动行为x|y
    return { top: 0, left: 0}
  },
})

// 导出路由
export default router;
import { createRouter, createWebHistory } from "vue-router";

import Search from './module/search.js'//搜索页路由导入
import ShopCart from './module/shopcart.js'//购物车路由导入
import Pay from './module/pay.js'//支付页路由导入
import GoodsDetail from './module/goodsDetail.js'//商品详情路由导入
import Home from "./module/home.js"; //首页路由导入
import Category from './module/category.js'//搜索页路由导入
import User from './module/user.js'//个人中心路由导入
import Login from './module/login.js'
import Goshoping from './module/goshoping.js'
import Center from './module/center'
const routes = [

  ...Search,//搜索页展示
  ...Category,
  ...ShopCart,
  ...Pay,
  ...GoodsDetail,
  ...Home, //首页展示
  ...User, //个人中心
  ...Login, //登录
  ...Goshoping  ,//值得买
  ...Center //个人中心跳转后的路由
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
    return { top: 0, left: 0 };
  },
});

// 导出路由
export default router;

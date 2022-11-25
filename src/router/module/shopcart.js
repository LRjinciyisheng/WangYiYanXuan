//搜索路由
const ShopCartRoutes = [
  {
    path: "/shopcart",
    name: "ShopCart",
    component: () => import("@/views/ShopCart/index.vue"),
    meta: {
      //hidden: true,
    },
  },
];
export default ShopCartRoutes;

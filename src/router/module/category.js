//搜索路由
const CategoryRoutes = [
  //分类
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/Category/index.vue"),
    meta: {
      //hidden: true,
    },
  },
];
export default CategoryRoutes;
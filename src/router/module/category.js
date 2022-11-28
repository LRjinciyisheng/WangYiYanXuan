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
    // children: [
    //   {
    //     path: "/category/list",
    //     name: "List",
    //     component: () => import("@/views/Category/ProductList/index.vue"),
    //     meta: {
    //       //hidden: true,
    //     },
    //   }
    // ]
  },
  {
    path: "/category/list",
    name: "List",
    component: () => import("@/views/Category/ProductList/list.vue"),
    meta: {
      //hidden: true,
    },
  }
];
export default CategoryRoutes;
//搜索路由
const SearchRoutes = [
  // 搜索
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search/index.vue"),
    meta: {
      //hidden: true,
    },
  },

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
export default SearchRoutes;

//搜索路由
const SearchRoutes = [
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search/index.vue"),
    meta: {
      //hidden: true,
    },
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/home/index.vue"),
    meta: {
      //hidden: true,
    },
  },
];
export default SearchRoutes;

//首页路由
const HomeRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/home/index.vue"),
    meta: {
      //hidden: true,
    },
  },
];
export default HomeRoutes;

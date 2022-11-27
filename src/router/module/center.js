//个人中心跳转后路由
const CenterRoutes = [
    {
      path: "/center",
      name: "Center",
        component: () => import("@/views/Center/index.vue"),
        meta: {
        //hidden: true,
       
      },
     
    },
  ];
  export default  CenterRoutes
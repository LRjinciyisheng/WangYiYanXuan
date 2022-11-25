//个人中心路由
const UserRoutes = [
    {
      path: "/user",
      name: "User",
        component: () => import("@/views/User/index.vue"),
        meta: {
        //hidden: true,
       
      },
     
    },
  ];
  export default  UserRoutes 
  
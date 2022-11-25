//个人中心路由
const LoginRoutes = [
    {
      path: "/login",
      name: "Login",
      component: () => import("../../views/Login/index.vue"),
      meta: {
        //hidden: true,
       
      },
    },
  ];
  export default  LoginRoutes
  
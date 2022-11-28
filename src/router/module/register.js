//注册路由
const RegisterRoutes = [
    {
      path: "/register",
      name: "Register",
      component: () => import("../../views/Register/index.vue"),
      meta: {
        //hidden: true,
       
      },
    },
  ];
  export default  RegisterRoutes
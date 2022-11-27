// 支付路由
const PayRoutes = [
  {
    path:"/pay",
    name:"Pay",
    component: () => import("@/views/Pay/index.vue"),
    meta:{},
  },
];
export default PayRoutes;
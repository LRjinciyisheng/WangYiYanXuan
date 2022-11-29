//引入request
import request from "@/utils/request";
// 登录请求
export const reqLogin = (data) =>
  request({
    url: `/user/passport/login`,
    method: "post",
    type: "atguigu",
    params: data,
  });
//注册
export const reqUserRegister = (data) =>
  request({
    url: `/user/passport/register`,
    method: "post",
    type: "atguigu",
    params: data,
  });
//携带token
export const reqUserInfo = () =>
  request({ url: `/user/passport/auth/getUserInfo`, method: "get" });

//退出登录，告诉服务器小兄弟次token清理
export const reqLogOut = () =>
  request({ url: `/user/passport/logout`, method: "get" });



  

// 轮播
export const reqnavWap = () =>
  request({
    url: "/topic/v1/know/navWap.json",
    type: "you163",
    method: "get",
  });

// 瀑布流
export const reqtopic = (data) =>
  request({
    url: "/topic/v1/find/recAuto.json",
    method: "get",
    type: "you163",
  });

//引入request
import request from '../../utils/request.ts'
// 登录请求
export const reqLogin = (data)=>request.post({url:`/user/passport/login`,data});
//注册

// 轮播
export const reqnavWap = ()=>request.get('/topic/v1/know/navWap.json');

// 瀑布流
export const reqtopic = (data)=>request.get('/topic/v1/find/recAuto.json',data);
//引入request
import request from '@/utils/request';
// 登录请求
export const reqLogin = (data)=>request({
    url:`/user/passport/login`,
    method:'post',
    type:'atguigu',
    params:data
    });
//注册


// 轮播
export const reqnavWap = ()=>request({
    url:'/topic/v1/know/navWap.json',
    type:'you163',
    method:'post'
});

// 瀑布流
export const reqtopic = (data)=>request({
    url:'/topic/v1/find/recAuto.json',
    method:'get',
    type:'you163',
});
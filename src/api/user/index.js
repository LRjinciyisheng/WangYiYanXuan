//引入request
import request from '../../utils/request.ts'
// 登录请求
export const reqLogin = (data)=>request.post({url:`/user/passport/login`,data});
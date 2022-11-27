// 引入request文件
import request from '@/utils/request';

//获取某一个用户的购物车接口
export const reqUserCartList = ()=>request({
  url:`cart/cartList`,
  method:'get',
  type:'atguigu',
});
// 引入request文件
import request from '@/utils/request';

//获取商品详情数据
export const reqGoodDetail = skuId => request({ 
  url: `item/${skuId}`, 
  method: 'get',
  type:'atguigu', 
});
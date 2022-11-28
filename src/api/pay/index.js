

// 引入request文件
import request from '@/utils/request';

//获取交易页面的数据：收件人地址，商品清单
export const reqTradeInfo =()=>request({
  url:`order/auth/trade`,
  method:'get',
  type:'atguigu',
});





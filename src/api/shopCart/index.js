// 引入request文件
import request from "@/utils/request";



//获取某一个用户的购物车接口
export const reqUserCartList = () =>
  request({
    url: `cart/cartList`,
    method: "get",
    type: "atguigu",
  });

//将商品加入某一个用户的购物车+修改某一个已有的商品数量
export const reqAddOrUpdateCart = (skuId, skuNum) =>
  request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post",type: "atguigu" });

//修改某一个商品勾选状态
export const reqUpdateChecked = (skuId, isChecked) =>
  request({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get",type: "atguigu" });

//删除某一个商品
export const reqDeleteGoodById = (skuId) =>
  request({ url: `/cart/deleteCart/${skuId}`, method: "delete",type: "atguigu" });

//defineStore定义小仓库的方法
import {defineStore} from 'pinia';
import { reqGoodDetail } from "@/api/GoodsDetail/index";


export const useGoodsDetailStore = defineStore('goodsDetail',{
  //函数返回结果 组件可以使用的数据
  state:()=>({ 
    goodDetail:{}
  }),
  //修改数据 处理业务逻辑的地方 
  actions:{
    // 获取商品详情回调
    getgoodsDetail(skuId) {
    let result = reqGoodDetail(skuId);
    this.goodDetail = result;
    console.log(result);
}
  },
  //对数据进行简化操作 
  getters:{
    skuImageList(){
      return (((this.goodDetail || {}).skuInfo) || {} ).skuImageList || []
    }
    // goodDetail.skuInfo.skuImageList
  }
})
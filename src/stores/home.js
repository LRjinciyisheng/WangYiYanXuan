import { defineStore } from "pinia";
//引入请求函数
import { reqRecommendData } from "../api/home";
export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    recommendList: {},
  }),
  actions: {
    //获取推荐页面数据
    async getRecommendList() {
      let res = await reqRecommendData();
      this.recommendList = res.data;
    },
  },
  getters: {
    //简化推荐页数据
    //轮播
    banner() {
      return this.recommendList.focusList || [];
    },
    //三个小图标
    icons() {
      return this.recommendList.policyDescList || [];
    },
    //十个小商品
    goods() {
      return (this.recommendList.kingKongModule || {}).kingKongList || [];
    },
    //新人专享
    newPeople() {
      return this.recommendList.indexActivityModule || [];
    },
    //类目热销榜
    hotSale() {
      return (
        (this.recommendList.categoryHotSellModule || {}).categoryList || []
      );
    },
    //底部两个商品
    lastTwoGoods() {
      return this.recommendList.sceneLightShoppingGuideModule || [];
    },
  },
});
//focusList 轮播
// policyDescList 三个图标
//kingKongModule.kingKongList 十个小商品
//indexActivityModule 新人专享
//"categoryHotSellModule" 类目热销榜
//sceneLightShoppingGuideModule 底部两个商品

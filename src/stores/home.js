import { defineStore } from "pinia";
//引入请求函数
import { reqRecommendData, reqOtherData } from "../api/home";
export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    recommendList: {},
    otherList: {},
    httpLoading: true,
  }),
  actions: {
    //获取推荐页面数据
    async getRecommendList() {
      let res = await reqRecommendData();
      this.recommendList = res.data;
    },
    //获取某个频道页面数据
    async getOtherList(categoryId) {
      this.httpLoading = true;
      this.otherList = {};
      let res = await reqOtherData(categoryId);
      this.otherList = res;
      this.httpLoading = false;
    },
  },
  getters: {
    //简化推荐页数据
    //轮播
    banner() {
      return (this.recommendList.focusList || []).splice(0, 4);
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
    //类目热销榜1
    hotSaleTop() {
      return (
        (this.recommendList.categoryHotSellModule || {}).categoryList || []
      ).splice(0, 2);
    },
    //类目热销榜2
    hotSaleBottom() {
      return (
        (this.recommendList.categoryHotSellModule || {}).categoryList || []
      );
    },
    //底部两个商品
    lastTwoGoods() {
      return this.recommendList.sceneLightShoppingGuideModule || [];
    },
    //选项卡列表
    categoryList() {
      return (
        (this.recommendList.categoryHotSellModule || {}).categoryList || []
      );
    },
    //某个频道下的轮播图
    goodsBanner() {
      return ((this.otherList.currentCategory || {}).bannerList || []).splice(
        0,
        4
      );
    },
    //某个频道下数据
    goodsList() {
      return this.otherList.categoryItemList || [];
    },
  },
});
//focusList 轮播
// policyDescList 三个图标
//kingKongModule.kingKongList 十个小商品
//indexActivityModule 新人专享
//"categoryHotSellModule" 类目热销榜
//sceneLightShoppingGuideModule 底部两个商品
// categoryHotSellModule.categoryList 9个选型卡 遍历 item.extra.operationResource.categoryName/categoryId

//res.data:
//categoryItemList 第一个选型卡下面的数据
//currentCategory.bannerList 第一个选型卡轮播图

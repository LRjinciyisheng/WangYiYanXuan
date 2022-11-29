import { defineStore } from "pinia";
//引入请求函数
import  { reqRecomAndCate, reqProductList } from '../api/category/index';
export const useCategoryStore = defineStore('category',{
  //state:响应式数据
  state: () => ({
    categoryL1List:[],//左边一级分类的数据
    currentCategory:{},//当前展示的数据
    categoryGroupList:[],//对应着左边一级分类的右边的商品数据
    categoryL2List:[],//获取路由list.json第一次请求后的数据，做为顶部的滚动导航数据
    itemList:[],//比如 渲染乳胶枕下面的各种样式的乳胶枕
  }),
  // 异步操作  vue3中异步操作和修改数据都可以
  actions: {
    //为你推荐和分类列表的数据请求
    async getRecomAndCate(timestamp, categoryId) {
      try {
        let result = await reqRecomAndCate(timestamp, categoryId);
        // console.log(result,222);
        this.categoryL1List = result.categoryL1List;
        this.currentCategory = result.currentCategory;
        this.categoryGroupList = result.categoryGroupList;
        return 'ok';
      } catch (error) {
        return Promise.reject(new Error(error.message))
      }
    },
    // 根据分类ID获取分类的列表
    async getProductList(timestamp, categoryType, subCategoryId, categoryId) {
      try {
        let result = await reqProductList(timestamp, categoryType, subCategoryId, categoryId);
        this.categoryL2List = result.categoryL2List;
        this.itemList = result.categoryItems.itemList;
        // console.log(this.itemList);
        return this.categoryL2List;
      } catch (error) {
        return Promise.reject(new Error(error.message))
      }
    }




  }
})

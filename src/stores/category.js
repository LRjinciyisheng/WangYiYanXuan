import { defineStore } from "pinia";
//引入请求函数
import  { reqRecomAndCate } from '../api/category/index';
export const useCategoryStore = defineStore('category',{
  //state:响应式数据
  state: () => ({
    categoryL1List:[],//左边一级分类的数据
  }),
  // 异步操作  vue3中异步操作和修改数据都可以
  actions: {
    //为你推荐和分类列表的数据请求
    async getRecomAndCate(timestamp, categoryId) {
      try {
        let result = await reqRecomAndCate(timestamp, categoryId);
        // console.log(result,222);
        this.categoryL1List = result.categoryL1List;
        console.log(this.categoryL1List);
        return 'ok';
      } catch (error) {
        return Promise.reject(new Error(error.message))
      }
    },
    // 根据分类ID获取分类的列表
    async getListById(timestamp, categoryId) {
      try {
        let result = await reqRecomAndCate(timestamp, categoryId);
        
      } catch (error) {
        
      }

  }
  }
})

//defineStore定义小仓库的方法
import {defineStore} from 'pinia';
import {reqUserCartList,reqAddOrUpdateCart,reqUpdateChecked} from '@/api/shopCart/index';

export const useShopCartStore = defineStore('shopCart',{
  
  //函数返回结果 组件可以使用的数据
  state:()=>({
    cart:[],
    // 模拟服务器返回状态码
    code: 200
  }),
  //修改数据 处理业务逻辑的地方 
  actions:{
    //修改某一个商品数量
    async updateGoodSkuNum(skuId,skuNum){
      // 发请求给服务器修改这次商品的数量
      let result = await reqAddOrUpdateCart(skuId, skuNum);
      // 组件需要知道这次修改商品数量的成功还是失败
      if(this.code == 200){
        return 'ok'
      }
    },
    // 获取用户购物车列表
    async getUserCartList(){
      let result = await reqUserCartList();
      if(this.code == 200){
        this.cart = result.data;
      }
    },
    // 更新商品勾选状态
    async updateGoodChecked(skuId,isChecked){
      let result = await reqUpdateChecked(skuId,isChecked)
       //判断商品修改状态成功、失败
      if(this.code == 200){
        return 'ok';
      }else{
        return Promise.reject(new Error(result.message));
      }
    },

       //删除某一个商品
       async removeGoodById(skuId) {
        let result = await reqDeleteGoodById(skuId);
        //删除商品成功、失败返回
        if (rthis.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
     //全选的操作
     async updateAllGoodChecked (isChecked){
      let arr = []; 
     //获取购物车全部的商品
     getters.cartInfoList.forEach(item=>{
      // ??????????
         let ps =  updateGoodChecked({skuId:item,isChecked});
         arr.push(ps);
     })
     return Promise.all(arr);
  },
   
  },

  //对数据进行简化操作 
  getters:{

  }
})
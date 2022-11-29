<template>
  <div class="box">
    <div class="container" style="margin: 10px">
      <!-- 顶部的标题 -->
      <div class="top">
        <div class="left">
          <!-- <el-image style="width: 19px; height: 19px" :src="url"></el-image> -->
          <!-- <input type="checkbox" /> -->
          <h3>单件包邮</h3>
        </div>
        <p class="text">以下商品已免邮费</p>
      </div>
      <!-- 中间部分商品 -->
      <div class="center" v-for="(item, index) in 2" :key="index">
        <div class="left">
          <!-- <img
            style="width: 19px; height: 19px"
            src="https://yanxuan.nosdn.127.net/15997181361146549.png"
            alt=""
          /> -->
          <input
            type="checkbox"
            :checked="item == 1"
            @change="updateChecked(item, $event)"
          />
          <img
            src="./images/goods1.png"
            alt=""
          />
        </div>
        <div class="right">
          <p class="text"><i>特价</i> 走过路过不要错过过了这个村就米有这家店了</p>
          <button class="btn">
            灰色:L<img
              class="jiantou"
              src="https://yanxuan.nosdn.127.net/static-union/16584576892be242.png"
              alt=""
            />
          </button>
          <div class="bottom">
            <p class="jiage">￥117</p>
            <button class="btn1">
              <i @click="minus(item)" >-</i>1<i @click="add(item)">+</i>
            </button>
          </div>
        </div>
      </div>

      <div class="bottom">
        <img
          src="https://yanxuan.nosdn.127.net/static-union/1660720775214e32.png"
          alt=""
        />
        不可用券
      </div>
    </div>
    <div class="footer">
      <!-- <img src="https://yanxuan.nosdn.127.net/15997181361146549.png" alt="" /> -->
      <input type="checkbox" />
      <span @click="updateAllGoodChecked">全选</span>
      <span class="heji">合计:￥117</span>
      <button><router-link class="a" to="/pay">结算</router-link></button>
    </div>
  </div>
</template>

<script setup>
// 由于未拿到数据,页面数据均为静态,只是大概写了下业务逻辑


//函数的节流
import throttle from "lodash/throttle";
import { useShopCartStore } from "@/stores/shopCart";
import { onMounted } from "vue";

// 获取仓库
let shopCartStore = useShopCartStore();

onMounted(() => {
  getData();
});

// 减号 / 删除
const minus = (item) => {
  throttle(async (item) => {
    if (item > 1) {
      let skuId = item;
      let skuNum = -1;
      try {
        // 更新商品数据
        await shopCartStore.updateGoodSkuNum(skuId, skuNum);
     
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    }else{
      // 小于1则删除商品
       try{
       await shopCartStore.removeGoodById(item);

    }catch(error){
       return Promise.reject(new Error(error));
    }
    }
     // 重新获取新的数据
        getData();
  }, 1000);
};

// 加号
const add = async (item) => {
  let skuId = item;
  let skuNum = 1;
  try {
    // 更新商品数据
    await shopCartStore.updateGoodSkuNum(skuId, skuNum);
    // 重新获取新的数据
    getData();
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

// 获取数据回调
const getData = () => {
  shopCartStore.getUserCartList();
};

 //修改某一个商品勾选状态
// const updateChecked = (item,e)=>{
//   let skuId = item;
//   let isChecked = e.target.checked ? '1' : '0';
//   try{
//     await shopCartStore.updateGoodChecked(skuId,isChecked);
//      //再次获取购物车最新的数据
//     this.getData();
//   }catch(error){
//     return Promise.reject(new Error(error));
//   }
// }
 

    //删除某一个商品
//   const removeGood = (item)=>{
//     try{
//       await shopCartStore.removeGoodById(item);
//     }catch(error){
//        return Promise.reject(new Error(error));
//     }
//  }
  //全选复选框的回调
    const updateAllGoodChecked = async (e)=>{
       //获取全选复选框勾选状态数值
       let isChecked = e.target.checked?'1':'0';
       //派发action:当全部商品勾选状态修改完毕，再次获取购物车最新数据
      try {
        //保证全部商品勾选状态一次修改完毕
        await shopCartStore.updateAllGoodChecked(isChecked);
        //再次获取购物车最新的数据
        this.getData();
      } catch (error) {
         return Promise.reject(new Error(error));
      }
    }
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.container {
  position: relative;
  width: 90%;
  height: 100%;
  padding: 10px;
  background: #f4f4f4;
  border-radius: 20px;
}
.top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}
.top .left {
  display: flex;
}
.top .left h3 {
  margin-left: 5px;
  font-weight: 700;
}
.top .text {
  font-size: 12px;
}
.center {
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center .left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center .left img {
  width: 90px;
  height: 90px;
  display: block;
}
.center .right {
  margin-left: 5px;
}
.center .right .text {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
.center .right .text i {
  color: #fa1e32;
}
.center .right .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 18px;
  background: #f4f4f4;
  border: 1px solid #ccc;
  color: #7f7f7f;
  font-size: 12px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.center .right .btn img {
  width: 9px;
  height: 5px;
  margin-left: 5px;
}
.center .right .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center .right .jiage {
  font-weight: 700;
  color: #fa1e32;
}
.center .right .btn1 {
  width: 68px;
  height: 28px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
.bottom {
  font-size: 12px;
  color: #7f7f7f;
  display: flex;
}
.bottom img {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #f4f4f4;
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer img {
  width: 19px;
  height: 19px;
}
.footer span {
  font-size: 14px;
  color: #666;
}
.footer .heji {
  color: #dd1a21;
}
.footer button {
  width: 112px;
  height: 36px;
  border-radius: 20px;
  background: #dd1a21;
  color: #fff;
  border: transparent;
  .a {
    text-decoration: none;
    color: #fff;
  }
}
</style>

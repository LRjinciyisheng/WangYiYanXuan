<template>
  <div >
    <!-- 上方-标题 -->
    <ul class="headline" @click="handlerActive" >
      <li @click="()=>handlerPriceBox('1', true)" :class="{'active': isCurrentActive === '1'}">综合</li>
      <li>
        <span @click="()=>handlerPriceBox('2')" :class="{'active': isCurrentActive === '2'}" >价格</span>
        <span class="ImgArrows">
          <el-icon :size="10"><ArrowUp /></el-icon>
          <el-icon :size="10"><ArrowDown /></el-icon>
        </span>
      </li>
      <li @click="()=>handlerPriceBox('3')" :class="{'active': isCurrentActive === '3'}">分类</li>
      <!-- 价格选框 -->
      <div class="PriceBox" v-show="isShowPriceBox">
        <div  v-show="isCurrentActive === '2'">
            <!-- 筛选 -->
            <div class="PriceBox-screen"> 筛选
              <input class="PriceBox-screenIn" type="text" placeholder="最低价">
              <span>—</span>
              <input class="PriceBox-screenIn" type="text" placeholder="最低价">
            </div>
            <!-- 排序 -->
            <div class="PriceBox-sort">
              排序
              <button class="PriceBox-sortL">从低到高</button>
              <button class="PriceBox-sortR">从高到低</button>
            </div>
            <!-- 底部按钮 -->
            <div >  
              <button class="PriceBox-btn">取消</button>
              <button class="PriceBox-btn">确定</button>
            </div>
        </div>
        <div class="fenlei_btn" v-show="isCurrentActive === '3'"><button>分类</button></div>
      </div>
       <!-- 蒙版 -->
       <div v-show="isShowPriceBox" class="mask" @click="()=>handlerPriceBox(isCurrentActive,true)">333333</div>
    </ul>
    <!-- 下方商品列表 -->
    <ul class="productCatalogue" >
 
      <li v-for="(item,index) in productLi" :key="item.id">
        <img
        :src="item.listPicUrl"        />
<!-- 商品标题 -->
        <span class="headline_title">{{item.name}}</span>

        <b>
          <i>￥</i>
          <!-- 现价 -->
          <span>{{item.retailPrice}}</span>
          <!-- 原价 -->
          <span class="originalCost">￥{{item.sortOriginPrice}}</span>
        </b>
        <div class="specialOffer" v-if="item.finalPriceInfoVO.banner?.title||item.finalPriceInfoVO.banner?.content">
          <span class="specialOffer-left" >{{item.finalPriceInfoVO.banner?.title||item.finalPriceInfoVO.banner?.content}}</span>
          <span class="specialOffer-right" v-if="item.finalPriceInfoVO.banner?.title && item.finalPriceInfoVO.banner?.content">{{item.finalPriceInfoVO.banner?.content}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reqSearch } from "@/api/search";
import { onMounted, ref,reactive } from "vue";
let productLi = ref([]);


/* 点击价格——弹出的响应式数据 */
let isCurrentActive = ref('1'); // 综合:'1', 价格:'2' , 分类:'3'
let isShowPriceBox = ref(false) // 是否显示筛选区域


const props = defineProps({
  searchVal: {
    type: Number,
    required: true,
  },
});
onMounted(() => {
  getReqSearch();
});

const getReqSearch = async () => {
  try {
    const res = await reqSearch({
      keyword: props.searchVal,
      size: 50,
    });
    productLi.value = res.directlyList;
    console.log(productLi.value, "66获取数据成功了");
  } catch (error) {
    console.log(error, "33获取数据失败~~");
  }
};


/* 点击价格——展示价格排序的选项框 */
let handlerPriceBox=(n,isMask)=>{
  isShowPriceBox.value = !isMask;
  isCurrentActive.value = n;
 }
</script>

<style lang="less" scoped>
/*筛选-input的样式*/
.PriceBox-screen{
 display: flex;
 margin: 20px 0;
 justify-content: center;
 line-height: 28px;
  .PriceBox-screenIn{
    text-align: center;
    width: 30%;
    height: 22px;
    margin: 0 10px;
   }
}
/*排序-btn样式*/
.PriceBox-sort{
 
 margin: 20px 22px;
 display: flex;
 justify-content: start;
 line-height: 28px;
 .PriceBox-sortL,.PriceBox-sortR{
  margin: 0 10px;
  width: 30%;
 }
}
/*底部按钮样式*/
.PriceBox-btn{
  width: 50%;
  margin-top: 34px;
  height: 50px;
}
.active{
  color: red;
}
/*商品标题*/

.headline {
  color: black;
  position: relative;
  display: flex;
  justify-content: space-around; /*元素在主轴上的对齐方式——平分剩余空间*/
  /*flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性。row从左到右，nowrap不换行*/
  background: rgb(244, 242, 242);
  padding: 10px 0;
  border-bottom: 2px solid rgb(189, 187, 187);
  li {
    text-align: center;
    flex-wrap: nowrap; /*不换行*/
    display: flex;
    align-items: center; /*侧轴上的子元素（单行）—— 垂直居中对齐*/
  }
  .ImgArrows {
    display: flex;
    flex-direction: column; /*设置主轴为y，从上到下排列*/
    margin-left: 3px;
    .el-icon,
    svg {
      height: 0.8em;
    }
  }
}
/*商品列表*/
.productCatalogue {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;
  flex-wrap: wrap;

  li {
    background: skyblue;
    border-radius: 10px;
    padding: 6px;
    width: 100%;
    box-sizing: border-box;
    img {
      width: 100%;
      border-radius: 10px;
      margin: auto;
      display: block;
    }
    .headline_title {
      display: block;
      margin: 8px 0;
    }
    b {
      i {
        font-weight: 600;
        font-size: 14px;
        color: rgb(223, 6, 6);
      }
      span {
        font-weight: 600;
        color: rgb(223, 6, 6);
        font-size: 20px;
      }
      .originalCost {
        font-size: 14px;
        color: rgb(122, 122, 122);
        text-decoration: line-through;
        font-weight: 500;
      }
    }

    .specialOffer {
      display: inline-block;
      margin-top: 8px;
      background: rgb(252, 217, 226);
      color: rgb(255, 0, 0);
      font-weight: 600;
      font-size: 12px;
      border-radius: 16px;
      padding:5px 0;
      &-left {
        background: red;
        color: white;
        border-radius: 16px;
        padding: 2px 6px;
       
      }
      &-right{
        display: inline-block;
        margin: 0  10px 0 5px;
      }
    }
  }
}
/*蒙版*/
.mask{
  width: 100%;
  height: 1000px;
  background: black;
  opacity: .5;
  position: absolute;
 top: 36px;
  z-index: 10;
}
.PriceBox{
  width: 100%;
  height: 200px;
  background:rgb(228, 202, 248);
  position: absolute;
  top: 36px;
  z-index: 20;
}
</style>

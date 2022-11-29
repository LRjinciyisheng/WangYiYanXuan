<template>
  <div class="product-detail-list-container">
    <div>
      <!-- 上方-标题 -->
      <ul class="headline" @click="handlerActive">
        <li
          @click="() => handlerPriceBox('1', true)"
          :class="{ active: isCurrentActive === '1' }"
        >
          综合
        </li>
        <li>
          <span
            @click="() => handlerPriceBox('2')"
            :class="{ active: isCurrentActive === '2' }"
            >价格</span
          >
          <span class="ImgArrows">
            <el-icon   :class="{ activePriceBox: searchParams.sortType===1&&!searchParams.descSorted }" :size="10"><ArrowUp /></el-icon>
            <el-icon  :class="{ activePriceBox: searchParams.sortType===1&& searchParams.descSorted }" :size="10"><ArrowDown /></el-icon>
          </span>
        </li>
        <li
          @click="() => handlerPriceBox('3')"
          :class="{ active: isCurrentActive === '3' }"
        >
          分类
        </li>
        <!-- 价格选框 -->
        <div class="PriceBox" v-show="isShowPriceBox">
          <div v-show="(isCurrentActive === '2')">
            <!-- 筛选 -->
            <div class="PriceBox-screen">
              筛选
              <input
                @click="handlerInputIsShow"
                v-model="searchPriceParams.floorPrice"
                :class="{ activeInput: inputIsShow }"
                class="PriceBox-screenIn"
                type="number"
                placeholder="最低价"
              />
              <span>—</span>
              <input
                @click="handlerInputIsShow"
                v-model="searchPriceParams.upperPrice"
                :class="{ activeInput: !inputIsShow }"
                class="PriceBox-screenIn"
                type="number"
                placeholder="最高价"
              />
            </div>
            <!-- 排序 -->
            <div class="PriceBox-sort">
              排序
              <button
                class="PriceBox-sortL"
                @click="()=>handlerisShow(false)"
                :class="{ activePriceBox: searchPriceParams.sortType===1&&!searchPriceParams.descSorted }"
              >
                从低到高
              </button>
              <button
                class="PriceBox-sortR"
                @click="()=>handlerisShow(true)"
                :class="{ activePriceBox: searchPriceParams.sortType===1&& searchPriceParams.descSorted }"
              >
                从高到低
              </button>
            </div>
            <!-- 底部按钮 -->
            <div>
              <button class="PriceBox-btn" @click="handleCancel">
                取消
              </button>
              <button class="PriceBox-btn2" @click="handleConfriom">确定</button>
            </div>
          </div>
          <ul class="fenlei_btn" v-show="(isCurrentActive === '3')">
            <li
              @click="() => handleCategoryBtn(item.id)"
              class="fenlei_btn_item"
              :class="{ activeBtn: btnActive == item.id }"
              v-for="item in categoryL1List"
              :key="item.id"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <!-- 蒙版 -->
        <div
          v-show="isShowPriceBox"
          class="mask"
          @click="() => handlerPriceBox(isCurrentActive, true)"
        >
          333333
        </div>
      </ul>
    </div>

    <!-- 下方商品列表 -->
    <div class="productScroll">
      <ul class="productCatalogue">
        <li v-for="(item, index) in productLi" :key="item.id" @click="goGoodsDetail(item.id)">
          <img :src="item.listPicUrl" />
          <!-- 商品标题 -->
          <span class="headline_title">{{ item.name }}</span>

          <b>
            <i>￥</i>
            <!-- 现价 -->
            <span>{{ item.retailPrice }}</span>
            <!-- 原价 -->
            <span class="originalCost">￥{{ item.sortOriginPrice }}</span>
          </b>
          <div
            class="specialOffer"
            v-if="
              item.finalPriceInfoVO.banner?.title ||
              item.finalPriceInfoVO.banner?.content
            "
          >
            <span class="specialOffer-left">{{
              item.finalPriceInfoVO.banner?.title ||
              item.finalPriceInfoVO.banner?.content
            }}</span>
            <span
              class="specialOffer-right"
              v-if="
                item.finalPriceInfoVO.banner?.title &&
                item.finalPriceInfoVO.banner?.content
              "
              >{{ item.finalPriceInfoVO.banner?.content }}</span
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reqSearch } from "@/api/search";
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let productLi = ref([]);
let categoryL1List = ref([]);
let flageF = ref(false); //帮助点击显示筛选栏
let btnActive = ref(-1);
let searchParams = reactive({
  keyword: props.searchVal,
  size: 20,
  categoryId: 0, //分类id
  sortType: 0, //排序：1 不排序：0
  descSorted: true, // 高：true 低：false
  floorPrice: -1, // 最低价
  upperPrice: -1, // 最高价
});
let searchPriceParams = reactive({
  sortType: 0, //排序：1 不排序：0
  descSorted: true, // 高：true 低：false
  floorPrice: '', // 最低价
  upperPrice: '', // 最高价
});

/* 点击商品-进入详情页 */
const goGoodsDetail=(id)=>{
  router.push({
    path: "/goodsdetail",
    query: {
      id,
    },
  });
}
/* 点击价格——弹出的响应式数据 */
let isCurrentActive = ref("1"); // 综合:'1', 价格:'2' , 分类:'3'
let isShowPriceBox = ref(false); // 是否显示筛选区域
let isShow = ref(false);
let handlerisShow = (flag) => {
  isShow.value = !isShow.value;
  searchPriceParams.sortType = 1;
  searchPriceParams.descSorted = flag;
};
let inputIsShow = ref(false);
let handlerInputIsShow = () => {
  inputIsShow.value = !inputIsShow;
};
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
    let requestParams = Object.assign({}, searchParams);
    if (requestParams.sortType === 0) {
      delete requestParams.descSorted;
    }
    const res = await reqSearch(requestParams);
    productLi.value = res.directlyList;
    categoryL1List.value = res.categoryL1List;
    btnActive.value =
      btnActive.value === -1 ? res.categoryL1List[0].id : btnActive.value;
    console.log(productLi.value, "66获取数据成功了");
  } catch (error) {
    console.log(error, "33获取数据失败~~");
  }
};
const handleConfriom = ()=>{
  Object.assign(searchParams,searchPriceParams)
  searchParams.floorPrice = searchParams.floorPrice === '' ? -1 : searchParams.floorPrice
  searchParams.upperPrice = searchParams.upperPrice === '' ? -1 : searchParams.upperPrice
  isShowPriceBox.value = false;
  getReqSearch();
}
const handleCancel = ()=>{
  for(let i in searchParams){
    searchPriceParams[i] = searchParams[i] !== -1 ? searchParams[i] : ''
  }
  isShowPriceBox.value = false;
}
/* 点击价格筛选条件下的按钮 */
let handleCategoryBtn = (id) => {
  btnActive.value = id;
  searchParams.categoryId = id;
  isShowPriceBox.value = false;
  getReqSearch();
};
/* 点击价格——展示价格排序的选项框 */
let handlerPriceBox = (n, isMask) => {
  
  if (n === "1") {
    searchParams.sortType = 0;
    searchPriceParams.sortType = 0;
    getReqSearch();
  }
  if(['2','3'].includes(n) && isCurrentActive.value === n){
    isShowPriceBox.value = !isShowPriceBox.value
   //  flageF.value = !flageF.value;
  }else{
    isShowPriceBox.value = !isMask;
  }
  isCurrentActive.value = n;
 
};
</script>

<style lang="less" scoped>
.product-detail-list-container{
  display: flex;
  flex-direction: column;

}
.productScroll {
  height:calc(100vh - 62px - 38px);
  overflow-y: auto;

}

/*分类点击后-筛选*/
.fenlei_btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 10px 20px;
  .fenlei_btn_item {
    border: 1px solid #7f7f7f;
    margin: 10px 10px;
    padding: 5px;
  }
}
/*分类筛选按钮-选中状态*/
.fenlei_btn .activeBtn {
  color: red;
  border: 1px solid red;
}
/*筛选-input的样式*/

.PriceBox-screen {
  display: flex;
  margin: 20px 0;
  justify-content: center;
  line-height: 28px;
  .PriceBox-screenIn {
    background: none;
    text-align: center;
    width: 30%;
    height: 22px;
    margin: 0 10px;
    border: 1px solid #7f7f7f;
    outline-color: red;
  }
}
/*排序-后面俩-btn样式*/
.PriceBox-sort {
  margin: 0 22px;
  display: flex;
  justify-content: start;
  line-height: 28px;
  .PriceBox-sortL,
  .PriceBox-sortR {
    background: none;
    border: 1px solid #7f7f7f;
    margin: 0 10px;
    width: 30%;
  }
}
/*排序按钮-选中*/
.PriceBox-sort .activePriceBox {
  color: red;
  border: 1px solid red;
}
.headline .activePriceBox {
  color: red;
}
/*底部按钮（确定，取消）样式*/
.PriceBox-btn,
.PriceBox-btn2 {
  width: 50%;
  margin-top: 30px;
  height: 50px;
  background: none;
  border: 1px solid #7f7f7f;
  border-bottom: none;
  border-left: none;
}
.PriceBox-btn2 {
  color: red;
  border-right: none;
}
.active {
  color: red;
}
/*商品标题*/

.headline {
  position: fixed;
  top: 0px;
  left: 0px;
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
    background: #fff;
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
      padding: 5px 0;
      &-left {
        background: red;
        color: white;
        border-radius: 16px;
        padding: 2px 6px;
      }
      &-right {
        display: inline-block;
        margin: 0 10px 0 5px;
      }
    }
  }
}
/*蒙版*/
.mask {
  width: 100%;
  height: 1000px;
  background: black;
  opacity: 0.5;
  position: absolute;
  top: 36px;
  z-index: 10;
}
.PriceBox {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 36px;
  z-index: 20;
}
</style>

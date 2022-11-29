<template>
  <div class="list">
    <!-- 文字导航栏 选型卡 -->
    <!-- <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane :label="item.name" :name="item.name" v-for="item in categoryL2List"></el-tab-pane>
    </el-tabs> -->

    <van-tabs v-model:active="activeName" @click-tab="onClickTab">
      <van-tab v-for="item in categoryL2List" :title="item.name" :name="item.name"></van-tab>
    </van-tabs>

     <!-- 商品展示 -->
     <div class="goodShow">
      <div class="title">
        <p class="title1">四季款</p>
      </div>
      <div class="show">
        <div class="item" v-for="item in itemList" :key="item" @click="showDetail(item.id)">
          <div class="top">
            <img :src="item.listPicUrl" />
            <div class="desc"><span class="shier">双12</span>{{ item.name }}</div>
            <div class="price"><span>到手¥</span>{{ item.finalPriceInfoVO.priceInfo.counterPrice}}</div>
          </div>
          <!-- <div class="jian"> {{ item.finalPriceInfoVO.banner.content || null }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入路由
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick, watch } from "vue";
//获取小仓库
import { useCategoryStore } from '../../../stores/category';

let categoryStore = useCategoryStore();
//创建路由对象
const router = new useRouter();
//存储顶部导航数据
const categoryL2List:any = ref([]);
//拿取路由携带的name参数
let name1 = router.currentRoute.value.query.name;
// let active = ref(name1);
let activeName = ref(name1);
//比如 渲染乳胶枕下面的各种样式的乳胶枕
let itemList = ref([]);

let categoryId = ref();
let subCategoryId = ref();
let categoryType = ref();

//挂载完毕后
onMounted(() => {
  getDataList();
})

//发请求获取顶部导航数据
const getDataList = async () => {
  //收集query参数
  let timestamp = ref(1669449180100);
  categoryId.value = router.currentRoute.value.query.categoryId;
  subCategoryId.value = router.currentRoute.value.query.subCategoryId;
  categoryType.value = router.currentRoute.value.query.categoryType;
  console.log(subCategoryId.value,'发请求前获取到参数');
  //发请求获取顶部导航数据
  categoryL2List.value = await categoryStore.getProductList(timestamp.value, categoryType.value, subCategoryId.value, categoryId.value);
  itemList.value = categoryStore.itemList;
} 

//每次点击导航栏时，切换到对应的分类的商品数据
const onClickTab = async (title) => {
  let res = categoryL2List.value.find(item => {
    return item.name == title.name;
  });
  subCategoryId.value = res.id;
  console.log(subCategoryId.value, 11111111111111);
  router.push({
    path:'/category/list',
    query:{
      categoryId:categoryId.value,
      subCategoryId:subCategoryId.value,
      categoryType:categoryType.value,
      name:title.name,
    }
  });
  // getDataList();

  //收集query参数
  let timestamp = ref(1669449180100);
  categoryL2List.value = await categoryStore.getProductList(timestamp.value, categoryType.value, subCategoryId.value, categoryId.value);
  itemList.value = categoryStore.itemList;


}

const showDetail = (id) => {
  router.push({
    path: '/goodsdetail',
    query: {
      id
    }
  });

}


//监听subCategoryId
// watch(subCategoryId, (newValue, oldValue) => {
//   console.log('watch已触发',newValue);
// })

</script>

<style scoped lang="less">
.list{
  width: 375px;
  height: 667px;
  position: relative;
  border-top: 3px solid #eee;
  .goodShow {
    width: 375px;
    border-top: 10px solid #eee;
    border-bottom: 10px solid #eee;
    .title {
      width: 375px;
      height: 50px;
      p {
        text-align: center;
        margin-top: 10px;
      }
    }
    .show {
      width: 375px;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 285px;
        padding-left: 8px;
        box-sizing: border-box;
        .top {
          height: 260px;
          img {
            width: 172.5px;
            height: 172.5px;
            border-radius: 10px;
            margin-bottom: 5px;
          }
          .desc {
            font-size: 16px;
            line-height: 22px;
            font-weight: 500;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            .shier{
              display: inline-block;
              width: 50px;
              height: 25px;
              background: #dd1a21;
              color: white;
              border-radius: 5px;
              text-align: center;
              line-height: 25px;
              font-style: italic;
              font-weight: 600;
              margin-right: 5px;
            }
          }
          .price {
            height: 30px;
            margin-top: 5px;
            font-weight:bolder;
            font-size: large;
            color: #dd1a21;
            span {
              font-size: 13px;
              

            }
          }
        }
        .jian {
          width: 85px;
          height: 25px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 15px;
          background: #fa1e32;
          border-radius: 30px;
          line-height: 25px;
          text-align: center;
          color: #eee;
        }
      }
    }
  }

}


</style>
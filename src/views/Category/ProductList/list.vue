<template>
  <div class="list">
    <!-- 文字导航栏 选型卡 -->
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="推荐" name="推荐"></el-tab-pane>
      <el-tab-pane
        label="居家生活"
        :name="item"
        v-for="item in 10"
        :key="item"
      ></el-tab-pane>
    </el-tabs>

     <!-- 商品展示 -->
     <div class="goodShow">
      <div class="title">
        <p class="title1">四季款</p>
      </div>
      <div class="show">
        <div class="item" v-for="item in 7" :key="item">
          <img src="../../../static/傻猫咪.jpg" alt="" />
          <div class="desc">裸睡亲肤,经典针织四件套 针织四件套</div>
          <div class="price"><span>¥</span>349</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入路由
import { useRouter } from 'vue-router';
import { ref, onMounted } from "vue";
//引入请求
import { reqProductList } from '../../../api/category';
const activeName = ref("推荐");
//创建路由对象
const router = new useRouter();
//挂载完毕后
onMounted(() => {
  getDataList();
})

//发请求获取当前页数据
const getDataList = async () => {
  //收集query参数
  let timestamp = ref(1669449180100);
  let categoryId = router.currentRoute.value.query.categoryId;
  let subCategoryId = router.currentRoute.value.query.subCategoryId;
  let categoryType = router.currentRoute.value.query.categoryType;
  
  let result = await reqProductList(timestamp.value, categoryType, subCategoryId, categoryId);
  console.log(result);

} 


</script>

<style scoped lang="less">
.list{
  width: 375px;
  height: 667px;
  .goodShow {
    width: 375px;
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
        height: 260px;
        padding-left: 8px;
        box-sizing: border-box;
        img {
          width: 172.5px;
          height: 172.5px;
          border-radius: 10px;
          margin-bottom: 5px;
        }
        .desc {
          font-size: 14px;
          line-height: 20px;
        }
        .price {
          height: 30px;
          margin-top: 5px;
          color: #dd1a21;
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
}


</style>
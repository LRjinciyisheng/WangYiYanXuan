<template>
  <div class="good">
    <!-- 轮播 -->
    <el-carousel class="swiper" height="150px">
      <el-carousel-item
        v-for="(item, index) in homeStore.goodsBanner"
        :key="index"
        class="item"
      >
        <img :src="item.picUrl" class="banner" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 商品展示 -->
    <div
      class="goodShow"
      v-for="good in homeStore.goodsList"
      :key="good.category.id"
    >
      <div class="title">
        <p class="title1">{{ good.category.name }}</p>
        <p class="title2">{{ good.category.frontDesc }}</p>
      </div>
      <div class="show">
        <div
          class="item"
          v-for="item in good.itemList"
          :key="item.id"
          @click="goDetail(item.id)"
        >
          <img :src="item.listPicUrl" alt="" />
          <div class="desc">{{ item.name }}</div>
          <div class="price"><span>¥</span>{{ item.retailPrice }}</div>
        </div>
      </div>
    </div>
    <van-loading
      size="24px"
      class="good-loading"
      color="#dd1a21"
      text-color="#bbb"
      v-show="homeStore.httpLoading"
      >加载中...</van-loading
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useHomeStore } from "../../../stores/home";
import { useRouter } from "vue-router";
const homeStore = useHomeStore();
const router = useRouter();
const goDetail = (goodId) => {
  console.log(goodId);
  router.push({
    name: "GoodsDetail",
    query: {
      categoryId: goodId,
    },
  });
};
</script>

<style scoped lang='less'>
.good {
  width: 375px;
  .swiper {
    width: 375px;
    height: 150px;
    border-bottom: 10px solid #eee;
    margin-bottom: 10px;
    .item {
      width: 375px;
      height: 150px;
      .banner {
        width: 375px;
        height: 150px;
      }
    }
  }
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
      .title2 {
        font-size: 12px;
        color: #ccc;
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
  .good-loading {
    position: fixed;
    top: 30%;
    left: 40%;
  }
}
</style>
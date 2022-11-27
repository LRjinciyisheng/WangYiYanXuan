<template>
  <div class="good">
    <!-- 轮播 -->
    <el-carousel class="swiper" height="150px">
      <el-carousel-item v-for="item in 4" :key="item" class="item">
        <img src="../images/1.jpg" class="banner" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 商品展示 -->
    <div class="goodShow" v-for="item in 3" :key="item">
      <div class="title">
        <p class="title1">四季款</p>
        <p class="title2">四季款</p>
      </div>
      <div class="show">
        <div class="item" v-for="item in 7" :key="item">
          <img src="../images/1.jpg" alt="" />
          <div class="desc">裸睡亲肤,经典针织四件套 针织四件套</div>
          <div class="price"><span>¥</span>349</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
}
</style>
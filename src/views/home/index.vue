<template>
  <div class="home">
    <!-- 顶部搜索框1 -->
    <div class="top">
      <img src="./images/logo.png" class="logo" alt="" />
      <el-input
        class="w-50 m-2 ipt"
        placeholder="搜索商品"
        :prefix-icon="Search"
        readonly
        @click="goSearch"
        @focus="handleGoSearch"
      />
      <el-button plain class="btn" @click="goLogin">登录</el-button>
    </div>
    <!-- 导航栏 -->
    <van-tabs
      v-model:active="categoryId"
      line-height="1px"
      line-width="60px"
      title-active-color="#dd1a21"
      color="#dd1a21"
      @click-tab="changeCategoryId"
    >
      <van-tab title="推荐" name="-1"> </van-tab>
      <van-tab
        v-for="item in homeStore.categoryList"
        :title="item.extra.operationResource.categoryName"
        :key="item.extra.operationResource.categoryId"
        :name="item.extra.operationResource.categoryId"
      >
      </van-tab>
    </van-tabs>
    <!-- 滚动视图 -->
    <div class="scroll" ref="scroll">
      <div v-show="categoryId == '-1'" class="scroll-tj">
        <!-- 轮播 -->
        <el-carousel class="swiper" height="150px" loop>
          <el-carousel-item
            v-for="banner in homeStore.banner"
            :key="banner.id"
            class="item"
          >
            <a href="javascript:;">
              <img :src="banner.picUrl" class="banner" alt="" />
            </a>
          </el-carousel-item>
        </el-carousel>
        <!-- 三个图标 -->
        <div class="icons">
          <div
            class="item"
            v-for="(icon, index) in homeStore.icons"
            :key="index"
          >
            <img :src="icon.icon" class="icon" alt="" />
            <span class="title">{{ icon.desc }}</span>
          </div>
        </div>
        <!-- 商品分类小图 -->
        <div class="goods">
          <div
            class="item"
            v-for="(good, index) in homeStore.goods"
            :key="index"
          >
            <a href="javascript:;">
              <img :src="good.picUrl" class="good" alt="" />
              <p class="title">{{ good.text }}</p>
            </a>
          </div>
        </div>
        <!-- 新人专享 -->
        <h3 class="title1">- 新人专享礼 -</h3>
        <div class="newPeople">
          <div class="left">
            <a href="javascript:;">
              <div class="left-text">新人专享礼包</div>
              <img
                src="https://yanxuan.nosdn.127.net/static-union/1648017994dd2933.png"
                alt=""
              />
            </a>
          </div>
          <div class="right">
            <div class="shang">
              <a href="javascript:;">
                <div class="shang-text">
                  <p>福利社</p>
                  <span>今日特价</span>
                </div>
                <img :src="(homeStore.newPeople[0] || []).picUrl" alt="" />
              </a>
            </div>
            <div class="xia">
              <a href="javascript:;">
                <div class="xia-text">
                  <p>新人拼团</p>
                  <div class="xia-text2">1元起包邮</div>
                </div>
                <img :src="(homeStore.newPeople[1] || []).showPicUrl" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- 类目热销 -->
        <h3 class="title2">类目热销榜</h3>
        <div class="hotSale">
          <div class="hot-top">
            <div
              class="item"
              v-for="(item, index) in homeStore.hotSaleTop"
              :key="index"
            >
              <a href="javascript:;">
                <div class="top-text">{{ item.categoryName }}</div>
                <img :src="item.showPicUrl" alt="" />
              </a>
            </div>
          </div>
          <div class="hot-bottom">
            <div
              class="item"
              v-for="(item, index) in homeStore.hotSaleBottom"
              :key="index"
            >
              <a href="javascript:;">
                <div class="bottom-text">{{ item.categoryName }}</div>
                <img :src="item.showPicUrl" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- 底部两个商品 -->
        <div class="lastTwo">
          <div class="lastTwo-zuo">
            <div class="left-text">穿新衣</div>
          </div>
          <div class="lastTwo-you">
            <div class="right-text">
              <p>严选众筹</p>
              <span>探索美与用</span>
            </div>
            <img
              :src="
                (((homeStore.lastTwoGoods[1] || {}).styleItem || {})
                  .picUrlList || [])[0]
              "
              alt=""
            />
            <img
              :src="
                (((homeStore.lastTwoGoods[1] || {}).styleItem || {})
                  .picUrlList || [])[1]
              "
              alt=""
            />
          </div>
        </div>
        <!-- 最底部 -->
        <div class="footer">
          <div class="button">
            <el-button plain class="btn1">下载APP</el-button>
            <el-button plain class="btn2">电脑版</el-button>
          </div>
          <div class="text">
            <div class="text1">网易公司版权所有 © 1997-2022</div>
            <div class="text2">食品经营许可证：JY13301080111719</div>
          </div>
        </div>
      </div>
      <Good v-show="categoryId != '-1'"></Good>
    </div>
    <!-- 返回顶部按钮 -->
    <div class="topUp" @click="backTop" v-show="showToTop">
      <img src="./images/top.png" style="width: 100%; height: 100%" alt="" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import Good from "./good/index.vue";
import { Search } from "@element-plus/icons-vue";
import { ref, onMounted, watch, nextTick } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter, useRoute } from "vue-router";
// 引入仓库
import { useHomeStore } from "../../stores/home";

//声明响应式数据 请求的参数
const categoryId = ref("-1");
const homeStore = useHomeStore();
const router = useRouter();
const route = useRoute();
const showToTop = ref(false);
const scroll = ref();
// 页面挂载 获取首页数据
onMounted(() => {
  homeStore.getRecommendList();
  //给scroll添加滚动条监听事件
  scroll.value.addEventListener("scroll", handleScroll);
});
//返回顶部按钮的回调
const backTop = () => {
  let top = scroll.value.scrollTop; //获取点击时页面的滚动条纵坐标位置
  const timeTop = setInterval(() => {
    scroll.value.scrollTop = top -= 10; //一次减10往上滑动
    if (top <= 0) {
      clearInterval(timeTop);
    }
  }, 5); //定时调用函数使其更顺滑
};
//scroll滚动条监听事件的回调
const handleScroll = () => {
  // console.log(scroll.value.scrollTop);
  if (scroll.value.scrollTop > 700) {
    showToTop.value = true;
  } else {
    showToTop.value = false;
  }
};
//点击选型卡 发送对应频道的请求
const changeCategoryId = ({ name, title, event, disabled }) => {
  if (name != -1) {
    homeStore.getOtherList(name);
  }
};
//点击input跳转搜索
const goSearch = () => {
  router.push({
    name: "Search",
  });
};
//点击跳转登录
const goLogin = () => {
  router.push({
    name: "Login",
  });
};
//点击input框跳转到搜索页

const router = useRouter();
const handleGoSearch=()=>{
  router.push("/search")
}
</script>

<style scoped lang='less'>
@color: #dd1a21;
a {
  text-decoration: none;
  color: #000;
  -webkit-tap-highlight-color: transparent;
}

.home {
  height: 100%;
  width: 100%;

  .top {
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    .logo {
      width: 69px;
      height: 20px;
    }
    .ipt {
      margin: 0 10px;
    }
    .btn {
      width: 37px;
      height: 20px;
      color: @color;
      border: 1px solid @color;
    }
  }
  .scroll {
    height: 580px;
    width: 375px;
    overflow-y: scroll;
    overflow-x: hidden;
    .scroll-tj {
      width: 375px;
      .swiper {
        width: 375px;
        height: 150px;
        .item {
          width: 375px;
          height: 150px;
          .banner {
            width: 375px;
            height: 150px;
          }
        }
      }
      .icons {
        width: 375px;
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
        .item {
          display: flex;
          align-items: center;
          .icon {
            width: 16px;
            height: 16px;
            margin-right: 5px;
          }
          .title {
            font-size: 12px;
          }
        }
      }
      .goods {
        width: 375px;
        height: 175px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        padding: 0 10px;
        box-sizing: border-box;
        .item {
          width: 20%;
          height: 78px;
          .good {
            width: 55px;
            height: 55px;
            margin: 0 auto;
            display: block;
          }
          .title {
            font-size: 12px;
            padding: 5px 0 0 3px;
            text-align: center;
          }
        }
      }
      .title1 {
        width: 375px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        margin-top: 10px;
      }
      .newPeople {
        width: 375px;
        height: 219px;
        display: flex;
        justify-content: center;
        .left {
          width: 171px;
          height: 217px;
          background: #f9e9cf;
          margin-right: 3px;
          .left-text {
            margin: 20px 0 0 15px;
          }
          img {
            width: 129px;
            height: 128px;
            display: block;
            margin: 20px auto;
          }
        }
        .right {
          width: 171px;
          height: 217px;
          display: flex;
          flex-direction: column;
          .shang {
            width: 171px;
            height: 107px;
            background: rgb(250, 237, 239);
            margin-bottom: 3px;
            position: relative;
            .shang-text {
              margin: 15px 0 0 15px;
              p {
                margin-bottom: 5px;
              }
              span {
                font-size: 14px;
                color: #bbb;
              }
            }
            img {
              width: 100px;
              height: 100px;
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
          .xia {
            width: 171px;
            height: 107px;
            background: rgb(251, 251, 207);
            position: relative;
            .xia-text {
              margin: 15px 0 0 15px;
              .xia-text2 {
                background: #bbb;
                opacity: 0.7;
                width: 68px;
                height: 20px;
                font-size: 14px;
                color: white;
                margin-top: 5px;
                text-align: center;
                line-height: 20px;
              }
            }
            img {
              width: 100px;
              height: 100px;
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
        }
      }
      .title2 {
        width: 375px;
        height: 50px;
        margin: 20px 0 0 15px;
        line-height: 50px;
      }
      .hotSale {
        width: 375px;
        height: 305px;
        .hot-top {
          width: 100%;
          display: flex;
          justify-content: center;
          .item {
            width: 170px;
            height: 100px;
            background: rgb(234, 240, 243);
            margin: 0 3px;
            position: relative;
            .top-text {
              margin: 30px 0 0 10px;
              font-size: 14px;
            }
            img {
              width: 100px;
              height: 100px;
              position: absolute;
              right: 0;
              top: 0;
            }
          }
        }
        .hot-bottom {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 5px 10px;
          box-sizing: border-box;
          .item {
            width: 82.5px;
            height: 90px;
            background: #eee;
            margin: 3px;
            .bottom-text {
              font-size: 12px;
              margin: 7px 10px;
            }
            img {
              width: 60px;
              height: 60px;
              display: block;
              margin: 0px auto;
            }
          }
        }
      }
      .lastTwo {
        width: 375px;
        height: 155px;
        display: flex;
        justify-content: center;
        margin: 10px 0;
        .lastTwo-zuo {
          width: 171.5px;
          height: 132px;
          background-image: url("https://yanxuan.nosdn.127.net/static-union/1665495820b48c01.png?imageView&thumbnail=343x264");
          background-color: #eee;
          background-size: 100% 100%;
          margin-right: 5px;
          .left-text {
            margin: 10px 0 0 10px;
          }
        }
        .lastTwo-you {
          width: 171.5px;
          height: 132px;
          background-color: #eee;
          .right-text {
            margin: 10px 0 0 10px;
            p {
              margin-bottom: 3px;
            }
            span {
              font-size: 12px;
              color: orange;
            }
          }
          img {
            width: 75px;
            height: 75px;
            display: inline-block;
            margin: 10px 0 0 5px;
          }
        }
      }
      .footer {
        width: 375px;
        height: 122px;
        background: #414141;
        position: relative;
        .button {
          position: absolute;
          top: 15px;
          left: 75px;
          .btn1,
          .btn2 {
            margin: 10px;
            width: 86px;
            height: 31px;
            color: #ccc;
            border-color: #ccc;
            background: #414141;
          }
        }
        .text {
          font-size: 12px;
          color: #aaa;
          text-align: center;
          position: absolute;
          top: 80px;
          left: 75px;
          .text2 {
            margin-top: 5px;
          }
        }
      }
    }
  }
  .topUp {
    position: fixed;
    right: 25px;
    bottom: 70px;
    width: 40px;
    height: 40px;
    z-index: 999;
    border-radius: 50%;
  }
}
</style>
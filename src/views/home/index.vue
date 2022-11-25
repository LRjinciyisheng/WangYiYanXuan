<template>
  <div class="home">
    <!-- 顶部搜索框 -->
    <div class="top">
      <img src="./images/logo.png" class="logo" alt="" />
      <el-input
        class="w-50 m-2 ipt"
        placeholder="搜索商品"
        :prefix-icon="Search"
      />
      <el-button plain class="btn">登录</el-button>
    </div>
    <!-- 文字导航栏 选型卡 -->
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="推荐" name="推荐"> </el-tab-pane>
      <el-tab-pane
        label="居家生活"
        :name="item"
        v-for="item in 10"
        :key="item"
      ></el-tab-pane>
    </el-tabs>
    <!-- 滚动视图 -->
    <div class="scroll">
      <div v-show="activeName == '推荐'">
        <!-- 轮播 -->
        <el-carousel class="swiper">
          <el-carousel-item v-for="item in 4" :key="item" class="item">
            <img src="./images/1.jpg" class="banner" alt="" />
          </el-carousel-item>
        </el-carousel>
        <!-- 三个图标 -->
        <div class="icons">
          <div class="item">
            <img src="./images/1.jpg" class="icon" alt="" />
            <span class="title">网易自营品牌</span>
          </div>
          <div class="item">
            <img src="./images/1.jpg" class="icon" alt="" />
            <span class="title">30天无忧退款</span>
          </div>
          <div class="item">
            <img src="./images/1.jpg" class="icon" alt="" />
            <span class="title">48小时快速退款</span>
          </div>
        </div>
        <!-- 商品分类小图 -->
        <div class="goods">
          <div class="item" v-for="item in 10" :key="item">
            <a href="javascript:;">
              <img src="./images/1.jpg" class="good" alt="" />
              <p class="title">新品首发</p>
            </a>
          </div>
        </div>
        <!-- 新人专享 -->
        <h3 class="title1">- 新人专享礼 -</h3>
        <div class="newPeople">
          <div class="left">
            <div class="left-text">新人专享礼包</div>
            <img src="./images/1.jpg" alt="" />
          </div>
          <div class="right">
            <div class="shang">
              <div class="shang-text">
                <p>福利社</p>
                <span>今日特价</span>
              </div>
              <img src="./images/1.jpg" alt="" />
            </div>
            <div class="xia">
              <div class="xia-text">新人拼团</div>
              <img src="./images/1.jpg" alt="" />
            </div>
          </div>
        </div>
        <!-- 类目热销 -->
        <h3 class="title2">类目热销榜</h3>
        <div class="hotSale">
          <div class="hot-top">
            <div class="item" v-for="item in 2" :key="item">
              <div class="top-text">服饰鞋包</div>
              <img src="./images/1.jpg" alt="" />
            </div>
          </div>
          <div class="hot-bottom">
            <div class="item" v-for="item in 7" :key="item">
              <div class="bottom-text">居家生活榜</div>
              <img src="./images/1.jpg" alt="" />
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
            <img src="./images/1.jpg" alt="" />
            <img src="./images/1.jpg" alt="" />
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
      <Good v-show="activeName != '推荐'"></Good>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Good from "./good/index.vue";
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
const activeName = ref("推荐");
</script>

<style scoped lang='less'>
@color: #dd1a21;
/deep/ .el-tabs__item.is-top.is-active {
  color: @color;
}
/deep/ .el-tabs__active-bar.is-top {
  background: @color;
}
a {
  text-decoration: none;
  color: #000;
}
.home {
  height: 100%;
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .scroll {
    height: 580px;
    overflow: scroll;
    margin-top: -15px;
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
      display: flex;
      justify-content: space-around;
      align-items: center;
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
      .item {
        width: 20%;
        height: 78px;
        .good {
          width: 55px;
          height: 55px;
        }
        .title {
          font-size: 12px;
          padding: 5px 0 0 3px;
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
          background: rgb(221, 235, 241);
          margin: 0 3px;
          position: relative;
          .top-text {
            margin: 30px 0 0 10px;
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
</style>
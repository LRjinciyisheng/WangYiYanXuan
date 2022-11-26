<template>
  <div class="wapper">
    <!-- 轮播部分 -->
    <el-carousel
      indicator-position="none"
      height="375px"
      interval="2000"
      loop
      pause-on-hover="true"
      arrow="hover"
    >
      <el-carousel-item v-for="item in 5" :key="item">
        <img
          src="https://yanxuan-item.nosdn.127.net/6d92dd67bc9d63e1a2a99e4ce8bb55f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt=""
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <!-- 特价倒计时 -->
    <div class="content">
      <div class="banner">
        <div class="left">
          <span>特价</span>
          <span>|</span>
        </div>
        <div class="center">距结束</div>
        <div class="right">1天13小时</div>
      </div>
      <div class="currentPrice">
        <span>￥117</span>
        <span class="price1">到手￥92</span>
      </div>
    </div>
    <!-- 详细介绍 -->
    <div class="detailBaseInfo">
      <div class="info">
        <span>高级摩登法式 真丝无钢圈性感三角杯衣服</span>
      </div>
      <div class="comment">
        <div class="preLogo">
          <span class="num">99.6%</span>
          <span class="rem">好评率</span>
        </div>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="title">
        <img
          src="https://yanxuan-item.nosdn.127.net/37d2a5d56f55036e9ef09b6d51190f05.png"
          alt=""
        />
        <span>金三塔</span>
      </div>
      <div class="desc">
        <p>推荐理由</p>
        <div class="reason">
          <div class="item" v-for="(item, index) in 3" :key="index">
            <i>{{ index + 1 }}</i>
            <span>桑蚕丝缎面柔滑肤感，释放甜蜜享受</span>
          </div>
        </div>
      </div>
      <div class="postage">
        <span>邮费:单件包邮</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <div class="box"></div>
    <!-- 规格数量 -->
    <div class="innerList">
      <ul class="list">
        <li class="item">
          <div class="num">
            <span>请选择规格数量</span>
            <i class="iconfont icon-arrow-right"></i>
          </div>
        </li>
        <li class="limit item border">
          <span>限制:该商品不可使用优惠券</span>
        </li>
        <li class="border item">
          <div class="num">
            <span>配送:请选择配送地址</span>
            <i class="iconfont icon-arrow-right"></i>
          </div>
        </li>
        <li class="serve">
          <span>服务:</span>
          <ul class="item1">
            <li class="dot">商家入驻</li>
            <li class="dot">商家入驻</li>
            <li class="dot">商家入驻</li>
            <li class="dot">商家入驻</li>
            <li class="dot">商家入驻</li>
            <li class="dot">商家入驻</li>
            <li class="dot">商家入驻</li>
          </ul>
          <i class="iconfont icon-arrow-right"></i>
        </li>
      </ul>
    </div>
    <!-- 分割线盒子 -->
    <div class="box"></div>
    <!-- 评价 -->
    <div class="component-wrapper">
      <div class="user-com">
        <span>用户评价(18801)</span>
        <div class="preLogo">
          <span class="num">99.6%</span>
          <span class="rem">好评率</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="avatar">
        <img
          src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png?type=webp&imageView&quality=75&thumbnail=60x60"
          alt=""
        />
        <span>用*****8</span>
        <i class="iconfont icon-vip"></i>
      </div>
      <div class="data1">
        <span class="time">2021-06-29&nbsp;18:20:03</span>
        <p>豆沙色:XL</p>
      </div>
      <div class="inner">
        非常好呦，斜带改直带了大码下维不勒，舒适透气有高级感，还有真丝认证，值得拥有
      </div>
      <div class="pric">
        <img
          src="https://yanxuan-item.nosdn.127.net/6d92dd67bc9d63e1a2a99e4ce8bb55f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt=""
        />
      </div>
    </div>
    <!-- 分割线盒子 -->
    <div class="box"></div>
    <!-- 品牌金三塔介绍 -->
    <div class="brand">
      <div class="left">
        <img
          src="https://yanxuan-item.nosdn.127.net/37d2a5d56f55036e9ef09b6d51190f05.png"
          alt=""
        />
      </div>
      <div class="right">
        <div class="title">
          <span>金三塔</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
        <div class="desc">
          金三塔真丝，专注真丝95年，坚持以高品质真丝为原料，致力于打造舒适健康的品质生活。
        </div>
        <div class="qualification">
          查看资质
          <i class="iconfont icon-tanhao"></i>
        </div>
      </div>
    </div>
    <!-- 分割线盒子 -->
    <div class="box"></div>
    <div class="attr">
      <div class="goods-attr">商品参数</div>
      <div class="info">
        <div class="goods-item" v-for="(item, index) in 8" :key="index">
          <span class="left">版型</span>
          <span>宽松</span>
        </div>
      </div>
    </div>
    <!-- 商品图片详情 -->
    <div class="detail-img">
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/b590649c17fc123c5658648d410dea6b.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/784795492278f765950f8a827b7fc12f.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/5be88a8c682becf03dd2aa2d4d34224e.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/ea1020ecb792791f0463a38bc6dbecc1.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/a471afa97207902998eb02faf7346f79.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/542c7444b770799b686c9876a182dbbc.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/01a2816a8700afe8396208f888879245.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/63f918529688a523f8876ea3c739cf4d.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/3e9501bc795c62f1746fad76d8ad96d0.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/36457255555130dda6e0f169ad5ac302.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/47b3b14f0cdb937d77cd117b65351481.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
      <p class="img2">
        <img
          src="https://yanxuan-item.nosdn.127.net/1750cd321d658ada43cc026c873beea7.jpg?quality=75&type=webp&imageView"
          alt=""
        />
      </p>
    </div>
    <!-- 底部固定按钮 -->
    <div class="btn-grounp">
      <button class="left">
        <i class="iconfont icon-iconzhucetouxiang"></i>
      </button>
      <button class="middle">立即购买</button>
      <button class="right">加入购物车</button>
    </div>
    <!-- 回到顶部按钮 -->
    <div class="backtop" style="display:none" @click="back">
      <i class="iconfont icon-shangfan"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // 按钮显示与隐藏回调
  showOrHidden();
});
// 按钮显示与隐藏回调
const showOrHidden = () => {
  window.onscroll = () => {
    if (document.documentElement.scrollTop + document.body.scrollTop > 300) {
      document.querySelector(".backtop").style.display = "block";
    } else {
      document.querySelector(".backtop").style.display = "none";
    }
  };
};
// 回到顶部回调
const back = () => {
  let time = 500;
  let itemTime = 20;
  let offset = document.documentElement.scrollTop + document.body.scrollTop;
  let itemOffset = offset / (time / itemTime);
  let timer = setInterval(() => {
    offset -= itemOffset;
    if (offset <= 0) {
      clearInterval(timer);
    }
    //  将计算后的新位置  设置给滚动条
    document.documentElement.scrollTop = offset;
    document.body.scrollTop = offset;
  }, itemTime);
};
</script>

<style lang="less">
.wapper {
  width: 375px;
  // height: 19999px;

  .content {
    width: 375px;
    height: 74px;
    background: rgb(250, 30, 50);
    .banner {
      width: 375px;
      height: 25px;
      padding-left: 8px;
      line-height: 25px;
      box-sizing: border-box;
      .left,
      .center,
      .right {
        float: left;
        font-size: 12px;
        color: #fff;
      }
      .left {
        margin-right: 5px;

        span {
          margin: 0 2px;
        }
      }
    }
    .currentPrice {
      position: relative;
      width: 375px;
      height: 49px;
      line-height: 52px;
      text-align: left;
      font-size: 28px;
      font-weight: 700;
      color: #fff;
      .price1 {
        display: inline-block;
        font-size: 16px;
        height: 29px;
        line-height: 29px;
        background: #fff;
        color: rgb(250, 30, 50);
        border-radius: 50px;
        margin-left: 5px;
      }
    }
  }
  .detailBaseInfo {
    width: 360px;
    height: 217px;
    padding: 15px 0 15px 15px;
    .info {
      float: left;
      width: 280px;
      font-size: 18px;
      font-weight: 700;
      text-align: left;
      line-height: 22px;
      margin-right: 10px;
    }
    .comment {
      display: flex;
      justify-content: center;
      align-items: center;

      .preLogo {
        display: flex;
        flex-flow: column;
        margin-right: 5px;
        .num {
          color: rgb(250, 30, 50);
        }
        .rem {
          font-size: 12px;
          color: #777;
        }
      }
    }
    .title {
      margin-top: 20px;
      text-align: left;
      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
        color: #777;
      }
    }
    .desc {
      text-align: left;
      line-height: 20px;
      margin-top: 10px;
      p {
        font-size: 12px;
      }
      .reason {
        margin-top: 10px;
        .item i {
          display: inline-block;
          text-align: center;
          width: 12px;
          height: 12px;
          line-height: 15px;
          border: 2px solid rgb(250, 30, 50);
          border-radius: 50%;
          color: rgb(250, 30, 50);
          margin-right: 5px;
        }
        .item span {
          font-size: 12px;
          color: #333;
        }
      }
    }
    .postage {
      width: 345px;
      height: 52px;
      margin: 14px 0 0 14px;
      line-height: 52px;
      text-align: left;
      i {
        float: right;
        margin-right: 10px;
      }
    }
  }
  .box {
    width: 375px;
    height: 10px;
    background: #f4f4f4;
  }
  .list {
    text-align: left;
    padding-left: 15px;
    .item {
      height: 52px;
      line-height: 52px;
    }
    i.icon-arrow-right {
      float: right;
      padding-right: 10px;
    }
    .border {
      border-top: 3px solid #ccc;
    }
    .serve {
      border-top: 1px solid #ccc;
      height: 72px;
      padding-top: 10px;
      display: flex;
      span {
        width: 40px;
        margin-right: 5px;
      }
      .item1 {
        width: 278px;
        text-align: left;
        margin: 0 20px 8px 0;
        font-size: 12px;
        .dot {
          float: left;
          width: 50px;
          margin: 5px;
        }
      }
    }
  }
  .component-wrapper {
    height: 280px;
    .user-com {
      height: 49px;
      line-height: 49px;
      border-bottom: 1px solid #ccc;
      padding: 0 15px;
      span {
        float: left;
      }
      .preLogo {
        float: right;
        .num {
          color: rgb(250, 30, 50);
        }
        i {
          margin-left: 5px;
        }
      }
    }
    .avatar {
      height: 49px;
      line-height: 49px;
      text-align: left;
      padding-left: 15px;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 5px;
        vertical-align: middle;
      }
      span {
        margin-right: 5px;
      }
    }
    div.data1 {
      overflow: hidden;
      margin-top: 9px;
      padding-left: 15px;
      font-size: 12px;
      color: #777;
      .time {
        float: left;
      }
      p {
        float: left;
        margin-left: 10px;
      }
    }
    .inner {
      padding: 0 15px;
      margin-top: 10px;
      line-height: 20px;
      font-size: 14px;
      text-align: left;
    }
    .pric img {
      padding-left: 15px;
      margin-top: 10px;
      float: left;
      width: 72px;
      height: 80px;
      text-align: left;
    }
  }
  .brand {
    height: 122px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    .left {
      width: 48px;
      height: 48px;
      margin-right: 5px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .right {
      height: 107px;
      padding-left: 5px;
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        span {
          flex: 1;
          text-align: left;
          font-weight: 700;
        }
      }
      .desc {
        width: 260px;
        font-size: 12px;
        text-align: left;
        line-height: 20px;
        margin-bottom: 5px;
      }
      .qualification {
        font-size: 12px;
        color: #777;
        text-align: left;
        margin-right: 5px;
      }
    }
  }
  .attr {
    padding: 15px;
    text-align: left;
    margin-bottom: 20px;
    .goods-attr {
      height: 42px;
      line-height: 42px;
      font-size: 14px;
    }
    .info {
      list-style: none;
      .goods-item {
        height: 42px;
        line-height: 42px;
        border-top: 1px dashed #777;
        font-size: 12px;
        color: #777;
        .left {
          display: inline-block;
          width: 72px;
        }
      }
    }
  }
  .detail-img {
    img {
      width: 100%;
    }
  }
  .detail-img .img1 img {
    height: 63px;
  }
  .detail-img .img2 {
    height: 100px;
    img {
      height: 100px;
    }
  }
  .btn-grounp {
    height: 52px;
    display: flex;
    position: fixed;
    bottom: 0;
    // overflow-y: scroll;
    button {
      border: 1px solid #ccc;
      background: #fff;
      font-size: 14px;
    }
    .left {
      width: 78px;
    }
    .middle {
      width: 148px;
    }
    .right {
      width: 148px;
      background: #dd1a21;
      border: 1px solid #dd1a21;
      color: #fff;
    }
  }
  .backtop {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    background: #eee;
    position: fixed;
    bottom: 100px;
    right: 50px;
  }
}
</style>

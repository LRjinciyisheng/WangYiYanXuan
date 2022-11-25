<template>
  <div class="box">
    <div class="top">
      <div class="left">
        <p class="name">小强哦</p>
        <span>默认</span>
      </div>
      <div class="right">
        <div>
          <p class="phone">186****1765</p>
          <p class="address">北京昌平宏福苑同学公寓110</p>
        </div>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <ul class="middle">
      <li>
        <div class="m-box">
          <i class="iconfont icon-fangkuang tubiao"></i>
          <span class="yu-e">余额:￥0.00</span>
          <span><i class="iconfont icon-i"></i></span>
        </div>
      </li>
    </ul>
    <ul class="bottom">
      <li class="item" v-for="item in 4">
        <span class="sum">商品合计</span>
        <span class="price">￥129.00</span>
      </li>
    </ul>
    <div class="package">
      <i>包裹1</i>
      <span>支付后,预计48小时内发货</span>
    </div>
    <div class="detail">
      <img
        src="https://yanxuan-item.nosdn.127.net/e8a1986d01e423ed509f8324f3cdb1e0.png?imageView&quality=35&thumbnail=146x146"
        alt=""
      />
      <div class="box">
        <div class="inner">
          <p class="text"><i>特价</i> 高级摩登法式&nbsp;真丝衣服衣服</p>
          <span>x1</span>
        </div>

        <span class="size">灰色:L</span>
        <div class="bottom">
          <p class="price">￥117<span>￥129.00</span></p>
        </div>
        <p class="tip">部分服务不可用<i class="iconfont icon-tanhao"></i></p>
      </div>
    </div>
    <div class="clause">
      <span class="iconfont icon-fuxuankuang"></span>
      <i>我已同意</i>
      <a href="#">《网易严选服务协议》</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 375px;
  height: 75px;
}
.top {
  width: 375px;
  height: 75px;
  background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-67880192dc.png?imageView&type=webp)
    repeat-x;
  background-color: #f4f4f4;
  background-size: 40px 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left .name {
    margin-bottom: 5px;
  }
  .left span {
    width: 30px;
    height: 18px;
    border: 3px solid #dd1a21;
    color: #dd1a21;
    border-radius: 5px;
    font-size: 12px;
  }
  .right {
    display: flex;
    justify-content: flex-start;
    .phone {
      display: flex;
      margin-bottom: 5px;
    }
    .address {
      font-size: 12px;
      color: #666;
    }

    i {
      width: 16px;
      height: 32px;
      line-height: 32px;
      padding-left: 60px;
    }
  }
}
.middle {
  width: 375px;
  height: 52px;
  background-color: #f4f4f4;
  margin-bottom: 10px;
  li {
    width: 360px;
    height: 52px;
    .m-box {
      line-height: 52px;
      padding: 0 15px 0 12.5px;
      color: #666;
      .tubiao {
        margin-right: 5px;
      }
      .tubiao,
      .yu-e {
        float: left;
      }
      span i {
        float: right;
      }
    }
  }
}
.bottom {
  width: 375px;
  background-color: #f4f4f4;
  margin-bottom: 10px;
  .item {
    display: relative;
    height: 52px;
    line-height: 52px;
    border-bottom: 3px solid #fff;
    padding: 0 15px 0 12.5px;
    .sum {
      float: left;
    }
    .price {
      float: right;
    }
  }
}
.package {
  width: 375px;
  height: 47px;
  line-height: 47px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #fff;
  i {
    float: left;
    margin-left: 15px;
  }
  span {
    float: left;
    font-size: 12px;
    color: #666;
    margin-left: 5px;
  }
}
.detail {
  height: 123px;
  background: #f4f4f4;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  .box {
    width: 225px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: start;
    .inner {
      display: flex;
      .text {
        text-align: left;
        line-height: 20px;
        margin-bottom: 5px;
        i {
          color: #f48f18;
        }
      }
      span {
        padding-left: 10px;
      }
    }
    .size {
      margin-bottom: 5px;
      font-size: 12px;
      color: #666;
    }
    .price {
      text-align: left;
      font-size: 14px;
      span {
        text-decoration: line-through;
        color: #888;
      }
    }
    .tip {
      font-size: 12px;
      color: #888;
    }
  }
}
.clause{
  float: left;
  margin-left: 15px;
  font-size: 12px;
  color: #888;
  margin-top: 10px;
  i{
    margin-left: 5px;
  }
  a{
    text-decoration: none;
     color: #333;
  }
}
</style>

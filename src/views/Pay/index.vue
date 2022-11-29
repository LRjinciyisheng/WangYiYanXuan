<template>
  <div class="box">
    <div class="top">
      <div class="left">
        <p class="name">{{userAddressList.userName}}</p>
        <span>默认</span>
      </div>
      <div class="right">
        <div>
          <p class="phone">{{userAddressList.phone}}</p>
          <p class="address">{{userAddressList.address}}</p>
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
      <li class="item" v-for="(item,index) in 3" :key="index">
        <span class="sum">商品合计</span>
        <span class="price">￥129.00</span>
      </li>
    </ul>
    <div class="package">
      <i>包裹</i>
      <span>支付后,预计48小时内发货</span>
    </div>
    <div class="detail" v-for="(item,index) in payInfo.detailArrayList" :key="index">
      <img
        :src="item.imgUrl?item.imgUrl:'http://47.93.148.192:8080/group1/M00/02/DC/rBHu8mGyQOKATYA2AABTVO9hAHc987.jpg'"
        alt=""
      />
      <div class="box">
        <div class="inner">
          <p class="text"><i>特价</i> {{item.skuName?item.skuName:' 华为智慧屏 SE 55英寸 超薄电视 超高清智能液晶电视机 HD55DESA 2+16GB '}}</p>
          <span>X{{item.skuNum?item.skuNum:'4'}}</span>
        </div>

        <span class="size">银灰色:5.8英寸</span>
        <div class="bottom">
          <p class="price">{{item.orderPrice?item.orderPrice:'￥8888.00'}}<span>￥11290.00</span></p>
        </div>
        <p class="tip">部分服务不可用<i class="iconfont icon-tanhao"></i></p>
      </div>
      <!-- {{payInfo.detailArrayList[0].imgUrl}} -->
    </div>
    <div class="clause">
      <span class="iconfont icon-fuxuankuang"></span>
      <i>我已同意</i>
      <a href="#">《网易严选服务协议》</a>
    </div>
  </div>
</template>

<script setup>
import { reqTradeInfo } from "@/api/pay/index";
import { onMounted, reactive, ref } from "vue";

let payInfo = ref({
  userAddressList:[
    {
      userName:'修黄',
      phone:'137****4586',
      address:'北京市昌平区温度水池旁小火洼巷110室'
    }
  ],
  // constList:[
  //   {
  //     name:'商品合计',
  //     pric:'￥10587.00'
  //   },
  //   {
  //     name:'邮费',
  //     pric:'￥0.00'
  //   },
  //   {
  //     name:'活动优惠',
  //     pric:'￥11993'
  //   },
  // ]

});
let userAddressList = payInfo.value.userAddressList[0];
//  页面加载触发onMounted
onMounted(() => {
  getPayInfo();
});

const getPayInfo = async () => {
  try {
    let result = await reqTradeInfo();
    
    payInfo.value = result;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};
</script>

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
  margin-bottom: 10px;
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
    font-size: 12px;
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
.clause {
  float: left;
  margin-left: 15px;
  font-size: 12px;
  color: #888;
  margin-top: 10px;
  i {
    margin-left: 5px;
  }
  a {
    text-decoration: none;
    color: #333;
  }
}
</style>

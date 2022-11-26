<template>
  <div class="box">
    <div class="container" style="margin: 10px">
      <!-- 顶部的标题 -->
      <div class="top">
        <div class="left">
          <el-image style="width: 19px; height: 19px" :src="url"></el-image>
          <h3>单件包邮</h3>
        </div>
        <p class="text">以下商品已免邮费</p>
      </div>
      <!-- 中间部分商品 -->
      <div class="center">
        <div class="left">
          <img
            style="width: 19px; height: 19px"
            src="https://yanxuan.nosdn.127.net/15997181361146549.png"
            alt=""
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/e8a1986d01e423ed509f8324f3cdb1e0.png?imageView&quality=35&thumbnail=146x146"
            alt=""
          />
        </div>
        <div class="right">
          <p class="text"><i>特价</i> 高级摩登法式真丝内衣服哦哦哦</p>
          <button class="btn">
            灰色:L<img
              class="jiantou"
              src="https://yanxuan.nosdn.127.net/static-union/16584576892be242.png"
              alt=""
            />
          </button>
          <div class="bottom">
            <p class="jiage">￥117</p>
            <button class="btn1"><i>-</i>1<i>+</i></button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <img
          src="https://yanxuan.nosdn.127.net/static-union/1660720775214e32.png"
          alt=""
        />
        不可用券
      </div>
    </div>
    <div class="footer">
      <img src="https://yanxuan.nosdn.127.net/15997181361146549.png" alt="" />
      <span>全选</span>
      <span class="heji">合计:￥117</span>
      <button>结算</button>
    </div>
  </div>
</template>

<script setup>
const url = "https://yanxuan.nosdn.127.net/15997181361146549.png";
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;

}
.container {
  position: relative;
  width: 90%;
  height: 100%;
  padding: 10px;
  background: #f4f4f4;
  border-radius: 20px;
}
.top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}
.top .left {
  display: flex;
}
.top .left h3 {
  margin-left: 5px;
  font-weight: 700;
}
.top .text {
  font-size: 12px;
}
.center {
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center .left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center .left img {
  width: 90px;
  height: 90px;
  display: block;
}
.center .right {
  margin-left: 5px;
}
.center .right .text {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
.center .right .text i {
  color: #fa1e32;
}
.center .right .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 18px;
  background: #f4f4f4;
  border: 1px solid #ccc;
  color: #7f7f7f;
  font-size: 12px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.center .right .btn img {
  width: 9px;
  height: 5px;
  margin-left: 5px;
}
.center .right .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center .right .jiage {
  font-weight: 700;
  color: #fa1e32;
}
.center .right .btn1 {
  width: 68px;
  height: 28px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
.bottom {
  font-size: 12px;
  color: #7f7f7f;
  display: flex;
}
.bottom img {
  width: 10px;
  height: 10px;
  margin-right: 3px;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #f4f4f4;
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer img {
  width: 19px;
  height: 19px;
}
.footer span {
  font-size: 14px;
  color: #666;
}
.footer .heji {
  color: #dd1a21;
}
.footer button {
  width: 112px;
  height: 36px;
  border-radius: 20px;
  background: #dd1a21;
  color: #fff;
  border: transparent;
}
</style>

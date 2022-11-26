<template>
  <div>
    <ul class="headline">
      <li>综合</li>
      <li>
        <span>价格</span>
        <span class="ImgArrows">
          <el-icon :size="10"><ArrowUp /></el-icon>
          <el-icon :size="10"><ArrowDown /></el-icon>
        </span>
      </li>
      <li>分类</li>
    </ul>
    <ul class="productCatalogue">
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/c711543e9ffbc37d3eaa83ca2187f1c2.png?type=webp&imageView&quality=65&thumbnail=330x330"
        />

        <span class="headline_title">四季通用，卡通儿童袜子</span>

        <b>
          <i>￥</i>
          <span>28</span>
          <span class="originalCost">￥29.9</span>
        </b>
        <div class="specialOffer">
          <span class="specialOffer-left">特价</span>
          仅剩1天
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reqSearch } from "@/api/search";
import { onMounted } from "vue";
const props = defineProps({
  searchVal: {
    type: Number,
    required: true,
  }
})
onMounted(() => {
  getReqSearch();
});

const getReqSearch = async () => {
  try {
    const res = await reqSearch({
      keyword:props.searchVal,
      size:40
    });
    console.log(res,'66获取数据成功了');
  } catch (error) {
    console.log(error,'33获取数据失败~~');
  }
};
</script>

<style lang="less" scoped>
/*商品标题*/
.headline {
  display: flex;
  justify-content: space-around; /*元素在主轴上的对齐方式——平分剩余空间*/
  /*flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性。row从左到右，nowrap不换行*/
  background: rgb(244, 242, 242);
  padding: 10px 0;
  border-bottom: 2px solid rgb(189, 187, 187);
  li {
    text-align: center;
    flex-wrap: nowrap; /*不换行*/
    display: flex;
    align-items: center; /*侧轴上的子元素（单行）—— 垂直居中对齐*/
  }
  .ImgArrows {
    background: skyblue;
    display: flex;
    flex-direction: column; /*设置主轴为y，从上到下排列*/
    margin-left: 3px;
    .el-icon,
    svg {
      height: 0.8em;
    }
  }
}
/*商品列表*/
.productCatalogue {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;
  flex-wrap: wrap;

  li {
    background: skyblue;
    border-radius: 10px;
    padding: 6px;
    width: 100%;
    box-sizing: border-box;
    img {
      width: 100%;
      border-radius: 10px;
      margin: auto;
      display: block;
    }
    .headline_title {
      display: block;
      margin: 8px 0;
    }
    b {
      i {
        font-weight: 600;
        font-size: 14px;
        color: rgb(223, 6, 6);
      }
      span {
        font-weight: 600;
        color: rgb(223, 6, 6);
        font-size: 20px;
      }
      .originalCost {
        font-size: 14px;
        color: rgb(122, 122, 122);
        text-decoration: line-through;
        font-weight: 500;
      }
    }

    .specialOffer {
      margin-top: 8px;
      background: rgb(252, 217, 226);
      color: rgb(255, 0, 0);
      font-weight: 600;
      font-size: 12px;
      padding: 4px;
      border-radius: 16px;

      .specialOffer-left {
        background: red;
        color: white;
        border-radius: 16px;
        padding: 2px 4px;
      }
    }
  }
}
</style>

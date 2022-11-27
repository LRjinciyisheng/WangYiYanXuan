<template>
  <div class="card">
    <!-- 最顶上图片 -->
    <img class="imgTop" src="../../../static/傻猫咪.jpg"/>
    <!-- 文字和分割线 -->
    <div class="kind"  v-for="it in 5">
      <span class="bigTitle">床品家纺</span>
      <el-divider border-style="solid"/>
      <div class="showAll">
        <div class="showOne" v-for="item in 8">
          <img src="../../../static/傻猫咪.jpg"/>
          <span class="title">可爱</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
//引入bus
import bus from '../../../bus/bus'
import { ref, onMounted,  reactive } from 'vue'
//获取小仓库
import { useCategoryStore } from '../../../stores/category';
let categoryStore = useCategoryStore();

//挂载完毕的钩子
onMounted(() => {
  bus.on('sendCategoryId', () => {

  })
})





</script>

<style scoped lang="less">
.card{
  width: 264px;
  height: 100%;
  .imgTop{
    width: 260px;
    height: 96px;
    margin: 12px 12px 0 0;
  }
  .kind{
    .bigTitle{
      font-weight: 800;
      display: block;
      margin-top: 15px;
    }
    ::v-deep .el-divider--horizontal{
      margin: 12px 0;
      padding: 4px;
      width: 95%;
    }
    .showAll{
      width: 264px;
      height: 100%;
      display: flex;
   
      align-items: center;
      flex-wrap: wrap;
      .showOne{
        display: flex;
        flex-direction: column;

        img{
          width: 72px;
          height: 72px;
          padding: 5px;
          box-sizing: border-box;
          margin: 0 8px;
        }
        .title{
          display: block;
          width: 72px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="category">
    <el-tabs :tab-position="tabPosition" style="border: 0" class="demo-tabs">
      <el-tab-pane class="el-tabs-content" label="为你推荐" v-for="item in 10">
        <Card></Card>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
//引入Card组件
import Card from './Card/card.vue';
//获取小仓库
import { useCategoryStore } from '../../stores/category';
let categoryStore = useCategoryStore();

//设置tab的方位
let tabPosition = ref('left')

// //组件挂载完毕发请求
// onMounted(() => {
//   //通知pinia仓库发请求

// })


</script>

<style scoped lang="less">
.category{
  width: 375px;
  height: 667px;

}
.demo-tabs{
  width: 375px;
  height: 100%;

}
.demo-tabs .el-tabs-content {
  width: 279px;
  height: 667px;
  font-size: 14px;
  overflow: scroll;
}
::v-deep .el-tabs__active-bar.is-left{
  right: 95px;
}
::v-deep .el-tabs__active-bar {
  background-color: #ab2b2b;
}
::v-deep .el-tabs__item{
  margin-top: 5px;
}
::v-deep .el-tabs__item.is-active{
  color: #ab2b2b;
}




</style>
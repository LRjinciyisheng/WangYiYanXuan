<template>
  <div class="category">
    <el-tabs :tab-position="tabPosition" style="border: 0" class="demo-tabs">
      <el-tab-pane class="el-tabs-content" label="为你推荐" v-for="item in 10">
        <Card></Card>
      </el-tab-pane>

    </el-tabs>


    <!-- <Card></Card> -->
  </div>
</template>

<script setup lang="ts">
import Card from './Card/card.vue';
import { ref } from 'vue'

const tabPosition = ref('left')

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
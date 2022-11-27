<template>
  <div class="category">
    <el-tabs :tab-position="tabPosition" style="border: 0" class="demo-tabs">
      <el-tab-pane @click="changeScene(item.id)" class="el-tabs-content" :label="item.name" v-for="item in categoryL1List">
        <Card></Card>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script setup lang="ts">
//引入bus
import bus from '../../bus/bus';
import { ref, onMounted,  reactive } from 'vue'
//引入Card组件
import Card from './Card/card.vue';
//获取小仓库
import { useCategoryStore } from '../../stores/category';
let categoryStore = useCategoryStore();

//设置tab的方位
let tabPosition = ref('left')

//发请求需要携带的query参数
let timestamp = ref(1669449180100);

let categoryL1List =  ref([]);

//组件挂载完毕发请求
onMounted(() => {
  //通知pinia仓库发请求 拿刷新后的展示的tab数据 可以把categoryId传给card
  getRecomAndCate();
  //
})

//获取推荐和商品分类的数据
const getRecomAndCate = async () => {
  try {
    let re = await categoryStore.getRecomAndCate(timestamp.value, '');
     //从仓库中取出一级分类的数据
   categoryL1List.value = categoryStore.categoryL1List;
   console.log(categoryL1List);
    
  } catch (error) {
    
  }
}

//点击tab时右边出现相应页面展示
const changeScene = (categoryId) => {
  bus.emit('sendCategoryId', categoryId);
} 




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
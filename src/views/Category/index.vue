<template>
  <div class="category">
    <!-- 搜索输入框 -->
    <div class="search-input">
      <el-input
        class="w-50 m-2"
        size="default"
        placeholder="搜索商品,共130551款好物"
        :prefix-icon="Search"
        @focus="focus1"
      />
    </div>
    <el-tabs @tab-click="tabClick" :tab-position="tabPosition" style="border: 0" class="demo-tabs">
      <el-tab-pane  class="el-tabs-content" :label="item.name" v-for="(item, index) in categoryL1List" :key="item.id">
        <Card v-if="onlyId == item.id" :current="current" :categoryGroupList="categoryGroupList"></Card>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
//引入路由
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick, reactive } from 'vue'
//引入Card组件
import Card from './Card/card.vue';
//获取小仓库
import { useCategoryStore } from '../../stores/category';
let categoryStore = useCategoryStore();
//创建路由对象
const router = new useRouter();

//设置tab的方位
let tabPosition = ref('left')
//发请求需要携带的query参数
let timestamp = ref(1669449180100);
//记录一级分类的数据
let categoryL1List =  ref([]);
//获取具体某个Id下面的二级分类数据 所要携带的Id 
let categoryId = ref(11);
//传给子元素的当前页面数据currentCategory
let current = ref({});
//定义一个element组件里面内置的获取id的变量
let onlyId = ref<number>(11);
//对应着左边一级分类的右边的商品数据
let categoryGroupList = ref([]);

//组件挂载完毕发请求
onMounted(() => {
  //通知pinia仓库发请求 拿刷新后的展示的tab数据 可以把categoryId传给card
  getRecomAndCate();
  // console.log(111);
  // console.log(router, 111);
})

//获取推荐和商品分类的数据
const getRecomAndCate = async () => {
  try {
   await categoryStore.getRecomAndCate(timestamp.value, categoryId.value);
  //从仓库中取出一级分类的数据
   categoryL1List.value = categoryStore.categoryL1List;
  //从仓库中取出当前页数据，为了拿右侧大图的数据
   current.value = categoryStore.currentCategory;
  //从仓库中取出//对应着左边一级分类的右边的商品数据
   categoryGroupList.value = categoryStore.categoryGroupList;

  //  console.log(categoryL2List.value);
  } catch (error) {
    
  }
}

const tabClick = (pane) => {
  let result:any =  categoryL1List.value.find(item => {
    return pane.props.label == item.name;
  });
  // console.log(pane);
  onlyId.value = result.id;
  categoryId.value = onlyId.value;
  getRecomAndCate();
  //切换tab标签时携带query参数
  router.push({
    path:"/category",
    query: {categoryId : result.id},
  });
}

const focus1 = () => {
    router.push({
      path:"/search"
    });
}  

</script>

<style scoped lang="less">
.category{
  width: 375px;
  height: 652px;

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
:deep(.el-tabs__active-bar.is-left){
  right: 95px;
}
:deep(.el-tabs__active-bar) {
  background-color: #ab2b2b;
}
:deep(.el-tabs__item){
  margin-top: 5px;
}
:deep(.el-tabs__item.is-active){
  color: #ab2b2b;
}
.search-input {
  background: rgb(248, 251, 253);
  display: flex;
  white-space: nowrap; //文字不换行
  padding: 15px;
  text-align: center;
}


</style>
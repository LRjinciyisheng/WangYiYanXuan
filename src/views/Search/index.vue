<template>



  <div class="search-container search-input-fixed">
    <div class="search-container-content">
      <!-- 搜索输入框 -->
      <div >
      <div class="search-input">
        <el-input
          v-model.enter="searchVal"
         
          size="default"
          :placeholder="placeholderText"
          :prefix-icon="Search"
          @keyup.enter.native="searcHistory"
          @input="handleSearchInput"
          clearable
          @clear="handleSearchClear"
        />
        <span v-if="!searchVal" @click="handleGoHome">取消</span>
      </div>
    </div>
      <div v-if="flag" >
        <div v-show="!searchVal">
          <!-- 搜索历史记录 -->
          <div class="search-history" v-if="searchH.length">
            <div class="search-history-text">
              <span>历史记录</span>
              <span @click="deleHistory">删除</span>
            </div>
            <ul class="search-history-list">
              <li
                class="search-history-list-item"
                v-for="item in searchH"
                :key="index"
                @click="() => handleSearch(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- 热门搜索 -->
          <div class="search-hot">
            <div class="search-hot-text">热门搜索</div>
            <ul class="search-hot-list">
        
              <li
                class="search-hot-list-item"
                v-for="(item, index) in searchHotList"
                :key="item.keyword"
                @click="() => handleSearch(item.keyword)"
                :class="{'hot-highlight':item.highlight==1}"
                >
                <span>{{ item.keyword }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 关键字列表 -->
        <div v-show="searchVal">
          <KeywordList :searchVal="searchVal" :handleSearch="handleSearch"></KeywordList>
        </div>
      </div>

      <!-- 商品详情列表 -->
      <ProductsList v-else :searchVal="searchVal"></ProductsList>
    </div>
  
  </div>




</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { reqSearchInit } from "@/api/search";
import { Search } from "@element-plus/icons-vue";
import KeywordList from "./KeywordList.vue";
import ProductsList from "./ProductsList.vue";

/* window.history.back(-1); */
let isShow=ref(false);
const router = useRouter();

let searchVal = ref("");
let searchHotList = ref([]);
let searchH = ref([]);
let placeholderText = ref("");
let flag = ref(true);
console.log(router, "routerrouter");
//发请求获取-默认关键字和热门关键字
onMounted(() => {
  getReqSearchInit();
  searchH.value = JSON.parse(localStorage.getItem("searchl")) || [];
});

onMounted(()=>{
  searchVal.value = router.currentRoute.value.query.keyword || "";
   flag.value = !searchVal.value
  if(searchVal.value){
    flag.value = false;
  }
 
})
const getReqSearchInit = async () => {
  try {
    const res = await reqSearchInit();
    placeholderText.value = res.defaultKeyword.keyword;
    searchHotList.value = res.hotKeywordVOList;//是否高亮searchHotList[index].highlight

  } catch (error) {
    console.log(error);
  }
};

/* 搜索框——回车 */
const searcHistory = (e) => {
  isShow.value = false;
  if (!searchVal.value.trim())return;//如果两端去掉空格之后有值

  let index1 = searchH.value.indexOf(searchVal.value)//数组中已有当前输入的值，找到当前值的坐标
  
  if(index1!==-1){//删除找到的已有元素
    searchH.value.splice(index1,1)
  }


  searchH.value.unshift(searchVal.value);//从头部插入

  if (searchH.value.length > 3) {//如果长度大于3
    searchH.value.pop();//从尾部删除一个
  }


  handleSearch(searchVal.value);
  localStorage.setItem("searchl", JSON.stringify(searchH.value));
};


let deleHistory = () => {
  searchH.value = [];
  localStorage.setItem("searchl", JSON.stringify(searchH.value));
};
/* 点击搜索栏中的-清空图标-显示搜索最开始页面 */
const handleSearchClear = ()=>{
  //isShow.value=!isShow.value;
  flag.value = true;
}
/* 点击取消-进入首页 */
const handleGoHome = ()=>{
  window.history.back(-1);
}
/* let handleSearchInput = () => {}; */
/* 点击进入-搜索商品列表页 */

let handleSearch = (keyword) => {
  isShow.value=!isShow.value;//不显示搜索框后面的‘取消’
  console.log(keyword);
  flag.value = false;
  searchVal.value = keyword;
  //router.push(`/search?keyword=${keyword}`)
  router.push({
    path: "/search",
    query: {
      keyword,
    },
  });
};
</script>

<style lang="less" scoped>
/*热门的高亮显示*/


.isShow{
  visibility: hidden;
}
.el-input{
  width: 600px;
}
.search-input-fixed{
  position: fixed;
  top: 0px;
  left:0px;
  width: 100%;
  
}

@import url("./index.less");






</style>

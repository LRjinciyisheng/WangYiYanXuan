<template>
  <div class="search-container">
    <div class="search-container-content">
      <!-- 搜索输入框 -->
      <div class="search-input">
        <el-input
          v-model.enter="searchVal"
          class="w-50 m-2"
          size="default"
          :placeholder="placeholderText"
          :prefix-icon="Search"
          @keyup.enter.native="searcHistory"
          @input="handleSearchInput"
          clearable
        />
        <span>取消</span>
      </div>

      <div v-if="flag">
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
    <div class="footer">

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
  // flag.value = !searchVal.value
  if(searchVal.value){
    flag.value = false;
  }
 
})
const getReqSearchInit = async () => {
  try {
    const res = await reqSearchInit();
    placeholderText.value = res.defaultKeyword.keyword;
    //console.log( res.defaultKeyword.keyword,'33333556565');
    //console.log(res, "sssssssssss23423423");
    searchHotList.value = res.hotKeywordVOList;
    // console.log(res, "ssssssssss");
  } catch (error) {
    alert(error);
  }
};

const searcHistory = (e) => {
 
  if (!searchVal.value.trim()) return;

  console.log(e, "eeeee");
  if (searchH.value.length >= 3) {
    searchH.value.pop();
    console.log("大于3了");
  }
  handleSearch(searchVal.value);

  searchH.value.unshift(searchVal.value);
  localStorage.setItem("searchl", JSON.stringify(searchH.value));

  
};

let deleHistory = () => {
  searchH.value = [];
  localStorage.setItem("searchl", JSON.stringify(searchH.value));
};
/* let handleSearchInput = () => {}; */
/* 点击进入-搜索商品列表页 */

let handleSearch = (keyword) => {
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
@import url("./index.less");

.footer{
  width: 100%;
  height: 50px;
  background: red;
 
  position: sticky;
  bottom: 0;
}
</style>

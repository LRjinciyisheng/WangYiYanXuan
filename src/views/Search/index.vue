<template>
  <div class="search-container">
      <div class="search-container-content">

        <!-- 搜索输入框 -->
    <div class="search-input">
      <el-input
        v-model.enter="searchVal"
        class="w-50 m-2"
        :placeholder="placeholderText"
        :prefix-icon="Search"
        @keyup.enter.native="searcHistory"
        @input="handleSearchInput"
        clearable
      />
      <span>取消</span>
    </div>
    <div v-show="!searchVal">
    <!-- 搜索历史记录 -->
    <div class="search-history" v-if="searchH.length">
      <div class="search-history-text" >
        <span >历史记录</span>
        <span @click="deleHistory">删除</span>
      </div>
      <ul class="search-history-list">
        <li
          class="search-history-list-item"
          v-for="item in searchH"
          :key="index"
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
        >
          <span>{{ item.keyword }}</span>
        </li>
      </ul>
    </div>
  </div>
  <div v-show="searchVal">
    <KeywordList :searchVal="searchVal"></KeywordList>
  </div>
      </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { reqSearchInit } from "@/api/search";
import { Search } from "@element-plus/icons-vue";
import KeywordList from "./KeywordList.vue"
let searchVal = ref("");
let searchHotList = ref([]);
let searchH = ref([]);
let placeholderText = ref("");

//发请求获取-默认关键字和热门关键字
onMounted(() => {
  getReqSearchInit();
  searchH.value = JSON.parse(localStorage.getItem("searchl")) || [];
});

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
  if(!searchVal.value.trim())return;

  console.log(e, "eeeee");
  if (searchH.value.length >= 3) {
    searchH.value.pop();
    console.log("大于3了");
  }
  searchH.value.unshift(searchVal.value);
  localStorage.setItem("searchl", JSON.stringify(searchH.value));
  searchVal.value = "";
};

let deleHistory=()=>{
  searchH.value=[];
  localStorage.setItem("searchl", JSON.stringify(searchH.value));
}
let handleSearchInput=()=>{

}
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>

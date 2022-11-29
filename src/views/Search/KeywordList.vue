<template>
  <div class="ulWrap">
  <ul>
    <li v-for="(item, index) in keywordListRef" :key="index" @click="()=>handleSearch(item)">
      <span>{{ item }}</span>
      <el-icon><ArrowRight /></el-icon>
    </li>
   
  </ul>
</div>
</template>

<script setup>
import { onMounted, ref,watch,toRef } from "vue";
import { reqSearchAutoComplete } from "@/api/search";
import debounce from "lodash/debounce";

let keywordListRef = ref([]);

const props = defineProps({
  searchVal: {
    type: Number,
    required: true,
  },
  handleSearch:{
    type: Function,
    required: true,
  }
});


onMounted(() => {
  //getReqSearchAutoComplete();
});
watch(
  ()=>props.searchVal, 
  debounce(() => getReqSearchAutoComplete(), 100)
)

const getReqSearchAutoComplete = async () => {
  try {
    const res1 = await reqSearchAutoComplete({
      keywordPrefix: props.searchVal,
    });
    keywordListRef.value = res1;
  } catch (error) {
    console.log(error);
  }
};



</script>

<style lang="less" scoped>

ul {

  border-top: 1px solid #d3d4dc;
  padding-top: 15px;
  padding-left: 10px;
  background: rgb(248, 251, 253);
  li {

    text-align: center;
    line-height:8px ;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #d3d4dc;
    margin-bottom: 15px;
    padding: 0 10px 5px 15px;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>

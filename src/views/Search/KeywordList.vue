<template>
  <ul>
    <li v-for="(item, index) in keywordListRef" :key="index">
      <span>{{ item }}</span>
      <el-icon><ArrowRight /></el-icon>
    </li>
   
  </ul>
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
});


onMounted(() => {
  getReqSearchAutoComplete();
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
    alert(error);
  }
};


</script>

<style lang="less" scoped>
ul {
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #d3d4dc;
    margin-bottom: 15px;
    padding-bottom: 5px;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>

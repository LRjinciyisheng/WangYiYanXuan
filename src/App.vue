<template>
  <div class="conatienr">
    <router-view />
   <!--  <Category></Category> -->
     <!-- <Home></Home> -->
  </div>
</template>

<script>
import Category from './views/Category/index.vue';
//import Home from './views/home/index.vue'
export default {
  name: "App",
  components:{Category,Home}
};
</script>
<style lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="conatienr">
    <!-- <router-view /> -->
    <Category></Category>
  </div>
</template>

<script>
import Category from './views/Category/index.vue';

export default {
  name: "App",
  components:{Category}
};
</script>
<style lang="less">
</style>

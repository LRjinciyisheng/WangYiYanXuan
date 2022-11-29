<template>
  <div class="container">
    <router-view />
    <tableBar/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>

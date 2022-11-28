<template>
  <div class="card">
    <!-- 最顶上图片 -->
    <img class="imgTop" :src="bannerUrl"/>
    <!-- 文字和分割线 -->
    <div class="kind"  v-for="item in categoryGroupList">
      <span class="bigTitle">{{ item.name }}</span>
      <el-divider border-style="solid"/>
      <div class="showAll">
        <div class="showOne" v-for="it in item.categoryList">
          <!-- <router-link to="/category/list">
            <img :src="it.wapBannerUrl"/>
          </router-link> -->
          <img @click="turnList(it.id)" :src="it.wapBannerUrl"/>
          <span class="title">{{ it.name }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
//引入路由
import { useRouter } from 'vue-router';
import { ref, onMounted, watch } from 'vue'
//获取小仓库
import { useCategoryStore } from '../../../stores/category';
let categoryStore:any = useCategoryStore();
//创建路由对象
const router = new useRouter();
//记录当前页的大图数据
let currentCategory:any = ref([]);
//最上面大图数据
let bannerUrl = ref('');
//记录二级分类的many数据
let categoryGroupList = ref([]);

//挂载完毕的钩子
onMounted(() => {
  //如果子组件挂载后更新父组件的数据，那拿到的就是之前的数据(可以分别在父组件和子组件的onmounted里发请求，发现父组件先执行)，不是最新的！！！
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    currentCategory.value = props.current;
    bannerUrl.value = currentCategory.value.wapBannerUrl || currentCategory.value.bannerList[0].picUrl;
    // console.log(bannerUrl.value, '我是大图数据');

    categoryGroupList.value = props.categoryGroupList;
    // console.log(categoryGroupList.value,'是我喔');
})
 
const turnList = (id) => {
  let categoryId = router.currentRoute.value.query.categoryId;

  //点击某一个分类商品图片时进行路由跳转
  router.push({
    path:'/category/list',
    query:{
      categoryId,
      subCategoryId: id,
      categoryType: 0,
    }
  })
}

//接收父组件传递过来的数据
//props数据会自动更新！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
let props:any = defineProps(["current", "categoryGroupList"]);

watch(
  () => [ props.current, props.categoryGroupList ],
  ([newcurrent, newcategoryGroupList],[oldcurrent, oldcategoryGroupList]) => {
      // console.log(oldcurrent, '~', newcurrent);
      // console.log(oldcategoryGroupList, '~', newcategoryGroupList);
      // currentCategory.value = props.current;
      currentCategory.value = newcurrent;
      bannerUrl.value = currentCategory.value.wapBannerUrl || currentCategory.value.bannerList[0].picUrl;

      // categoryGroupList.value = props.categoryGroupList;
      categoryGroupList.value = newcategoryGroupList;
  }
)

</script>


<style scoped lang="less">
.card{
  width: 264px;
  height: 100%;
  .imgTop{
    width: 260px;
    height: 96px;
    margin: 12px 12px 0 0;
  }
  .kind{
    .bigTitle{
      font-weight: 800;
      display: block;
      margin-top: 15px;
    }
    :deep(.el-divider--horizontal){
      margin: 12px 0;
      padding: 4px;
      width: 95%;
    }
    .showAll{
      width: 264px;
      height: 100%;
      display: flex;
   
      align-items: center;
      flex-wrap: wrap;
      .showOne{
        display: flex;
        flex-direction: column;

        img{
          width: 72px;
          height: 72px;
          padding: 5px;
          box-sizing: border-box;
          margin: 0 8px;
        }
        .title{
          display: block;
          width: 72px;
          height: 36px;
          line-height: 20px;
          text-align: center;
          font-size: 12px;
          margin: 8px 0 8px 5px;
        }
      }
    }
  }
}
</style>
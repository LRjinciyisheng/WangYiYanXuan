<template>
    <!-- 整体的大盒子 -->
    <div class="box">
        <!-- 顶部的黑盒子@click="gologin" -->
        <div class="user" @click="gologin"  >
            <!--<router-link to="/login">点击去登录</router-link> -->
            <img src="../../assets/5.jpg"  class="ava">
            <text class="text" >点击登录</text>
           
            <div class="jt">></div>
        
        </div>
        <div class="bottom">
           
            <div class="bottom1" v-for="(item,index) in userInfoStore.navList">
                <img :src="item.picUrl" class="img1" @click="goshoping" >
                <text class="text1" @click="gocenter">{{item.mainTitle}}
                    <!--     -->
                    <!-- <router-link to="/goshoping">点击去值得买</router-link> -->
                </text>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router';
import { useUserInfoStore } from '../../store/userinfo'
import { onMounted} from 'vue'
const userInfoStore = useUserInfoStore()
const router = useRouter()
// const route = useRoute()
// 点击回调
const gologin=()=>{
    router.push('/login')
    console.log(111);
}
const gocenter=()=>{
    router.push('/center')
}
const goshoping=()=>{
    router.push('/goshoping')
}

onMounted(() => {
    //让仓库发请求获取轮播图的数据 
    userInfoStore.getimg()
    
})
</script>

<style  scoped>
*{
    margin: 0;
    padding: 0;
}
/* 大盒子 */
.box{
  height: 100%;
  width: 100%;
  background: rgb(217, 213, 213);
  /* display: flex; */
}
/* 用户信息的框 */
.user{
    width: 100%;
    height: 50px;
    background: rgb(63, 63, 63);
    display: flex;
    margin-bottom:10px ;
    
}
/* 用户信息的头像 */
.ava{
    width: 40px;
    height: 40px;
    border-radius:50%;
    margin: 5px 25px;
}
/* 用户姓名 */
.text{
    font-size: 15px;
    line-height: 50px;
    margin-right: 180px;
    color:white
}
.jt{
    line-height: 50px;
    font-size: 20px;
    color:white
}
/* 下面的大盒子 */
.bottom{
    height: 617px;
    width:100%;
    display: flex;
    flex-wrap: wrap;
    /* margin-top: 10rpx; */
    display: flex;
    
    /* align-items: center; */
    
}
/* 下面的小盒子 */
.bottom1{
    width: 32.8%;
    
    background:rgb(242, 242, 242);
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
}
.img1{
    width: 50px;
    height:50px;
    justify-content:center;
    margin:10px auto;
    
}
.text1{
    text-align: center;
   
}

</style>
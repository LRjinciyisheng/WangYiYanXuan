<template>
    <div class="box">
      <div class="box1">
        <el-input type="text" class="ipnut-1" placeholder="请输入要注册的账号"></el-input>


        <el-input  placeholder="请输入密码" class="ipnut-1" v-model="account.password"></el-input>

        <el-input type="text" placeholder="请输入手机号/邮箱" class="ipnut-2" v-model="account.phone"></el-input>
        <el-button type="primary" plain class="btn1" @click="getcode">发送验证码</el-button>
        <el-input type="text" placeholder="请输入验证码" class="ipnut-1" v-model="account.code"></el-input>
      
       
        <el-button type="primary" plain class="btn" @click="userRegister">点击此注册账号</el-button>
      </div>  
    </div>
</template>

<script setup>
//引入ref
import {ref} from 'vue';
//引入仓库
import  {useUserInfoStore} from '../../store/userinfo'
//路由跳转
import { useRouter } from "vue-router"

//引入提示消息的组件
import { ElMessage } from 'element-plus'
//引入发请求的函数
import {reqUserRegister} from '../../api/user/index'
//命名仓库 要调用
const userinfo= useUserInfoStore()
//路由跳转
const router = useRouter();
let account =ref({
    phone:'',
    password:'',
    code:'',
})

// 点击获取验证码的回调
const getcode=async()=>{
    //通知仓库发请求
    // const {phone}=account.value
    // try{
    // let result= await userinfo.getUserCode(phone)
    // console.log(111);
    // }catch{

    // }
   
} 
const userRegister=async()=>{
    ElMessage({
    showClose: true,
    message: '注册成功,即将跳转到登录页',
    type: 'success',
    
  })
    router.push({
        path:'/login'
    })
}
</script>

<style  scoped>

.box1{
   
width:100%;

margin-top:120px;
padding: 40px 0px 40px 60px;
box-sizing: border-box;
background: url(./img/5.jpg);
background-size: 100% 100%;

}
.ipnut-1{
    width: 220px;
    height: 30px;
    /* border-radius:10%; */
    margin-left:5px;
    margin-top:5px;
}
.btn{
    height: 30px;
    margin: 20px 60px;
    border-radius:10% ;
}
.btn1{
    height: 28px;  
    width: 70px;
}
.ipnut-2{
    width: 150px;
    height: 30px;
    /* border-radius:10%; */
    margin-left:5px ;
    margin-top:5px ;
}

</style>
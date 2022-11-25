<template>
    <!-- 大盒子 -->
    <div class="box">
       <div class="passwordContainer">

        <div class="user-image">
            <img src="./images/2.jpg" alt="">
            <!-- <img src="./images/1.jpg" alt=""> -->

        </div>
        <div class="">账号
            <el-input placeholder="请输入用户名" size="min" class="input"/>
        </div>
        <div class="">密码
            <el-input type="text" placeholder="请输入密码" size="min" class="input"/>
        </div>
        <el-button style="margin-top:20px" type="primary" size="big" class="button">登录
        </el-button>
       </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.box{
width: 100%;
height: 667px;
/* background:rgb(105, 223, 255); */
background:linear-gradient( to top,#ddfcfc,#82e7e1,#ccf2fb);
/* padding-top:100px; */
display: flex;
justify-content: center;
align-items: center;
}
.user-image{
    width: 100px;
    height: 100px;
    /* background: pink; */
    margin: 20px auto;
}
.user-image img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.passwordContainer{
    width: 100%;
    height: 400px;
}
.input{
    width: 70%;
    padding:10px;
}
.button{
   
}

</style>
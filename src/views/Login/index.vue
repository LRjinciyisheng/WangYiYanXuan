<template>
    <!-- 大盒子 -->
    <div class="box">
        <div class="">账号
            <el-input placeholder="请输入用户名" size="min" class="input"/>
        </div>
        <div class="">密码
            <el-input type="text" placeholder="请输入密码" size="min" class="input"/>
        </div>
        <el-button  type="primary" size="big" class="button">登录
        </el-button>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.box{
width: 100%;
height: 200px;
background:rgb(105, 223, 255);
padding-top:100px;
}
.input{
    width: 70%;
    padding:10px;
}
.button{
   
}

</style>
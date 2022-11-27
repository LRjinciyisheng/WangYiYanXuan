// defineStore定义小仓库的写法,书写形式有两种:选择式{} 组合式()=>{}
import { defineStore } from 'pinia';
//封装函数:获取token | 持久化存储token | 删除token

// 引入登录的函数 轮播 瀑布流
import {reqLogin,reqnavWap,reqtopic} from '../api/user'

// 定义小仓库
export const useUserInfoStore =defineStore('userInfo',{
    // actions异步请求|逻辑
    actions:{
        async login(username, password) {
            //用户登录成功,返回用户唯一标识token
            try {
              //登录成功
              let result = await reqLogin({ username, password });
              //小仓库存储一份token 
              this.token = result.token;
              //本地存储持久化存储
              setToken(result.token);
              //登录成功返回成功Promise
              return 'ok';
            } catch (error) {
              //登录失败返回失败promise
              return Promise.reject(new Error(error.message));
            }
      
          },
          //获取轮播图的数据
          async getimg(){
            try{
              let result =await reqnavWap();
              console.log(result)
              this.navList=result.navList
              
            } catch(error){
              return Promise.reject(new Error(error.message));
            }
        
          },
          // 获取瀑布流的数据
          async getimage(){
            try{
              let result = await reqtopic()
              console.log(result)
              this.fallsList=result.result
            }catch(error){
              return Promise.reject(new Error(error.message));
            }
          }
    },
    state:()=>{
      return{
        //轮播图的数据
        navList:[],
        //瀑布流的数据
        fallsList:[]
      }

    }




    // pinia中state,存储仓库数据-->非持久化存储 state:函数返回的结果组件可以使用的数据

})
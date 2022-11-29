// defineStore定义小仓库的写法,书写形式有两种:选择式{} 组合式()=>{}
import { result } from "lodash";
import { defineStore } from "pinia";
//封装函数:获取token | 持久化存储token | 删除token

// 引入登录的函数 轮播 瀑布流 注册获取验证码
import {reqLogin,reqnavWap,reqtopic,reqUserRegister} from '../api/user'

// 定义小仓库
export const useUserInfoStore = defineStore("userInfo", {
	state: () => ({
		//轮播图的数据
		navList: [],
		//瀑布流的数据
		fallsList: [],
	}),

    // actions异步请求|逻辑
    actions:{
        async login(username, password) {
            //用户登录成功,返回用户唯一标识token
            try {
              //登录成功
              let result = await reqLogin({ username, password });
              //小仓库存储一份token 
              // this.token = result.token;
              //本地存储持久化存储
              // setToken(result.token);
              //登录成功返回成功Promise
              alert(111)
              return 'ok';
            } catch (error) {
              alert('请求失败')
              
              //登录失败返回失败promise
              return Promise.reject(new Error(error.message));
              
            }
      
          },
          //获取轮播图的数据
          async getimg(){
            try{
              let result =await reqnavWap();
              console.log(result.navList)
               this.navList=result.navList
              
            } catch(error){
              console.log(error);
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
          },

          async getUserCode(phone){
            try{
              let result = await reqUserRegister(phone);
              if(result.code==200){
                return 'ok'
              }
            }catch{
              return Promise.reject(new Error(result.message))
            }
          }

    },
  
})
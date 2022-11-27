//第一步:需要从pinia插件引入createPinia方法
//注意:createPinia是一个函数,可以创建大仓库
import {createPinia} from 'pinia';
//创建大仓库
const pinia = createPinia();
//对外暴露
export default pinia;
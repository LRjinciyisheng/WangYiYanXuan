import request from '@/utils/request';
/* 搜索页请求- 默认关键字和热门关键字 */

export const reqSearchInit = ()=>request({
  method:'get',
  url:'/xhr/search/init.json',
  type:'you163'
});


/* 搜索页请求- 实时关键字列表 */
export const reqSearchAutoComplete = (keywordPrefix)=>request({
  method:'get',
  url:'/xhr/search/searchAutoComplete.json',
  type:'you163',
  params:keywordPrefix
});


/* 搜索页请求- 搜索 */
export const reqSearch = (keyword)=>request({
  method:'get',
  url:'/xhr/search/search.json',
  type:'you163',
  params:keyword
});
import request from '@/utils/request';
/* 搜索页请求- 默认关键字和热门关键字 */
export const reqSearchInit = ()=>request.get('/xhr/search/init.json');
/* 搜索页请求- 实时关键字列表 */
export const reqSearchAutoComplete = ()=>request.get('/xhr/search/searchAutoComplete.json ');
/* 搜索页请求- 搜索 */
export const reqSearch = ()=>request.get('/xhr/search/search.json');
import request from '@/utils/request';

//为你推荐和分类列表的数据请求
export const reqRecomAndCate = (timestamp, categoryId) => request.get('item/cateList.json'+ `?__timestamp=${timestamp}&categoryId=${categoryId}`);

//根据分类ID获取分类的列表
export const reqListById = (timestamp, categoryId) => request.get('item/cateList.json'+ `?__timestamp=${timestamp}&categoryId=${categoryId}`);

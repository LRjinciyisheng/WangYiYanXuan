import request from '@/utils/request';

//为你推荐和分类列表的数据请求
// export const reqRecomAndCate = (timestamp, categoryId) => request.get('/item/cateList.json'+ `?__timestamp=${timestamp}&categoryId=${categoryId}`, { type:'you163' });

//根据分类ID获取分类的列表
// export const reqListById = (timestamp, categoryId) => request.get('/item/cateList.json'+ `?__timestamp=${timestamp}&categoryId=${categoryId}`,  { type:'you163' });

//获取某个分类下的商品列表
// export const reqProductList = (timestamp, categoryType, subCategoryId, categoryId) => request.get('/item/list.json'+`?__timestamp=${timestamp}&categoryType=${categoryType}&subCategoryId=${subCategoryId}&categoryId=${categoryId}`,  { type:'you163' });


//
export const reqRecomAndCate = (timestamp, categoryId) => request({
  method:'get',
  url:'/item/cateList.json',
  type:'you163',
  params:{
    timestamp,
    categoryId
  }
})

//
export const reqListById = (timestamp, categoryId) => request({
  method:'get',
  url:'/item/cateList.json',
  type:'you163',
  params:{
    timestamp,
    categoryId
  }
})


export const reqProductList = (timestamp, categoryType, subCategoryId, categoryId) => request({
  method:'get',
  url:'/item/list.json',
  type:'you163',
  params:{
    timestamp, 
    categoryType, 
    subCategoryId, 
    categoryId
  }
})
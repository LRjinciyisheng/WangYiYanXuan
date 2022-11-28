import request from "@/utils/request";
// 首页推荐频道的接口
export const reqRecommendData = () =>
  request({
    url: "/xhr/index.json?__timestamp=1630131808529",
    type: "you163",
  });
//首页其他数据的接口
export const reqOtherData = (categoryId) =>
  request({
    url: "/item/list.json?__timestamp=1630136511866&categoryId=" + categoryId,
    type: "you163",
  });

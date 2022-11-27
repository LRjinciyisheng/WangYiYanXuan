import request from "@/utils/request";
// 首页推荐频道的接口
export const reqRecommendData = () =>
  request.get("/xhr/index.json?__timestamp=1630131808529");

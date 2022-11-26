import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';




// 配置新建一个 axios 实例
const service = axios.create({
	timeout: 50000,
	baseURL: '/api',//接口代理，详情见 - vite.config.js 底部 proxy
});

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		//请求携带token[pinia小仓库里面]
	
		return config;
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	/* 约束一下response */
	async (response) => {
		// 对响应数据做点什么
		const res = response.data;
		// if (!res || res.code !== 200) { /* 成功数据的code值为20000/200 */
		if (!res) { /* 成功数据的code值为20000/200 */
			//统一的错误提示
			ElMessage({
				message: (typeof res.data == 'string' && res.data) || res.message || 'Error',
				type: 'error',
				duration: 5 * 1000
			})

		
			return Promise.reject(service.interceptors.response);
		} else {
			return res.data; /* 返回成功响应数据中的data属性数据 */
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

export default service;

import Axios from 'axios'
import {AXIOS_CONFIG} from './config.js'
import {requestErrorHandler, requestHandler, responseErrorHandler, responsHandler} from './middlewares/index'

// 创建实例
let http = Axios.create(AXIOS_CONFIG)

// 请求拦截器
const baseInterceptorsRequestID = http.interceptors['request'].use(requestHandler, requestErrorHandler)

// 响应拦截器
const baseInterceptorsResponseID = http.interceptors['response'].use(responsHandler, responseErrorHandler)

// 导出 设置，请求和响应拦截器ID ，中间件 ，以便实现修改后恢复原有设置 的能力
export {
	requestHandler,
	responsHandler,
	baseInterceptorsRequestID,
	baseInterceptorsResponseID,
	AXIOS_CONFIG
}

export default http

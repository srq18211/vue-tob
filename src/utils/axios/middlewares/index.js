import {Message} from 'element-ui'

const logoutURL = 'http://admin.xesv5.com'

/**
 * @desc 请求拦截器
 * @param config
 * @return {*}
 */
const requestHandler = (config) => {
	if (config instanceof FormData) {

	}
	// if (Object.prototype.toString.call(config.data) === '[object FormData]') {
	// 	return config
	// }
	// if (config.method === 'post') {
	// 	config.data = qs.stringify(config.data)
	// }
	return config
}

/**
 * @desc 响应拦截器
 * @param res
 * @return {Promise<never>|*}
 */
const responsHandler = (res) => {
	if (+res.data.stat === 1) {
		return res.data.data
	}
	if (+res.data.stat === 9) {
		// window.location.href = logoutURL
		return res.data.data
	}
	if (+res.data.stat === 1108) {
		Message.error({
			message: res.data.msg
		})
		setTimeout(() => {
			window.close()
		}, 2000)
		return
	}
	Message.error({
		message: res.data.msg
	})

	return Promise.reject(res.data)
}

/**
 * @desc 请求错误处理函数
 * @param error
 */
const requestErrorHandler = () => {

}

/**
 * @desc 响应错误处理函数
 * @param error
 * @return {Promise<never>}
 */
const responseErrorHandler = (error) => {
	Message.error({
		message: '网络异常，请重试'
	})
	return Promise.reject(error)
}

export {
	requestHandler,
	responsHandler,
	requestErrorHandler,
	responseErrorHandler
}

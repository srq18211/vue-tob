const env = process.env.NODE_ENV

let AXIOS_CONFIG = Object.create(null)

if (env === 'development') {
	AXIOS_CONFIG = {
		withCredentials: true,
		debug: true,
		timeout: 300000,
		logoutUrl: 'http://admin.xesv5.com',
		baseURL: '',
		headers: {
			'Content-Type': 'application/json;charset=utf8;'
		},
		log: () => {

		}
	}
} else {
	AXIOS_CONFIG = {
		withCredentials: true,
		debug: true,
		timeout: 300000,
		logoutUrl: 'http://admin.xesv5.com',
		baseURL: 'http://teacheradmin.xesv5.com',
		headers: {
			'Content-Type': 'application/json;charset=utf8;'
		},
		log: () => {

		}
	}
}

export {AXIOS_CONFIG}

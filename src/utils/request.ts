import axios, { AxiosRequestConfig, Method } from 'axios'

const apiUrl = 'https://node.tonylee.vip'
const service = axios.create({
    baseURL: apiUrl,
    timeout: 6 * 1000
})

service.interceptors.request.use(
    config => {
        // config.headers['Content-Type'] = 'application/json';
        // if (localStorage.getItem('token')) {
        //     config.headers.Authorization = localStorage.getItem('token')
        // }
        return config
    },
    error => {
        // Do something with request error
        window.console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response;
        if (res.status !== 200) {
            return Promise.reject('error')
        }else {
            return res.data
        }
    },
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('token')
            location.reload()
        } else {
           
        }
    }
)

export default service

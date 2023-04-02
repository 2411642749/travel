// import axios from 'axios'
//
// const BaseUrl = 'http://123.207.32.32:1888/api'
// const request = axios.create({
//     BaseUrl,
//     timeout: 1000
// })
// request.interceptors.request.use(config => {
//     return config
// }, err => {
//     // return new Promise(err)
// })
//
// request.interceptors.response.use(res => {
//     return res.data
// }, err => {
//     // return new Promise(err)
// })
//
// export default request

import axios from 'axios'

class Request {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "get"})
    }

    post(config) {
        return this.request({...config, method: "post"})
    }
}

const BaseUrl = 'http://123.207.32.32:1888/api'
export default new Request(BaseUrl)


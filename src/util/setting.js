import axios from "axios"
import { createBrowserHistory } from "history"

// Link Swagger movie: https://movienew.cybersoft.edu.vn/swagger/index.html?fbclid=IwAR0SDUHnA7QNYtBqvxH55htH8rfIdn8abkjpYp8GIDqfH4PpLof6EGUYAxE
//doamain backend
export const DOMAIN = 'https://movienew.cybersoft.edu.vn'
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU"
export const MANHOM = 'GP01'
export const USER_LOGIN = 'userLogin'
export const ACCESSTOKEN = 'accessToken'
//Giúp chuyển hướng trang của route
export const history = createBrowserHistory()

//config axios
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        ['TokenCybersoft']: TOKEN_CYBERSOFT,
        ['Authorization']: 'Bearer ' + localStorage.getItem(ACCESSTOKEN)
    }
    return config;
}, (error) => { return Promise.reject(error) })

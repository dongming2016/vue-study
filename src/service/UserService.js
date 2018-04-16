import axios from 'axios'

const USER_LOGIN_URL = '/study-manage/user/login'
const USER_LOGOUT_URL = '/study-manage/user/logout'

export const loginService = (data) => axios.post(USER_LOGIN_URL, data)

export const logoutService = (data) => axios.post(USER_LOGOUT_URL, data)

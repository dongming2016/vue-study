import axios from 'axios'

const USER_LOGIN_URL = '/study-manage/user/login'
export const loginService = (data) => axios.post(USER_LOGIN_URL, data)

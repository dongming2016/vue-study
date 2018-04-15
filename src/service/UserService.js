import axios from 'axios'

const USER_CHECK_URL = '/study-manage/user/login'
export const checkUser = (data) => axios.post(USER_CHECK_URL, data)

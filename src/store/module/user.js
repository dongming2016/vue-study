import { USER_LOGIN } from '../mutation-type'
const state = {
    isLogin: false
}

const getters = {
    loginStatus: state => {
        return state.isLogin
    }
}

const mutations = {
    [USER_LOGIN] (state, payload) {
        console.log('hello')
        state.isLogin = payload.userState
    }
}

export default {
    state,
    getters,
    mutations
}

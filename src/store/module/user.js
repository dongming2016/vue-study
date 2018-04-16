import { USER_LOGIN, USER_LOGOUT } from '../mutation-type'
import { logoutService } from '@/service/UserService'

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
        state.isLogin = payload.userState
    },
    [USER_LOGOUT] (state, payload) {
        state.isLogin = !payload.isSuccess
    }
}

const actions = {
    [USER_LOGOUT] ({ state, commit }) {
        logoutService(state.uid).then((data) => {
            commit(USER_LOGOUT, { isSuccess: data.data })
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

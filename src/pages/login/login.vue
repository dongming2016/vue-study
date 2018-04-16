<template>
<div>
    <section class="user-login-container">
        <div class="user-login-box">
            <div class="login-title"><span class=""></span><span class="login-title-text">Start your plan</span></div>
            <div class="user-login">
                <div class="login-container">
                    <span class="icon-user login-icon"></span>
                    <input type="text" class="login-input" v-model="user.name" placeholder="昵称/手机号/email" required>
                </div>
            </div>
            <div v-if="errorInfo.name" class="login-error">* {{errorInfo.name}}</div>
            <div class="user-login">
                <div class="login-container">
                    <span class="icon-key login-icon"></span>
                    <input type="password" class="login-input" v-model="user.password" required>
                </div>
            </div>
            <div v-if="errorInfo.password" class="login-error">* {{errorInfo.password}}</div>
            <button @click="login" class="login-button"
            v-bind:class="{'btn-disable': !this.user.name || !this.user.password}">登录</button>
            <div class="lost-password"><router-link to="password">忘记密码？</router-link></div>
        </div>
    </section>
</div>
</template>

<script>
import { loginService } from '@/service/UserService'
import { USER_LOGIN } from '@/store/mutation-type'

export default {
    data () {
        return {user: {name: '', password: ''}, errorInfo: {isError: false, name: '', password: ''}, disableBtn: true}
    },
    methods: {
        login: function () {
            // 初始化用户状态
            this.errorInfo.isError = false
            this.errorInfo.name = ''
            this.errorInfo.password = ''
            this.$store.commit(USER_LOGIN, { userState: false })

            if (!this.user.name) {
                this.errorInfo.name = '请输入用户名!'
                this.errorInfo.isError = true
            }
            if (!this.user.password) {
                this.errorInfo.password = '请输入密码！'
                this.errorInfo.isError = true
            }
            if (this.user.name && this.user.password) {
                loginService(this.user).then((datas) => {
                    const data = datas.data
                    this.errorInfo.name = data.name
                    this.errorInfo.password = data.password
                    this.errorInfo.isError = data.isError
                    this.$store.commit(USER_LOGIN, { userState: !data.isError })
                }).catch((err) => {
                    this.$store.commit(USER_LOGIN, { userState: false })
                    console.log(err)
                })
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
    @import '../../style/common.css';
    .user-login-container {
        margin-top: 50vh;
    }
    .login-title {
        height: 50px;
        background: red;
        line-height: 50px;
        font-size: 24px;
        color: #fff;
        margin-bottom: 20px;
        margin-top: -50%;
    }
    .user-login-box {
        width: 240px;
        margin: 0 auto;
        border-radius: 4px;
    }
    .user-login {
        margin-bottom: 12px;
    }
    .login-container {
        display: inline-flex;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .login-icon {
        height: 36px;
        font-size: 22px;
        line-height: 36px;
        width: 36px;
        color: #ddd;
    }
    .login-input {
        border: none;
        padding-left:8px;
    }
    .login-button {
        width: 215px;
        height: 36px;
        font-size: 18px;
        background-color: #00b38a;
        border: none;
        border-radius: 4px;
        margin-top: 10px;
        cursor: pointer;
    }
    .login-error {
        color: red;
        margin-top: -4px;
        margin-bottom: 8px;
        font-size: 10px;
        text-align: left;
        padding-left: 22px;
    }
    .lost-password {
        text-align: right;
        margin-top: 10px;
        font-size: 10px;
    }
    .btn-disable  {
        opacity: 0.6;
    }
</style>

<template>
  <div class="register-container">
    <div class="register-box">
      <div class="register-inputbox">
        <label class="label"><span class="register-star">* </span>用户名</label>
        <input type="text" required placeholder="请输入用户名" v-model="user.name">
      </div>
      <div class="register-inputbox">
        <label class="label"><span class="register-star">* </span>密码</label>
        <input type="password" required placeholder="请输入密码" v-model="user.password">
      </div>
      <div class="register-inputbox">
        <label class="label"><span class="register-star">* </span>重复密码</label>
        <input type="password" required placeholder="请再次输入密码" v-model="user.repassword">
      </div>
    </div>
    <div><div class="button" @click="OK">确定</div></div>
    <div>
      <router-link to='userinfo'>完善其它信息</router-link>
    </div>
    <alertbox v-bind:alertbox="alertbox" v-if="alertbox.show">
        <div slot="content">{{ alertbox.msg }}</div>
    </alertbox>
  </div>
</template>

<script>
import alertbox from '@/components/alertbox/alertbox'
import { registerService } from '@/service/UserService'
export default {
    data: function () {
        return { user: {name: '', password: '', repassword: ''}, errorInfo: {password: ''}, alertbox: {show: false, title: {show: true}}, msg: '' }
    },
    methods: {
        OK: function () {
            if (this.user.password !== this.user.repassword) {
                this.errorInfo.password = '密码不一致'
            } else {
                registerService(this.user).then((data) => {
                    if (data.data) {
                        this.alertbox.show = true
                        this.alertbox.msg = '注册成功'
                        setTimeout(() => {
                            this.alertbox.show = false
                            this.$router.push('login')
                        }, 10000)
                    }
                }).catch((err) => {
                    console.log(err)
                    this.alertbox.show = true
                    this.alertbox.msg = '注册失败'
                })
            }
        }
    },
    components: {
        alertbox
    }
}
</script>

<style lang="postcss" scoped>
  .label {
    width: 80px;
    display: inline-block;
    text-align: right;
    margin-right: 4px;
  }
  .register-container {
      margin-top: 50vh;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
  }
  .register-box {
      margin-top: -20%;
  }
  .register-star {
    color: red;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
  }
  .register-inputbox {
      height: 33px;
  }
</style>

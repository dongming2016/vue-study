<template>
    <header>
        <img src="../../assets/logo.png">
        <ul class="middle-menu">
            <li :key="group.id" v-for="group in header.group">
                <span>{{group.name}}</span>
                <ul>
                    <li :key="item.id" v-for="item in group.items">
                        <router-link to="item.url" >{{item.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="left-munu">
            <li>
                <span>消息</span>
                <ul class="header-msg-box">
                    <li :key="item.id" v-for="item in header.msg">
                        <router-link to="item.url">{{item.name}}</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <span v-if="userinfo.state">
                    {{userinfo.name}}
                </span>
                <span v-else><router-link to="/usermanager/login">登录</router-link></span>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data: function () {
        return {header: {items: [{id: 1, name: 'hello', url: 'xxx'}], msg: []}}
    },
    mounted: function () {
    }
}
</script>

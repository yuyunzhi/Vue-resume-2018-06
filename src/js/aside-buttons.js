Vue.component('aside-buttons',{
    props:['userHasLogin'],
    template:`
    <aside class="buttons">
        <button class="logIn"@click="changeButtons('login')" v-show="!userHasLogin">登录</button>
        <button class="signOut"@click="changeButtons('logout')" v-show="userHasLogin">登出</button>
        <button @click="changeButtons('edit')"v-show="userHasLogin">编辑</button>
        <button @click="changeButtons('save')"v-show="userHasLogin">保存</button>
        <button @click="changeButtons('share')"v-show="userHasLogin">分享</button>
        <button @click="changeButtons('print')"v-show="userHasLogin">打印</button>
        <button @click="changeButtons('skin')"v-show="userHasLogin">换肤</button>
    </aside>
    `,
    methods:{
        changeButtons(statement){
            this.$emit('change-btn-state',statement)
        }

    }
})
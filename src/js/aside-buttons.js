Vue.component('aside-buttons',{
    props:[],
    template:`
    <aside class="buttons">
        <button class="signIn" @click="changeButtons('login')">登录</button>
        <button class="signOut" @click="changeButtons('logout')">登出</button>
        <button @click="changeButtons('edit')">编辑</button>
        <button @click="changeButtons('save')">保存</button>
        <button @click="changeButtons('share')">分享</button>
        <button @click="changeButtons('print')">打印</button>
        <button @click="changeButtons('skin')">换肤</button>
    </aside>
    `,
    methods:{
        changeButtons(statement){
            this.$emit('change-btn-state',statement)
        }

    }
})
Vue.component('aside-buttons',{
    props:[],
    template:`
    <aside class="buttons">

        <router-link to="/login" class="logIn btn" @click="changeButtons('login')">登录</router-link>
        <button class="signOut btn" @click="changeButtons('logout')">登出</button>
        <button class="btn"@click="changeButtons('edit')">编辑</button>
        <button class="btn"@click="changeButtons('save')">保存</button>
        <button class="btn"@click="changeButtons('share')">分享</button>
        <button class="btn"@click="changeButtons('print')">打印</button>
        <button class="btn"@click="changeButtons('skin')">换肤</button>
    </aside>
    `,
    methods:{
        changeButtons(statement){
            this.$emit('change-btn-state',statement)
        }

    }
})
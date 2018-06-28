
window.login={
    template:
    `
    <div class="logIn" v-cloak>
        <div>
            <router-link to="/">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-remove"></use>
                </svg>  
            </router-link>
        </div>
        <div>
            <span class="title">登录</span>
        </div>
        <span class="pointOut">{{content}}</span>
        <form>
            <div class="userName"> 
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>   
                <input class="logInContent"type="text"placeholder="邮箱">
            </div>
            <div class="userPassWord">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-3702mima"></use>
                </svg>   
                <input class="logInContent"type="password"placeholder="密码">                   
            </div>
            <button class="logInContent loginBtn"type="submit" @click="loginSuccess" >登录</button>
        </form>
        <div class="goToSignIn">
            <a class=""href="#">忘记密码了</a>
            <router-link to="/signin">立即注册</router-link>
        </div>
    </div> 
    `,
    data(){
        return{
            content:''
        }
    },
    methods:{
        loginSuccess(){
            //登录成功后，需要切换路由到"/"
            this.$router.push('/')
        }
    }
}



Vue.component('login',login)
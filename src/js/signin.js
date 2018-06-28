window.signin={
    props:[],
    template:`
    <div class="signIn" v-cloak>
        <div>
            <router-link to="/">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-remove"></use>
                </svg>  
            </router-link>
        </div>
        <div>
            <span class="title">注册</span>
        </div>
        <span class="pointOut">{{content}}</span>
        <form v-on:submit="x">
            <div class="userName"> 
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>   
                <input class="signInContent"type="text"placeholder="邮箱">
            </div>
            <div class="userPassWord">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-3702mima"></use>
                </svg>   
                <input class="signInContent"type="password"placeholder="密码">                   
            </div>
            <button class="signInContent signInBtn"type="submit" @click="signInSuccess">注册</button>
        </form>
        <div class="goToLogin">
            <a class=""href="#">忘记密码了</a>
            <router-link to="/login">立即登陆</router-link>
        </div>
    </div> 
    `,
    data(){
        return{
            content:''
        }
    },
    methods:{
        signInSuccess(){
            //注册成功后，需要切换路由到"/"
            // this.$router.push('/')
        },
        x(e){
            console.log(e)
        }
    },
}

Vue.component('signin',signin)
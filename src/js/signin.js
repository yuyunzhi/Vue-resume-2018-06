window.signin={
    props:[],
    data(){
        return{
            content:'',
            goToLogin:'',
            user:{
                email:'',
                password:''
            },
        }
    },
    template:`
    <div class="signInBox" v-cloak>
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
        <span class="pointOut">{{content}}<router-link to="/login"class="link">{{goToLogin}}</router-link></span>
        <form v-on:submit.prevent="signInSuccess">
            <div class="userName"> 
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>   
                <input class="signInContent"type="text"placeholder="邮箱" v-model="user.email">
            </div>
            <div class="userPassWord">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-3702mima"></use>
                </svg>   
                <input class="signInContent"type="password"placeholder="密码"v-model="user.password">                   
            </div>
            <button class="signInContent signInBtn"type="submit">注册</button>
        </form>
        <div class="goToLogin">
            <a class=""href="#">忘记密码了</a>
            <router-link to="/login">立即登陆</router-link>
        </div>
    </div> 
    `,
    methods:{
        signInSuccess(e){
            var user = new AV.User();
            // 设置用户名
            user.setUsername(this.user.email);
            // 设置密码
            user.setPassword(this.user.password);
            // 设置邮箱
            user.setEmail(this.user.email);
            user.signUp().then((user)=>{
                this.content='恭喜,注册成功啦~'
                this.goToLogin="请登录"
            }, (error)=> {
                if(error.code==203){
                    this.content='邮箱已被注册'
                  }else if(error.code==125){
                    this.content='邮箱地址不合法'                     
                  }
            });
        }
    },
}

Vue.component('signin',signin)
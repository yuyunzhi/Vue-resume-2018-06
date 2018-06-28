
window.login={
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
    template:
    `
    <div class="logInBox" v-cloak>
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
        <span class="pointOut">{{content}}<router-link to="/signin" class="link">{{goToLogin}}</router-link></span>
        <form v-on:submit.prevent="loginSuccess">
            <div class="userName"> 
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>   
                <input class="logInContent"type="text"placeholder="邮箱"v-model="user.email">
            </div>
            <div class="userPassWord">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-3702mima"></use>
                </svg>   
                <input class="logInContent"type="password"placeholder="密码"v-model="user.password">                   
            </div>
            <button class="logInContent loginBtn"type="submit">登录</button>
        </form>
        <div class="goToSignIn">
            <a class=""href="#">忘记密码了</a>
            <router-link to="/signin">立即注册</router-link>
        </div>
    </div> 
    `,
    methods:{
        loginSuccess(){
            AV.User.logIn(this.user.email, this.user.password).then((user)=>{ 
                console.log('登录成功')
                    this.content=''                 
                    //登录成功后，需要切换路由到"/"
                    this.$router.push('/')
                    console.log(user)
                    eventHub.$emit('user-has-login')
              },(error)=>{
                if(error.code==211){
                    this.content='抱歉，邮箱不存在~'
                    this.goToLogin='请注册'                 
                  }else if(error.code==210){
                    this.content='邮箱和密码不匹配' 
                  }else if(error.code==203){
                    this.content='邮箱已被注册' 
                  }else if(error.code==219){
                    this.content='登录失败次数超过限制，请稍候再试' 
                  }
              });
        }
    }
}



Vue.component('login',login)

window.login={
    data(){
        return{
            content:'',
            goToSignIn:'',
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
                <svg class="icon" aria-hidden="true" @click="removeContent">
                <use xlink:href="#icon-remove"></use>
                </svg>  
            </router-link>
        </div>
        <div>
            <span class="title">登录</span>
        </div>
        <span class="pointOut">{{content}}<span class="link" @click="goToSignInBtn">{{goToSignIn}}</span></span>
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
            <span @click="goToSignInBtn">立即注册</span>
        </div>
    </div> 
    `,
    mounted:function(){
        window.eventHub.$on('removeConetent',()=>{
            this.removeContent()
        })
        
    },
    methods:{
        removeContent(){
            this.content=''
            this.goToSignIn=''
            this.user.email=''
            this.user.password=''
        },
        goToSignInBtn(){
            this.removeContent()
            this.$router.push('/signin')  
        },
        loginSuccess(){
            AV.User.logIn(this.user.email, this.user.password).then((user)=>{ 
                this.content=''
                this.user.email=''
                this.user.password=''                 
                //登录成功后，需要切换路由到"/"
                this.$router.push('/')                                   
                window.eventHub.$emit('user-has-login')

              },(error)=>{
                this.user.email=''
                this.user.password=''  
                if(error.code==211){
                    this.content='抱歉，邮箱不存在~'
                    this.goToSignIn='请注册'                 
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
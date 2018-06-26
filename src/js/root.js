
const routes = [
    { path: '/', component : window.resumebody},

]



const router = new VueRouter({
    routes 
})

const app = new Vue({
    el: '#app',
    router,
    data:{
        resume:{
            info:{
                name:'余咖咖',
                job:'前端工程师',
                live:'上海嘉定',
                telephone:'13877777777',
                email:'1@qq.com',
                wechat:'xxxxxxxxxx',
                age:'25',
            },
            statement:{
                content:'我是来自山东的xxx，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。我做事踏实，再小的事情我也要一丝不苟地完成。给我一个机会，我会给您一个惊喜。'
            },
            projects:[
                {name:'VUE在线编辑器',link:'http://xxx/xxx.com',describe:'保存功能、编辑功能、分享功能、换肤功能、登录注册功能'},
                {name:'VUE在线编辑器',link:'http://xxx/xxx.com',describe:'保存功能、编辑功能、分享功能、换肤功能、登录注册功能'},
                {name:'VUE在线编辑器',link:'http://xxx/xxx.com',describe:'保存功能、编辑功能、分享功能、换肤功能、登录注册功能'},                             
            ],
            skills:[
                {name:'Html',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'CSS',describe:'完美还原设计稿'},
                {name:'javascript',describe:'完美还原设计稿'},              
            ],
            hobby:[
                {name:'阅读'},
                {name:'打羽毛球'},
                {name:'听歌'},               
            ],
            social:[
                {github:'http://github/xxx.com'},
                {zhihu:'http://zhihu/xxx.com'},
                
            ],
        },
        line:{
            stateself:'自我介绍 / STATEMENT',
            projects:'工作经历 / WORK EXPERIENCE',
            skills:'技能 / SKILLS',
        }
    }
})
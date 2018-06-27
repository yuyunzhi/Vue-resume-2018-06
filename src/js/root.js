
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
        showVisible:true,
        editVisible:false,
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
                content:'我是来自山东的xxx，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。给我一个机会，我会给您一个惊喜。'
            },
            projects:[
                {name:'无缝轮播',useSkill:'JavaScript、jQuery',link:'http://www.baidu.com',describe:'该无缝轮播能够自动播放、点击前后按钮切换图片、点击第N个灰色按钮切换到第N张图片。通过百分比布局实现更改图片尺寸不影响无缝轮播效果，通过jQuery动态生成与img数量相等的button。'},
                {name:'无缝轮播',useSkill:'JavaScript、jQuery',link:'http://www.baidu.com',describe:'该无缝轮播能够自动播放、点击前后按钮切换图片、点击第N个灰色按钮切换到第N张图片。通过百分比布局实现更改图片尺寸不影响无缝轮播效果，通过jQuery动态生成与img数量相等的button。'},
                
            ],
            skills:[
                {name:'Html、CSS、javascript',describe:'完美还原设计稿完美还原设计稿完美还原设计稿完美还原设计设计稿完美还原设计稿完美。'},
                {name:'jQuery',describe:'完美还原设计稿'}, 
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},                
            ],

            social:[
                {github:'http://github/xxx.com'},
                {zhihu:'http://zhihu/xxx.com'},
                
            ],
        },
        line:{
            stateself:'自我介绍 / STATEMENT',
            projects:'项目经历 / PROJECT EXPERIENCE',
            skills:'技能 / SKILLS',
        }
    },
    methods:{
        addProject(){
            this.resume.projects.push(
                {name:'无缝轮播',useSkill:'JavaScript、jQuery',link:'http://www.baidu.com',describe:'该无缝轮播能够自动播放、点击前后按钮切换图片、点击第N个灰色按钮切换到第N张图片。通过百分比布局实现更改图片尺寸不影响无缝轮播效果，通过jQuery动态生成与img数量相等的button。'},                
            )           
        },
        removeProject(index){
            this.resume.projects.splice(index,1)
        },
        addSkill(){
            this.resume.skills.push(
                {name:'jQuery',describe:'完美还原设计稿'},               
            )
        },
        removeSkill(index){
            this.resume.skills.splice(index,1)            
        }
    }
})
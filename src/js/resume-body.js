
window.resumebody={

    template:
    `
    <div>
        <span class="userNameBoundary" v-show="mode==='edit'">{{xyz}}</span>
        <aside-buttons v-on:change-btn-state="changeBtnState($event)" v-bind:user-has-login="userHasLogin"v-show="mode==='edit'"></aside-buttons>  

        <main class="white" v-cloak>
            <div class="resume">
                <section class="info" v-cloak>
                    <div class="infoShow"v-show="showVisible">
                        <div class="name">
                            <h1>{{displayresume.info.name}}</h1>
                            <p>求职岗位：<span>{{displayresume.info.job}}</span></p>
                        </div>
                        <div class="infomation">
                            <div class="iconAndContent">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-location"></use>
                                </svg>
                                <span class="content">{{displayresume.info.live}}</span>
                            </div>
                            <div class="iconAndContent">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-agentfillmtui"></use>
                                </svg> 
                                <span class="content">{{displayresume.info.age}}</span>
                            </div>
                            <div class="iconAndContent">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-iostelephone"></use>
                                </svg> 
                                <span class="content">{{displayresume.info.telephone}}</span>
                            </div>
                            <div class="iconAndContent">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-icon-email"></use>
                                </svg> 
                                <span class="content">{{displayresume.info.email}}</span>
                            </div>
                            <div class="iconAndContent">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-wechat"></use>
                                </svg> 
                                <span class="content">{{displayresume.info.wechat}}</span>
                            </div>
                        </div>
                    </div> 
                    <div class="infoEdit" v-show="editVisible">
                        <div class="name">
                            <div><span>姓 名</span><input type="text"v-model="displayresume.info.name"></div>
                            <div><span>居 住</span><input type="text"v-model="displayresume.info.live"></div>
                            <div><span>求职岗位</span><input type="text"v-model="displayresume.info.job"></div>
                        </div>
                        <div class="information">
                            <div><span>年 龄</span><input type="text"v-model="displayresume.info.age"></div>
                            <div><span>电 话</span><input type="text"v-model="displayresume.info.telephone"></div>
                            <div><span>邮 箱</span><input type="text"v-model="displayresume.info.email"></div>
                            <div><span>微 信</span><input type="text"v-model="displayresume.info.wechat"></div>
                        </div>

                    </div>   
                </section> 

                <split-line v-bind:line-name="line.stateself"></split-line>
                
                <section class="statement">
                    <div class="statementShow" v-show="showVisible" v-cloak>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{displayresume.statement.content}}</span></p>
                    </div>
                    <div class="statementEdit" v-show="editVisible"v-cloak>
                        <textarea type="text" v-model="displayresume.statement.content"></textarea>
                    </div>
                </section>

                <split-line v-bind:line-name="line.projects"></split-line>

                <section class="projects">
                    <ul v-cloak>
                        <li class="oneProject" v-for="(skill,index) in displayresume.projects">
                            <div class="projectShow" v-show="showVisible">
                                <div class="projectName">
                                    <p>{{skill.name}}</p>
                                    <p>{{skill.useSkill}}</p>
                                    <a v-bind:href="skill.link" target="_blank">点击预览</a>
                                </div>
                                <p class="projectDescribe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{skill.describe}}</p>                
                            </div>

                            <div class="projectEdit"v-show="editVisible">
                                <div class="name">
                                    <div><span>名称</span><input type="text"v-model="skill.name"></div>
                                    <div><span>技术</span><input type="text"v-model="skill.useSkill"></div>                                  
                                    <div><span>链接</span><input type="text"v-model="skill.link"></div> 
                                    <div class="removeProject"  @click="removeProject(index)"  v-show="editVisible">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-removecircleo"></use>
                                        </svg>
                                    </div>
                                </div>
                                <textarea type="text" v-model="skill.describe"></textarea>                                                      
                            </div>   
                        </li>
                        <div class="addProject" v-show="editVisible" >
                            <svg class="icon" aria-hidden="true" v-on:click="addProject">
                                <use xlink:href="#icon-add"></use>
                            </svg>
                        </div>
                    </ul>
                                
                </section>

                <split-line v-bind:line-name="line.skills"></split-line>                   

                <section class="skills" v-cloak>
                        <ul>
                            <li v-for="(skill,index) in displayresume.skills">
                                <div class="skillShow"v-show="showVisible">
                                    <span class="skillName">
                                        <span class="name">{{skill.name}}</span>
                                    </span>
                                    <span class="skillDescribe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{skill.describe}}</span>
                                </div>
                                <div class="skillEdit"v-show="editVisible">
                                    <div class="name">
                                        <div><span>技能</span><input type="text"v-model="skill.name"></div>                                  
                                        <div class="removeSkill" @click="removeSkill(index)" >
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-removecircleo"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <textarea type="text" v-model="skill.describe"></textarea>                                                                                     
                                </div>
                            </li>
                        </ul>
                        <div class="addSkill"v-show="editVisible">
                            <svg class="icon" aria-hidden="true" v-on:click="addSkill">
                                <use xlink:href="#icon-add"></use>
                            </svg>
                        </div>
            </section>
            </div>            
        </main>

        <aside class="img">
            <img src="./img/1530004863(1).png" >
        </aside>

        <div class="shareLink" v-show="shareVisible" v-cloak>
            <div>
                <span class="content">自动生成分享链接：</span>
                <svg class="icon" aria-hidden="true" @click="shareVisible=false">
                    <use xlink:href="#icon-removecircleo"></use>
                </svg>
            </div>
            <textarea class="link"readonly>{{sharelink}}</textarea>
        </div>

    </div>
    `,
    data(){
        return{
            showVisible:true,
            editVisible:false,
            userHasLogin:false,
            shareVisible:false,
            isPrint:false,
            skinVisible:false,
            resume:{
                info:{
                    name:'张三',
                    job:'前端工程师',
                    live:'上海嘉定',
                    telephone:'13877777777',
                    email:'zhangsan@qq.com',
                    wechat:'88888888',
                    age:'25',
                },
                statement:{
                    content:'我是来自山东的张三，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。给我一个机会，我会给您一个惊喜。'
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
            },
            preivewResume:{
            },
            originalResume:{
                info:{
                    name:'张三',
                    job:'前端工程师',
                    live:'上海嘉定',
                    telephone:'13877777777',
                    email:'zhangsan@qq.com',
                    wechat:'88888888',
                    age:'25',
                },
                statement:{
                    content:'我是来自山东的张三，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。给我一个机会，我会给您一个惊喜。'
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
            },
            line:{
                stateself:'自我介绍 / STATEMENT',
                projects:'项目经历 / PROJECT EXPERIENCE',
                skills:'技能 / SKILLS',
            },
            xyz:"",
            sharelink:'xxx',
            mode:'edit',
        }
    },
    computed:{
        displayresume(){
            return this.mode === 'preview' ? this.preivewResume : this.resume
        }
    },
    created:function(){
        this.updateUserBoundary()
        this.initBoundary()
    },
    mounted:function(){
        window.eventHub.$on('user-has-login',()=>{
            this.userHasLogin=true
            this.updateUserBoundary()
            this.getShareLink()
        })
    },
    methods:{
        updateUserBoundary(){
            let currentUser = AV.User.current();
            if(currentUser==null||currentUser==undefined){
                this.xyz="未登录"
                return
            }else{
                this.userHasLogin=true
                this.xyz=currentUser.attributes.username
                let userId = currentUser.id

                this.getResume(userId).then((userData)=>{                  
                    let resume = JSON.parse(userData.attributes.resume)
                    this.resume=resume
                })
            }
        },
        changeSkin(value){
            this.skinClass=value
        },
        saveResume(){
            let user = AV.Object.createWithoutData('User', AV.User.current().id);
            // 修改属性
            user.set('resume', JSON.stringify(this.resume));
            // 保存到云端
            user.save();
        },
        getResume(userId){
            let query = new AV.Query('User');
            return query.get(userId).then((userData)=>{
                return userData
            },  (error)=> {
                console.log('获取数据失败')
              // 异常处理
            });
        },
        initBoundary(){
            //获取预览用户的 id
            let search = location.search
            let regex = /user_id=([^&]+)/
            let matches = search.match(regex)
            let userId
            if (matches){
                //预览页面
                userId = matches[1]
                this.mode = 'preview'
                this.getResume(userId).then((userData)=>{               
                    this.preivewResume= JSON.parse(userData.attributes.resume)
                })
                this.getShareLink()
            }else{
                //用户登录页面
                this.updateUserBoundary()
                this.getShareLink()
            }

        },
        getShareLink(){
            let currentUser = AV.User.current()
            if(currentUser){
                this.sharelink=location.origin+location.pathname+'?user_id='+currentUser.id  
            }else{
                this.sharelink='未登录，无法获取链接'
            }      
        }, 
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
        },
        changeBtnState($event){
            //$event的值为login logout signout save edit share print skin 
            if($event==='login'){ //点击登陆
                this.$router.push('/login')
                //this.userHasLogin=true
                
            }else if($event==='logout'){ //点击登出
                AV.User.logOut();
                this.editVisible=false
                this.showVisible=true
                this.updateUserBoundary()
                this.userHasLogin=false
                this.resume=this.originalResume

            }else if($event==='signin'){ //点击注册
                this.updateUserBoundary()

            }else if($event==='edit'){ //点击编辑
                this.editVisible=!this.editVisible
                this.showVisible=!this.showVisible
                
            }else if($event==='save'){ //点击保存
                this.editVisible=false
                this.showVisible=true
                this.saveResume()
                this.getShareLink()

            }else if($event==='share'){ //点击分享
                this.shareVisible=true

            }else if($event==='print'){//点击打印
                window.print()
                this.isPrint=true

            }
        }
    }
}



Vue.component('resume-body',resumebody)
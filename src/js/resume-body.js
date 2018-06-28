
window.resumebody={
    template:
    `
<div>

<aside-buttons v-on:change-btn-state="changeBtnState($event)"></aside-buttons>  

<main class="white">
    <div class="resume">
        <section class="info" v-cloak>
            <div class="infoShow"v-show="showVisible">
                <div class="name">
                    <h1>{{resume.info.name}}</h1>
                    <p>求职岗位：<span>{{resume.info.job}}</span></p>
                </div>
                <div class="infomation">
                    <div class="iconAndContent">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-location"></use>
                        </svg>
                        <span class="content">{{resume.info.live}}</span>
                    </div>
                    <div class="iconAndContent">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-agentfillmtui"></use>
                        </svg> 
                        <span class="content">{{resume.info.age}}</span>
                    </div>
                    <div class="iconAndContent">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-iostelephone"></use>
                        </svg> 
                        <span class="content">{{resume.info.telephone}}</span>
                    </div>
                    <div class="iconAndContent">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-icon-email"></use>
                        </svg> 
                        <span class="content">{{resume.info.email}}</span>
                    </div>
                    <div class="iconAndContent">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wechat"></use>
                        </svg> 
                        <span class="content">{{resume.info.wechat}}</span>
                    </div>
                </div>
            </div> 
            <div class="infoEdit" v-show="editVisible">
                <div class="name">
                    <div><span>姓 名</span><input type="text"v-model="resume.info.name"></div>
                    <div><span>居 住</span><input type="text"v-model="resume.info.live"></div>
                    <div><span>求职岗位</span><input type="text"v-model="resume.info.job"></div>
                </div>
                <div class="information">
                    <div><span>年 龄</span><input type="text"v-model="resume.info.age"></div>
                    <div><span>电 话</span><input type="text"v-model="resume.info.telephone"></div>
                    <div><span>邮 箱</span><input type="text"v-model="resume.info.email"></div>
                    <div><span>微 信</span><input type="text"v-model="resume.info.wechat"></div>
                </div>

            </div>   
        </section> 

        <split-line v-bind:line-name="line.stateself"></split-line>
        
        <section class="statement">
            <div class="statementShow" v-show="showVisible" v-cloak>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{resume.statement.content}}</span></p>
            </div>
            <div class="statementEdit" v-show="editVisible"v-cloak>
                <textarea type="text" v-model="resume.statement.content"></textarea>
            </div>
        </section>

        <split-line v-bind:line-name="line.projects"></split-line>

        <section class="projects">
            <ul v-cloak>
                <li class="oneProject" v-for="(skill,index) in resume.projects">
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
                    <li v-for="(skill,index) in resume.skills">
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
</div>
    `,
    data(){
        return{
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
        },
        changeBtnState($event){
            //$event的值为login logout signout save edit share print skin 
            if($event==='login'){ //点击登陆
                

            }else if($event==='logout'){ //点击登出

            }else if($event==='signout'){ //点击注册

            }else if($event==='edit'){ //点击编辑
                this.editVisible=true
                this.showVisible=false
                
            }else if($event==='save'){ //点击保存
                this.editVisible=false
                this.showVisible=true

                var user = AV.Object.extend('user');
                // 新建对象
                var a = new user();
                // 设置名称
                console.log(this.resume)
                a.set('resume',this.resume);
                // 设置优先级
                a.save().then((xxx)=>{
                  console.log(xxx);
                }, function (error) {
                  console.error(error);
                });

            }else if($event==='share'){ //点击分享

            }else if($event==='skin'){ //点击换肤

            }
        }
    }
}

Vue.component('resume-body',resumebody)
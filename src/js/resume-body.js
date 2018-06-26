
window.resumebody={
    template:
    `
    <div>{{yyy}}</div>
    `,
    data(){
        return{
            yyy:567
        }
    }
}

Vue.component('resume-body',resumebody)

const routes = [
    { path: '/', component : window.resumebody},
    { path: '/login', component : window.login},
    { path: '/signin', component : window.signin},
    // { path: '/', component : window.login},
    
]



const router = new VueRouter({
    routes 
})

const app = new Vue({
    router,
}).$mount('#app')
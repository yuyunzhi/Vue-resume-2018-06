
const routes = [
    { path: '/', component : window.resumebody},

]



const router = new VueRouter({
    routes 
})

const app = new Vue({
    router,
}).$mount('#app')
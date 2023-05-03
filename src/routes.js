import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import Portfolio from './pages/Portfolio.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path:'/', //rotta url 
        name:'home',    //nome rotta da inserire in router-link
        component:Home,
    },
    {
        path:'/about', 
        name:'about',    
        component:AboutUs,
    },
    {
        path:'/portfolio', 
        name:'portfolio',    
        component:Portfolio,
    }
],
})
export {router}
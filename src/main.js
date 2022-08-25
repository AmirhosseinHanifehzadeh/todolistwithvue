import { createApp } from 'vue'
// adding css
import './index.css'

//adding components 
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
//adding components 
import TaskPage from "./components/TaskPage.vue";
import AboutComponent from "./components/AboutComponent.vue";

// adding icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faClose} from "@fortawesome/free-solid-svg-icons"
library.add(faClose)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/tasks'},
        {path: '/tasks', component: TaskPage},
        {path: '/about', component: AboutComponent},
        {path: '/:notFound(.*)', redirect: '/tasks'}
    ]
})

const app = createApp(App);

app.component('fontawesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');



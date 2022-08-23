import { createApp } from 'vue'
// adding css
import './index.css'

//adding components 
import App from './App.vue'
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/TodoList.vue"
import didList from "./components/didList.vue"
import weatherComponent from "./components/weatherComponent.vue"
import notificationComponent from "./components/notificationComponent"

// adding icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faClose} from "@fortawesome/free-solid-svg-icons"
library.add(faClose)


const app = createApp(App);

app.component('to-do-input', ToDoInput);
app.component('to-do-list', ToDoList);
app.component('did-list', didList);
app.component('weather-component', weatherComponent);
app.component('fontawesome-icon', FontAwesomeIcon);
app.component('notification-component', notificationComponent)

app.mount('#app');



<template>
<main class="w-full h-full">
  <weather-component />
  <notification-component 
  @closeNotification="closeNotification" 
  v-if="showNotification" 
  class="transition"/>
  <header class="w-1/1 h-20 flex items-center bg-black text-white">
    <h1 class="mx-auto my-0 text-2xl">to do list</h1>
  </header>

  <router-view></router-view>

  <footer class="footer flex w-full h-20 items-center fixed bottom-0 bg-black text-white">
    <div class="container w-11/12 justify-center flex mx-auto">
      <router-link to="/tasks" class="hover:scale-110 transition-all">home</router-link>
      <p class="mx-auto w-fit">©️ copyright to AHHM</p>
      <router-link to="/about" class=" hover:scale-110 transition-all">about us</router-link>
    </div>
  </footer>


</main>

</template>

<script>
import WeatherComponent from "./components/WeatherComponent";
import NotificationComponent from "./components/NotificationComponent";

export default{
  components: {
    WeatherComponent,
    NotificationComponent
  },
  data() {
      return {
          showNotification: false,
      };
  },
  methods: {
      closeNotification(){
        this.showNotification = false;
      },
      
      openNotif(){
        this.showNotification = true
        setTimeout(() => {
          this.showNotification = false
        }, 4000);
      }
  },
 
}
</script>


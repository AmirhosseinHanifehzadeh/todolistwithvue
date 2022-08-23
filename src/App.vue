<template>
<main class="w-full h-full">
  <weather-component />
  <notification-component 
  @closeNotification="closeNotification" 
  v-if="showNotification" 
  :editing-status="editing"
  class="transition"/>
  <header class="w-1/1 h-20 flex items-center bg-black text-white">
    <h1 class="mx-auto my-0 text-2xl">to do list</h1>
  </header>
  <div class="my-5 ml-[50%] translate-x-[-30%]">
    <to-do-input @add="addTask" :editing-task="editingTask" />
  </div>
  <h1 class="text-xl mx-auto flex justify-center">tasks</h1>
  <ul class="tasks w-3/5 my-0 mx-auto mt-10">
    <to-do-list 
    v-for="task in tasks"
    :key="task"
    :title="task"
    @delete="deleteTask"
    @done="doneTask"
    @edit="editTask"
    />
  </ul>
  <h1 class="text-xl mx-auto flex justify-center my-10">done</h1>
  <ul class="tasks w-3/5 my-0 mx-auto mt-10">
    <did-list 
    v-for="didtask in didTaskList"
    :key="didtask"
    :title="didtask"
    :didTitle="didtask"
    @deleteDidTask="deleteDidTask"
    @uncheck="uncheckTask"
    />
  </ul>
  <footer class="footer flex w-full h-20 items-center justify-center fixed bottom-0 ">
      <p>©️ copyright to AHHM</p>
  </footer>


</main>

</template>

<script>
export default{
    data() {
        return {
            tasks: JSON.parse(localStorage.getItem('tasks')),
            didTaskList: JSON.parse(localStorage.getItem('didTasks')),
            showNotification: false,
            editingTask: '',
        };
    },
    methods: {
        addTask(taskTitle) {
            this.tasks.push(taskTitle);
            this.showNotification = true
            setTimeout(() => {
              this.showNotification = false;
            }, 4000);
            
        },
        deleteTask(title) {
            this.tasks = this.tasks.filter(value => value !== title);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            console.log("deleted");
        },
        doneTask(title) {
            this.tasks = this.tasks.filter(value => value !== title);
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
            this.didTaskList.push(title);
            localStorage.setItem('didTasks', JSON.stringify(this.didTaskList));

        },
        deleteDidTask(title) {
            this.didTaskList = this.didTaskList.filter(value => value !== title);
            localStorage.setItem('didTasks', JSON.stringify(this.didTaskList))
        },
        uncheckTask(title) {
            this.didTaskList = this.didTaskList.filter(value => value !== title);
            this.tasks.push(title);
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        closeNotification(){
          this.showNotification = false;
        },
        editTask(title){
          this.tasks = this.tasks.filter(value => value !== title);  
          localStorage.setItem('tasks', JSON.stringify(this.tasks))       
          this.editingTask = title;
          this.editing = true;
        }        
    },
 
    provide() {
      return {
        editing: this.editing
      }
    },

}
</script>


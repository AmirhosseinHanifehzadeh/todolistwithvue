<template>
    <div class="w-100 h-[70px] flex justify-between text-lg items-center bg-gray rounded-lg px-3 m-2 box-border text-black">
        <div class="text flex">
            <input type="checkbox" @click="checkingTask"/>
            <h3 class="ml-1">{{ this.title }}</h3>
        </div>
        <div class="btns-container w-1/4 flex justify-around">
            <button class="w-[80px] border-none outline-none hover:scale-110 transition" @click="edit">edit</button>
            <button @click="deleteTask" class="w-[80px] border-none outline-none hover:scale-110 transition">delete</button>
        </div>
    </div>
</template>


<script>
export default {
    props: ['title'],
    methods:{
        deleteTask(){
            this.$emit('delete', this.title);
        },
        checkingTask(){
            this.$emit('done', this.title);
        },

        edit(){
            this.$emit('edit', this.title)
        }
    }
}
</script>
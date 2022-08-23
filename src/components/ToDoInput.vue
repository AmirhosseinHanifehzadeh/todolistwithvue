<template>
<section>
    <input type="text" v-model="addingTask" class="search-box py-1 outline-none border-none inline-block text-lg w-3/5 left-1/2" placeholder="add a new activity..."/>
    <button @click="add" class="h-8 border-none outline-none bg-transparent rounded-3xl box-border w-20 bg-black text-white transition hover:bg-gray hover:text-black">add</button>
</section>
</template>

<script>
export default{
    data() {
        return {
            addingTask : this.editingTask
        }
    },
    methods: {
        add(){
            this.$emit('add', this.addingTask);
            this.addingTask = '';
            this.editing = false
        }
    },
    props: ['editingTask', 'editingStatus'],
    
    watch: {
        editingTask(value){
            this.addingTask = value;
        }
    },

    inject: ['editing']
    
}
</script>
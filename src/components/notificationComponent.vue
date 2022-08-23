<template>
    <div class="notification-container absolute w-[380px] h-[50px] bg-gray flex right-0 top-3 items-center px-2 rounded justify-between  text-black" id="notification">
        <div class="notif-text">task added successfully</div>
        <fontawesome-icon icon="close" @click="closeNotif" class="svg text-lg color-yellow"/>
    </div>
</template>


<script>
export default{
    methods:{
        closeNotif(){
            this.$emit('closeNotification')
        }
    },

    props: ['editingStatus']
}
</script>

<style scoped>
.svg{
    color: #EB1D36;
}
</style>
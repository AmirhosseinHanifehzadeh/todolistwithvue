<template>
    <section class="w-100 h-[70px] flex justify-between text-lg items-center bg-gray rounded-lg px-3 m-2 box-border text-black">
        <div class="text flex">
            <input type="checkbox" checked @click="$emit('uncheck', didTitle)"/>
            <h2 class="ml-1 line-through">{{this.didTitle}}</h2>
        </div>
        <div class="btns-container w-1/4 flex justify-around">
            <button @click="$emit('deleteDidTask', didTitle)" class="w-[80px] border-none outline-none hover:scale-110 transition">delete</button>
        </div>
    </section>
</template>

<script>
export default {
    props: ['didTitle'],
    
}
</script>





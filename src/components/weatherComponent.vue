<template>
    <div class="weather-card absolute flex px-3 mt-3 ml-3  text-white rounded justify-start items-center">
        <div class="icon">
            <img :src="iconUrl" class="icon-img">
        </div>
        <div class="info">
            <div class="city">{{this.cityName}}</div>
            <div class="temp">{{this.temperature}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cityName: '',
            temperature: '', 
            iconUrl: ''
        }
    },

    created() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=9b5f36ed48bfe552e2610df7b09605eb&units=metric')
            .then(res => res.json())
            .then(data => {
                this.cityName = data.name;
                this.temperature = data.main.temp;
                this.iconUrl = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
            })
    }
}
</script>

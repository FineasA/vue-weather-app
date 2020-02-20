<template>
  <div class="weather-card animated fadeIn">
    <div class="card" style="width: 20em">
      <img :src="weatherInfo.iconUrl" class="card-img-top" alt="weather_icon" />

      <div class="card-body">
        <h5 class="card-title">
          {{ weatherInfo.cityName }}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ weatherInfo.weatherDescription }}
        </h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {{ weatherInfo.temperature }} {{ weatherInfo.unitSymbol }} °
          </li>
          <li class="list-group-item">
            Feels like: {{ weatherInfo.tempFeelsLike }}
            {{ weatherInfo.unitSymbol }} °
          </li>
          <li class="list-group-item">
            Humidity: {{ weatherInfo.humidity }} %
          </li>
          <li class="list-group-item">
            Min Temp: {{ weatherInfo.tempMin }} {{ weatherInfo.unitSymbol }} °
          </li>
          <li class="list-group-item">
            Max Temp: {{ weatherInfo.tempMax }} {{ weatherInfo.unitSymbol }} °
          </li>
          <li class="list-group-item">
            Condition: {{ weatherInfo.weatherCondition }}
          </li>
        </ul>
      </div>
      <button class="btn btn-primary" @click="backToForm">
        Search Again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherInfo: Object
  },
  methods: {
    backToForm() {
      this.$emit("backToForm");
    }
  }
};
</script>

<style>
.card-img-top {
  width: 15%;
  margin: 0 auto;
  object-fit: cover;
}
.spinner-border {
  margin: 0 auto;
}
.weather-card {
  padding-left: 50px;
}
</style>

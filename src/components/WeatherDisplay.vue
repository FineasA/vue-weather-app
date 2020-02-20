<template>
  <div class="card" style="width: 20em">
    <div v-if="iconLoaded" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <img
      v-else-if="iconLoaded"
      :src="weatherInfo.iconUrl"
      class="card-img-top"
      alt="weather_icon"
    />

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
        <li class="list-group-item">Humidity: {{ weatherInfo.humidity }} %</li>
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
  </div>
</template>

<script>
// import { EventBus } from "../main.js";

export default {
  props: {
    weatherInfo: Object,
    iconLoaded: Boolean
  }
};
</script>

<style>
.card-img-top {
  width: 15%;
  margin: 0 auto;
  object-fit: cover;
}
</style>

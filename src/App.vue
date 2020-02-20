<template>
  <div class="container">
    <h2>Weather App</h2>
    <hr />
    <weather-form></weather-form>
    <weather-display
      v-if="citySelected"
      :weatherInfo="weatherInfo"
      :iconLoaded="iconLoaded"
    ></weather-display>
  </div>
</template>

<script>
import WeatherForm from "./components/WeatherForm.vue";
import WeatherDisplay from "./components/WeatherDisplay.vue";
import { EventBus } from "./main.js";

export default {
  components: {
    WeatherForm,
    WeatherDisplay
  },
  data() {
    return {
      citySelected: false,
      weatherInfo: null,
      iconLoaded: false
    };
  },
  created() {
    EventBus.$on("citySelected", data => {
      this.citySelected = true;
      this.weatherInfo = data;
    });
    EventBus.$on("iconLoaded", () => {
      this.iconLoaded = true;
    });
  }
};
</script>

<style></style>

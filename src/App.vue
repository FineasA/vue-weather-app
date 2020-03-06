<template>
  <div class="container d-flex justify-content-around vertical-center">
    <div class="row">
      <h2 class="title-app animated bounce delay-0.5s">Weather App</h2>
      <hr />
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <component
          :is="currentComponent"
          @icon-loading="currentComponent = 'loading'"
          @icon-loaded="currentComponent = 'weather-display'"
          @backToForm="currentComponent = 'weather-form'"
          :weatherInfo="weatherInfo"
        ></component>
      </transition>
    </div>
  </div>
</template>

<script>
import WeatherForm from "./components/WeatherForm.vue";
import WeatherDisplay from "./components/WeatherDisplay.vue";
import Loading from "./components/Loading.vue";
import ErrorDisplay from "./components/ErrorDisplay.vue";
import { EventBus } from "./main.js";

export default {
  components: {
    WeatherForm,
    WeatherDisplay,
    Loading,
    ErrorDisplay
  },
  data() {
    return {
      citySelected: false,
      weatherInfo: null,
      iconLoaded: false,
      currentComponent: "weather-form"
    };
  },
  methods: {
    test(value) {
      console.log(value);
    }
  },
  created() {
    EventBus.$on("citySelected", data => {
      this.citySelected = true;
      this.weatherInfo = data;
    });
    EventBus.$on("error-occurred", () => {
      this.currentComponent = "error-display";
    });
  }
};
</script>

<style>
.vertical-center {
  min-height: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
}

.form-group {
  padding-left: 50px;
}

.title-app {
  position: relative;
}
</style>

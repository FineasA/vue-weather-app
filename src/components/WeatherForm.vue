<template>
  <form v-on:submit.prevent>
    <div class="form-group">
      <span>
        <label for="city">Enter City</label>
        <input type="text" class="form-control" id="city" v-model="city" />
        <br />
        <label for="units">Choose units:</label>
        <select class="form-control" id="units" v-model="units">
          <option value="imperial">Fahrenheit</option>
          <option value="metric">Celsius</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </span>

      <br />
      <button class="btn btn-primary" @click="submitCity">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      API_KEY: "c41278b63a33e456e869d11ff99c94c1",
      city: "",
      units: "",
      weatherInfo: {
        cityName: "",
        weatherCondition: "",
        weatherDescription: "",
        temperature: 0,
        tempFeelsLike: 0,
        humidity: 0,
        tempMin: 0,
        tempMax: 0,
        unitSymbol: "",
        icon: ""
      },
      iconLoaded: false
    };
  },
  methods: {
    loadTimer() {
      setTimeout(() => {
        this.iconLoaded = true;
      }, 3000);
      EventBus.$emit("iconLoaded");
    },
    submitCity() {
      if (this.units === "imperial") {
        this.weatherInfo.unitSymbol = "F";
      } else if (this.units === "metric") {
        this.weatherInfo.unitSymbol = "C";
      } else if (this.units === "kelvin") {
        this.weatherInfo.unitSymbol = "K";
      }
      this.$http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=${this.units}`
        )
        .then(response => {
          console.log(response.data);
          //get city name
          this.weatherInfo.cityName = response.data.name;
          //get weather condition
          this.weatherInfo.weatherCondition = response.data.weather[0].main;
          //get weather description
          this.weatherInfo.weatherDescription =
            response.data.weather[0].description;
          //get weather temperature
          this.weatherInfo.temperature = response.data.main.temp;
          //get weather feels_like
          this.weatherInfo.tempFeelsLike = response.data.main.feels_like;
          //get weather humidity
          this.weatherInfo.humidity = response.data.main.humidity;
          //get weather temperature min
          this.weatherInfo.tempMin = response.data.main.temp_min;
          //get weather temperature max
          this.weatherInfo.tempMax = response.data.main.temp_max;
          //get weather icon
          this.weatherInfo.iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        })
        .catch(error => {
          console.log(error);
        });
      this.loadTimer();
      console.log("WeatherInfo: ", this.weatherInfo);
      EventBus.$emit("weatherInfo", this.weatherInfo);
      EventBus.$emit("citySelected", this.weatherInfo);
    }
  }
};
</script>

<style></style>

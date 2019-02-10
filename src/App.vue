<template>
  <div id="app">
    <Heading msg="Investment interest calculator"/>
    <div id="sliderContainer">
    <div id="sliders">
      <h3>Time in years</h3>
      <vue-slider min="1" max="70" height="15" ref="slider1" v-model="year"></vue-slider>
      <h3>Interest in percents</h3>
      <vue-slider min="1" max="20" height="15" ref="slider2" v-model="interest"></vue-slider>
      <h3>Capital to begin with in euros</h3>
      <vue-slider
        min="0"
        max="100000"
        interval="1000"
        height="15"
        ref="slider3"
        v-model="startingCapital"
      ></vue-slider>
      <h3>Additional recurring investments monthly in euros</h3>
      <vue-slider
        min="0"
        max="10000"
        height="15"
        interval="100"
        ref="slider4"
        v-model="recurringInvestment"
      ></vue-slider>
    </div>
    </div>

    <interest-calculator
      :year="year"
      :interest="interest"
      :startingCapital="startingCapital"
      :recurringInvestment="recurringInvestment"
    />
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import vueSlider from "vue-slider-component";
import InterestCalculator from "./components/InterestCalculator.vue";

export default {
  name: "app",
  components: {
    Heading,
    vueSlider,
    InterestCalculator
  },
  data() {
    return {
      year: 10,
      interest: 8,
      startingCapital: 0,
      recurringInvestment: 1500
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#sliderContainer {
  width: 60%;
    margin: auto;
}
</style>

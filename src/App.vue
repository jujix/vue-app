<template>
  <div id="app">
    <Heading msg="Investment interest calculator" />
    <div id="sliders">
      <h3>Time in years</h3>
      <vue-slider min="1" max="70" height="15" ref="slider1" v-model="year"></vue-slider>
      <h3>Interest in percents</h3>
      <vue-slider min="1" max="20" height="15" ref="slider2" v-model="interest"></vue-slider>
      <h3>Capital to begin with in euros</h3>
      <vue-slider min="0" max="100000" interval="1000" height="15" ref="slider3" v-model="startingCapital"></vue-slider>
      <h3>Additional recurring investments monthly in euros</h3>
      <vue-slider min="0" max="100000" height="15" interval="100" ref="slider4" v-model="totalCapital"></vue-slider>
    </div>

    <br>
    <br>

    <InterestTable
      :year="year"
      :investment="interest"
      :startingCapital="startingCapital"
      :totalCapital="totalCapital"
    />

    <br>
    <br>

    <b>Total accumulated capital: {{ totalCapital }}</b>
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import InterestTable from "./components/InterestTable.vue";
import vueSlider from "vue-slider-component";

export default {
  name: "app",
  components: {
    Heading,
    InterestTable,
    vueSlider
  },
  data() {
    return {
      year: 1,
      interest: 1,
      startingCapital: 0,
      totalCapital: 0
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
</style>

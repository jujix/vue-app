<template>
  <div id="app">
    <FrontPage msg="Investment interest calculator"/>
     <div>
    <h3>Time in years</h3>
    <vue-slider ref="slider" v-model="value"></vue-slider>
        <h3>Interest in percents</h3>
    <vue-slider ref="slider" v-model="value"></vue-slider>
        <h3>Capital to begin with in euros</h3>
    <vue-slider ref="slider" v-model="value"></vue-slider>
        <h3>Additional recurring investments monthly in euros</h3>
    <vue-slider ref="slider" v-model="value"></vue-slider>
  </div>
  </div>
</template>

<script>
import FrontPage from './components/InvestmentCalculator.vue'
import vueSlider from 'vue-slider-component'

export default {
  name: 'app',
  components: {
    FrontPage,
    vueSlider
  },
    data: {
    value: 1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <FrontPage msg="Investment interest calculator"/>
    <div id="sliders">
      <h3>Time in years</h3>
      <vue-slider min="1" max="70" height="15" ref="slider1" v-model="value1"></vue-slider>
      <h3>Interest in percents</h3>
      <vue-slider min="1" max="20" height="15" ref="slider2" v-model="value2"></vue-slider>
      <h3>Capital to begin with in euros</h3>
      <vue-slider min="0" max="100000" interval="1000" height="15" ref="slider3" v-model="value3"></vue-slider>
      <h3>Additional recurring investments monthly in euros</h3>
      <vue-slider min="0" max="10000" height="15" interval="100" ref="slider4" v-model="value4"></vue-slider>
    </div>

    <br>
    <br>

    <div id="calculatedInterestTable">
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Investment</th>
            <th>interest</th>
            <th>Capital</th>
          </tr>
          <tr>
            <th>{{value1}}</th>
            <th>{{value2}}</th>
            <th>{{value3}}</th>
            <th>{{value4}}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <br>

    <b>Total accumulated capital: 12121</b>
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
  data () {
    return {
      value1: 1,
      value2: 1,
      value3: 0,
      value4: 0
    }
  }
}
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

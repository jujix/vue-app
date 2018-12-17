<template>
  <div id="app">
    <Heading msg="Investment interest calculator"/>
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

    <br>
    <br>

    <InterestTable
      :year="year"
      :investment="interest"
      :startingCapital="startingCapital"
      :recurringInvestment="recurringInvestment"
    />

    <br>
    <br>
    <button
      v-on:click="calculateTotalEarnings(year, interest, startingCapital, recurringInvestment)"
    >Calculate earnings</button>

    <br>
    <br>

    <b>Total accumulated capital: {{ recurringInvestment }}</b>
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
  methods: {
    calculateStartingCapitalIncome: function(
      startingCapital,
      year,
      interest,
      roundToPlaces
    ) {
      var interestRate = interest / 100 + 1;
      var gainedInterestFromTheStartOfTheYear = (
        startingCapital * Math.pow(interestRate, year)
      ).toFixed(roundToPlaces);
      return gainedInterestFromTheStartOfTheYear;
    },
    calculateRecurringInterestIncome: function(
      recurringInvestment,
      year,
      interest,
      roundToPlaces
    ) {
      var totalPayments = (recurringInvestment * 12) * year;
      var months = year * 12;
      var monthlyRate = interest / 12 / 100;

      var gainedInterestFromMonthlyPayments = (recurringInvestment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate).toFixed(roundToPlaces);
      console.log("gainedInterestFromMonthlyPayments: ", gainedInterestFromMonthlyPayments, " Total payments: ", totalPayments);
      return gainedInterestFromMonthlyPayments;
    },
    calculateTotalEarnings: function(
      year,
      interest,
      startingCapital,
      recurringInvestment
    ) {
      var gainedInterestFromTheStartOfTheYear = this.calculateStartingCapitalIncome(
        startingCapital,
        year,
        interest,
        2
      );
      var gainedInterestFromRecurringInvestmentsYearly = this.calculateRecurringInterestIncome(
        recurringInvestment,
        year,
        interest,
        2
      );
      var totalWealth =
        Number(gainedInterestFromTheStartOfTheYear) +
        Number(gainedInterestFromRecurringInvestmentsYearly);
      alert("Total capital is " + totalWealth);
    }
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
</style>

<template>
  <div>
    <div id="totalCapital">
      <h2>
        <b>Total accumulated capital: {{ this.calculateTotalEarnings(year, interest, startingCapital, recurringInvestment)}}</b>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterestCalculator',
  components: {},
  props: {
    year: Number,
    interest: Number,
    startingCapital: Number,
    recurringInvestment: Number
  },
  data () {
    return {
      totalAccumulatedCapital: 0
    }
  },
  methods: {
    calculateStartingCapitalIncome: function (startingCapital, year, interest) {
      const interestRate = interest / 100 + 1
      const gainedInterestFromTheStartOfTheYear = (
        startingCapital * Math.pow(interestRate, year)
      ).toFixed(0)
      return gainedInterestFromTheStartOfTheYear
    },
    calculateRecurringInterestIncome: function (recurringInvestment, year, interest) {
      const months = year * 12
      const monthlyRate = interest / 12 / 100

      const gainedInterestFromMonthlyPayments = (
        (recurringInvestment * (Math.pow(1 + monthlyRate, months) - 1)) /
        monthlyRate
      ).toFixed(0)
      return gainedInterestFromMonthlyPayments
    },
    calculateTotalEarnings: function (year, interest, startingCapital, recurringInvestment) {
      const totalAccumulatedCapital = Number(this.calculateStartingCapitalIncome(startingCapital, year, interest)) +
        Number(this.calculateRecurringInterestIncome(recurringInvestment, year, interest))
      return totalAccumulatedCapital
    }
  }
}
</script>

<style scoped>
#totalCapital {
  margin-top: 5%;
}
</style>

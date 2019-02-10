<template>
  <div>
    <div id="totalCapital">
      <h2>
        <b>
          Total accumulated capital: {{ this.calculateTotalEarnings(
          year,
          interest,
          startingCapital,
          recurringInvestment)}}
        </b>
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
    calculateStartingCapitalIncome: function (
      startingCapital,
      year,
      interest,
      roundToPlaces
    ) {
      var interestRate = interest / 100 + 1
      var gainedInterestFromTheStartOfTheYear = (
        startingCapital * Math.pow(interestRate, year)
      ).toFixed(roundToPlaces)
      return gainedInterestFromTheStartOfTheYear
    },
    calculateRecurringInterestIncome: function (
      recurringInvestment,
      year,
      interest,
      roundToPlaces
    ) {
      var months = year * 12
      var monthlyRate = interest / 12 / 100

      var gainedInterestFromMonthlyPayments = (
        (recurringInvestment * (Math.pow(1 + monthlyRate, months) - 1)) /
        monthlyRate
      ).toFixed(roundToPlaces)
      return gainedInterestFromMonthlyPayments
    },
    calculateTotalEarnings: function (
      year,
      interest,
      startingCapital,
      recurringInvestment
    ) {
      var gainedInterestFromTheStartOfTheYear = this.calculateStartingCapitalIncome(
        startingCapital,
        year,
        interest,
        0
      )
      var gainedInterestFromRecurringInvestmentsYearly = this.calculateRecurringInterestIncome(
        recurringInvestment,
        year,
        interest,
        0
      )
      var totalAccumulatedCapital = this.totalAccumulatedCapital
      totalAccumulatedCapital =
        Number(gainedInterestFromTheStartOfTheYear) +
        Number(gainedInterestFromRecurringInvestmentsYearly)
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

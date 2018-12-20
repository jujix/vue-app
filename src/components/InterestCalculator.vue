<template>
  <div id="calculateInterestButton">
    <button
      v-on:click="calculateTotalEarnings(year, interest, startingCapital, recurringInvestment)"
    >Calculate earnings</button>
  </div>
</template>

<script>
export default {
  name: "InterestCalculator",
  props: {
    year: Number,
    interest: Number,
    startingCapital: Number,
    recurringInvestment: Number
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
      var totalPayments = recurringInvestment * 12 * year;
      var months = year * 12;
      var monthlyRate = interest / 12 / 100;

      var gainedInterestFromMonthlyPayments = (
        (recurringInvestment * (Math.pow(1 + monthlyRate, months) - 1)) /
        monthlyRate
      ).toFixed(roundToPlaces);
      console.log(
        "gainedInterestFromMonthlyPayments: ",
        gainedInterestFromMonthlyPayments,
        " Total payments: ",
        totalPayments
      );
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
  }
};
</script>

<style scoped>
#calculateInterestButton {
  margin-top: 15%;
  margin-bottom: 5%;
}
</style>

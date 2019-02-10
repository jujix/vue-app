<template>
  <div>
    <div id="totalCapital">
      <b>Total accumulated capital: {{ this.calculateTotalEarnings(year, interest, startingCapital, recurringInvestment)}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterestCalculator",
  components: {
  },
  props: {
    year: Number,
    interest: Number,
    startingCapital: Number,
    recurringInvestment: Number
  },
  data() {
    return {
      totalAccumulatedCapital: 0
    };
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
      var totalAccumulatedCapital = this.totalAccumulatedCapital;
      var totalAccumulatedCapital =
        Number(gainedInterestFromTheStartOfTheYear) +
        Number(gainedInterestFromRecurringInvestmentsYearly);
      console.log("Total capital is " + totalAccumulatedCapital);
      return totalAccumulatedCapital;
    }
  }
};
</script>

<style scoped>

#totalCapital {
  margin-top: 5%;
}
</style>

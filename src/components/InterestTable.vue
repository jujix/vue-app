<template>
  <div id="calculatedInterestTable">
    <table>
      <tbody>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Gained interest</th>
          <th>Total capital</th>
        </tr>
        <tr v-for="years in year" :key="years">
          <th>{{year}}</th>
          <th>{{investment}}</th>
          <th>{{startingCapital}}</th>
          <th>{{recurringInvestment}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InterestTable",
  props: {
    year: Number,
    investment: Number,
    startingCapital: Number,
    recurringInvestment: Number
  }
};
</script>

<style scoped>
#calculatedInterestTable {
  margin-top: 15%;
  margin-bottom: 15%;
}
</style>

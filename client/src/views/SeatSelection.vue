<template>
  <div class="seat-selection">
    <SeatPlan :seats="seats"></SeatPlan>
  </div>
</template>
<script>
import SeatPlan from "../components/seats/SeatPlan";

export default {
  name: "SeatSelection",
  components: {
    SeatPlan,
  },
};
</script>

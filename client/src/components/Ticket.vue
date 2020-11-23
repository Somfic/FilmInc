<template>
  <div class="ticket">
    <span>{{ name }}</span>
    <span v-if="cost != null">€ {{ cost }}</span>
  </div>
</template>

<script>
export default {
  name: "Ticket",
  props: {
    name: String,
    cost: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket {
  width: 100px;
  height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>

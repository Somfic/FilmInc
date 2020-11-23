<template>
  <div class="ticket">
    <p>{{ name }}</p>
    <p v-if="cost != null">€ {{ cost }}</p>
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
  background-color: rgb(172, 172, 172);
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>

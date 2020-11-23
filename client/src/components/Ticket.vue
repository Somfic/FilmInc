<template>
  <div class="ticket">
      <div>
      <p>{{name}}</p>
      <p>{{cost}}</p>
      </div>
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
    align-items: center;
    justify-content: center;
}
</style>

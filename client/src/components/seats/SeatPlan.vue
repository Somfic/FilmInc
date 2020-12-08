<template>
  <div class="seat-plan">
    <div class="seat" v-for="i in 200" :key="i">
      <i class="fas fa-couch"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Seatplan",
};
</script>
<style lang="scss" scoped>
.seat-plan {
  display: grid;
  width: 400px;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(5, 1fr);
}

.seat {
  margin: 0;
  width: auto;
  opacity: 0.6;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.fa-couch {
  transform: scaleX(0.8);
}
</style>

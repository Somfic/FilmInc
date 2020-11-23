<template>
  <div class="scheduled">
    <img class="poster" :src="img" alt="" />
    <div class="details">
      <p class="title">{{ title }}</p>
      <p class="times">{{ start_time }} - {{ end_time }}</p>
      <p class="location">Zaal {{ theatre }}</p>
    </div>
    <div class="tickets">
        <ticket name="Standaard ticket" cost="7,50"></ticket>
        <ticket name="Luxe standaard" cost="9,00"></ticket>
        <ticket name="..."></ticket>
    </div>
  </div>
</template>

<script>
import Ticket from "./Ticket.vue";

export default {
  name: "Scheduled",
  props: {
    img: String,
    title: String,
    theatre: String,
    start_time: String,
    end_time: String,
  },
  components: {
    Ticket,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scheduled {
  display: flex;
  gap: 1rem;
  padding-right: 1rem;
  align-items: center;
}

.poster {
  height: 150px;
  width: 100px;
  object-fit: cover;
}

.details {
  text-align: left;
  width: 100%;
}

.details > .title {
  font-size: 2rem;
  font-weight: bold;
  word-wrap: break-word;
}

.tickets {
    display: flex;
    gap: 1rem;
}
</style>

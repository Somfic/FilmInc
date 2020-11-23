<template>
  <div class="scheduled">
    <div class="location">
      <p>{{ theatre }}</p>
    </div>
    <img class="poster" :src="img" alt="" />
    <div class="details">
      <p class="title">{{ title }}</p>
      <p class="times">{{ start_time }} - {{ end_time }}</p>
    </div>
    <div class="tickets">
        <ticket name="Standard" cost="23,32"></ticket>
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
  height: 200px;
  align-items: center;
  border: 1px solid black;
}

.poster {
  width: 100px;
  height: 100%;
  object-fit: cover;
}

.location {
  height: 100%;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.details {
  text-align: left;
}

.details > .title {
  font-size: 2rem;
  font-weight: bold;
}
</style>

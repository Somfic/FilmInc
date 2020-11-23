<template>
  <div id="app">
    <div class="scheduled">
      <Scheduled
        img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Tenet_ps_1_jpg_sd-high_Copyright-COPYRIGHT-2020-Warner-Bros-Entertainment-Inc-All-Rights-Reserved-Photo-Credit-Melinda-Sue-Gordon_NL_FO.jpg"
        title="Tenet"
        start_time="12:35"
        end_time="14:21"
        theatre="5"
      ></Scheduled>
      <Scheduled
        img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Trolls-Wereldtour_ps_1_jpg_sd-high_Copyright-2019-DreamWorks-Animation-LLC-All-Rights-Reserved_NL_FO.jpg"
        title="Trolls Wereldtour"
        start_time="12:40"
        end_time="14:42"
        theatre="2"
      ></Scheduled>
      <Scheduled
        img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Honest-Thief_ps_1_jpg_sd-high_NL_FO.jpg"
        title="Honest Thief"
        start_time="12:50"
        end_time="14:30"
        theatre="3"
      ></Scheduled>
    </div>
    <div class="checkout">
      <div class="checkout-items">
        <CheckoutItem name="Standaard" cost="7,50"></CheckoutItem>
        <CheckoutItem name="Standaard" cost="7,50"></CheckoutItem>
        <CheckoutItem name="Standaard" cost="7,50"></CheckoutItem>
        <CheckoutItem name="Standaard" cost="7,50"></CheckoutItem>
      </div>
      <div class="checkout-total">
        <CheckoutTotal cost="30,00"></CheckoutTotal>
      </div>
    </div>
  </div>
</template>

<script>
import Scheduled from "./components/Scheduled.vue";
import CheckoutItem from "./components/checkout/CheckoutItem.vue";
import CheckoutTotal from "./components/checkout/CheckoutTotal.vue";

export default {
  name: "App",
  components: {
    Scheduled,
    CheckoutItem,
    CheckoutTotal
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;

  display: flex;
}

.checkout {
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
}

.checkout-items > .checkout-item:nth-child(2n) {
  background-color: rgb(204, 204, 204);
}

.scheduled {
  border: 1px solid black;
}

* {
  margin: 0;
  padding: 0;
}
</style>

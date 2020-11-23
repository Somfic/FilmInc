<template>
  <div id="app">
    <div class="scheduled">
      <Scheduled
        img="https://cdn.vox-cdn.com/thumbor/OMivnqFLg4XQWkGvX_LXVGJ-CtY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21857772/tenet_poster.jpg"
        title="Tenet"
        start_time="12:35"
        end_time="14:21"
        theatre="5"
      ></Scheduled>
    </div>
    <div class="checkout">
      <checkout></checkout>
    </div>
  </div>
</template>

<script>
import Scheduled from "./components/Scheduled.vue";

export default {
  name: "App",
  components: {
    Scheduled,
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

* {
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div class="h-100 w-100 d-flex align-items-center justify-content-center">
    <div class="text-center">
      <h1 style="font-size: 5rem">
        <i class="fas fa-check-square text-success"></i>
      </h1>
      <h1 class="loading">
        Tickets printen <span>.</span><span>.</span><span>.</span>
      </h1>
    </div>
  </div>
</template>
<script>
import router from "../router/index";

export default {
  name: "Finish",

  async created() {
    setTimeout(function() {
      router.push("/");
    }, 5000);
  },
};
</script>
<style scoped>
@keyframes blink {
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

.loading span {
  animation-name: blink;

  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.4s;
}
</style>

<template>
  <div class="checkout-item">
    <span>{{name}}</span>
    <span>€ {{cost}}</span>
  </div>
</template>

<script>
export default {
  name: "CheckoutItem",
  props: {
    name: String,
    cost: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkout-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

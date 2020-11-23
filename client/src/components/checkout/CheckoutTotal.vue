<template>
  <div class="checkout-total">
    <p>Totaal</p>
    <p>€ {{cost}}</p>
  </div>
</template>

<script>
export default {
  name: "CheckoutTotal",
  props: {
    cost: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkout-total {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

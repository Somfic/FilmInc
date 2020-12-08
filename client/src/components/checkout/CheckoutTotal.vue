<template>
  <div class="list-group-item disabled border-top-1">
    <div class="row font-weight-bold">
      <div class="col">
        <span>{{ count }} tickets</span>
      </div>
      <div class="col-auto">
        <span>€ {{ cost }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "CheckoutTotal",
	props: {
		cost: String,
		count: Number,
	},
};
</script>
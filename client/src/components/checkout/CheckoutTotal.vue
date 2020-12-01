<template>
	<div class="list-group-item disabled">
		<div class="row">
			<div class="col">
				<span>Totaal</span>
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
	},
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

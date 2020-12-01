<template>
	<div class="list-group-item">
		<div class="row">
			<div class="col">
				<small class="text-muted">{{ title }}</small
				><br />
				<span>{{ type }}</span>
			</div>
			<div class="col-auto align-self-center">
				<span>€ {{ cost }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CheckoutItem",
	props: {
		id: String,
		title: String,
		type: String,
		cost: String,
	},
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

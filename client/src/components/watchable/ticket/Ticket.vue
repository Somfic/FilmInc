<template>
	<div
		v-on:click="clicked"
		class="ticket list-group-item list-group-item-action text-nowrap text-center"
	>
		<p class="mb-1">{{ name }}</p>
		<small class="text-muted">€ {{ cost }}</small>
	</div>
</template>

<script>
export default {
	name: "Ticket",
	props: {
		name: String,
		cost: String,
	},
	methods: {
		clicked() {
			this.$emit("clicked", { type: this.name, cost: this.cost });
		},
	},
};
</script>
<template>
  <button
    class="ticket list-group-item list-group-item-action text-center"
    @click="clicked"
  >
    <p class="mb-1">
      {{ name }}
    </p>
    <small class="text-muted">€ {{ cost }}</small>
  </button>
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
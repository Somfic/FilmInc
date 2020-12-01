<template>
	<div class="list-group-item">
		<div class="row">
			<div class="col">
				<button
					role="button"
					v-on:click="cancel"
					class="btn btn-secondary w-100 py-3"
				>
					<i class="fas fa-ban"></i>
				</button>
			</div>
			<div class="col">
				<button
					role="button"
					v-on:click="edit"
					class="btn btn-secondary w-100 py-3"
				>
					<i class="fas fa-pen"></i>
				</button>
			</div>

			<div class="col">
				<button
					role="button"
					v-on:click="next"
					class="btn btn-primary w-100 py-3"
				>
					<i class="fas fa-check-circle"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CheckoutOptions",
	methods: {
		cancel() {
			this.$emit("cancel");
		},

		next() {
			this.$emit("next");
		},
	},
};
</script>
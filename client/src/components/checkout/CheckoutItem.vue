<template>
	<div class="list-group-item list-group-item-action" v-on:click="clicked">
		<div class="row">
			<div class="col-auto">
				<small class="text-muted">{{ title }}</small
				><br />
				<span>{{ type }}</span>
			</div>
			<div class="col align-self-center">
				<span
					v-if="amount > 1"
					class="badge badge-primary badge-pill"
					>{{ amount }}</span
				>
			</div>

			<div class="col-auto align-self-center">
				<span>€ {{ cost }}</span>
			</div>
			<div class="col-auto">
				<div class="btn-group-vertical" role="group">
					<button class="btn h-100 text-muted py-0 px-3">
						<i class="fas fa-caret-up"></i>
					</button>
					<button class="btn h-100 text-muted py-0 px-3">
						<i class="fas fa-caret-down"></i>
					</button>
				</div>
				<button class="btn h-100 text-muted">
					<i class="fas fa-ban"></i>
				</button>
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
		amount: Number,
		cost: String,
	},
	data() {
		return {
			isEditing: true,
		};
	},
	methods: {
		clicked: () => {
			console.log("switch");
			this.isEditing = !this.isEditing;
		},
	},
};
</script>
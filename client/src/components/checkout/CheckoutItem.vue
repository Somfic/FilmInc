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
			<div class="col-auto" v-if="isEditing">
				<div class="btn-group-vertical" role="group">
					<button
						class="btn h-100 text-muted py-0 px-3"
						v-on:click.stop="add"
					>
						<i class="fas fa-caret-up"></i>
					</button>
					<button
						class="btn h-100 text-muted py-0 px-3"
						v-on:click.stop="subtract"
					>
						<i class="fas fa-caret-down"></i>
					</button>
				</div>
				<button class="btn h-100 text-muted" v-on:click.stop="remove">
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
		movieId: String,
		title: String,
		type: String,
		amount: Number,
		cost: String,
	},
	data() {
		return {
			isEditing: false,
		};
	},
	methods: {
		clicked() {
			this.isEditing = !this.isEditing;
		},

		add() {
			this.$emit("add", this.id);
		},

		subtract() {
			this.$emit("subtract", this.id);
		},

		remove() {
			this.$emit("remove", this.id);
		},
	},
};
</script>
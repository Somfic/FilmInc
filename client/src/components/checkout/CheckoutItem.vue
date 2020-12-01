<template>
	<div class="list-group-item list-group-item-action py-1">
		<div class="row">
			<div class="col-auto align-self-center border-right h-100">
				<span class="badge badge-primary badge-pill">{{ amount }}</span>
			</div>
			<div class="col my-1">
				<small>{{ title }}</small
				><br />
				<span>{{ type }}</span>
			</div>
			<div class="col-auto align-self-center">
				<span>€ {{ cost }}</span>
			</div>
			<div class="col-auto d-flex align-items-center" v-if="isEditing">
				<div class="btn-group-vertical" role="group">
					<span class="h-100 py-0 px-3" v-on:click.stop="add">
						<i class="fas fa-caret-up"></i>
					</span>
					<span class="h-100 py-0 px-3" v-on:click.stop="subtract">
						<i class="fas fa-caret-down"></i>
					</span>
				</div>
				<span class="p-2" v-on:click.stop="remove">
					<i class="fas fa-ban"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CheckoutItem",
	props: {
		movieId: String,
		title: String,
		type: String,
		amount: Number,
		cost: String,
		isEditing: Boolean,
	},
	methods: {
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
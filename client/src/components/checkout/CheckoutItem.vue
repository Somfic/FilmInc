<template>
	<div class="list-group-item list-group-item-action py-1">
		<div class="row">
			<div class="col-auto align-self-center border-right h-100">
				<span class="badge badge-primary badge-pill">{{ amount }}</span>
			</div>
			<div class="col my-1 d-flex flex-column">
				<small>{{ title }}</small>
				<span>{{ type }}</span>
				<small>{{ date }}</small>
			</div>
			<div
				v-if="isEditing"
				class="col-auto d-flex align-items-center p-0"
			>
				<span class="p-2" @click.stop="remove">
					<i class="fas fa-ban" />
				</span>
				<div class="btn-group-vertical" role="group">
					<span class="h-100 py-0 px-2" @click.stop="add">
						<i class="fas fa-caret-up" />
					</span>
					<span class="h-100 py-0 px-2" @click.stop="subtract">
						<i class="fas fa-caret-down" />
					</span>
				</div>
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
		movieId: String,
		title: String,
		type: String,
		amount: Number,
		cost: String,
		date: String,
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
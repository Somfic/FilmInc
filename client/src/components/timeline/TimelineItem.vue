<template>
	<button
		class="btn text-light border-left px-2 border py-1 text-nowrap d-flex align-items-center justify-content-between"
		v-bind:class="{
			'bg-secondary': item.isUpdated,
			'bg-dark': !item.isUpdated,
		}"
		@click="active(item)"
	>
		<div
			class="d-flex flex-column justify-content-center align-items-start"
		>
			<span class="font-weight-bold">{{ item.watchableTitle }}</span>
			<small>{{ item.start }} - {{ item.end }}</small>
		</div>
		<i v-if="item.isUpdated" class="fas fa-sync-alt mr-2 text-dark"></i>
	</button>
</template>
<script>
export default {
	name: "TimelineItem",
	props: {
		item: Object,
	},
	methods: {
		active(item) {
			this.$emit("active", item);
		},
	},
};
</script>
<style scoped>
button {
	transition: all 200ms ease-out;
}
</style>
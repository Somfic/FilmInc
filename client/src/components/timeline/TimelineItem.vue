<template>
	<button
		class="btn border-left px-2 border-bottom border-right py-1 text-nowrap d-flex flex-column justify-content-center"
		v-bind:class="{ 'bg-dark text-light': !isActive, active: isActive }"
		@click="active(item)"
	>
		<span class="font-weight-bold">{{ item.watchableTitle }}</span>
		<small>{{ item.start }} - {{ item.end }}</small>
	</button>
</template>
<script>
export default {
	name: "TimelineItem",
	props: {
		item: Object,
		isActive: Boolean,
	},
	methods: {
		active(item) {
			this.$emit("active", item);
		},
	},
};
</script>
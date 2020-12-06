<template>
	<div class="scheduled">
		<Timeline :items="items" @selected="selected"></Timeline>
		<EditScheduled :populateWith="scheduled"></EditScheduled>
	</div>
</template>

<script>
import EditScheduled from "../../components/scheduled/EditScheduled.vue";
import Timeline from "../../components/timeline/Timeline";
import scheduledService from "../../services/scheduled";

export default {
	name: "Scheduled",
	components: {
		Timeline,
		EditScheduled,
	},
	data() {
		return {
			items: [],
			scheduled: {},
		};
	},
	async created() {
		let result = await scheduledService.get();
		this.items = result.data;
	},
	methods: {
		selected(item) {
			this.scheduled = item;
		},
	},
};
</script>
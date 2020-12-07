<template>
	<div class="scheduled">
		<Timeline :items="items" @selected="selected" @new="newItem"></Timeline>
		<EditScheduled :populateWith="scheduled"></EditScheduled>
		<Action :actions="actions"></Action>
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
			actions: [
				{
					message: "Sla wijzigingen op",
					class: "btn-dark",
					action: () => scheduledService.editMany(this.items),
				},
			],
		};
	},
	async created() {
		let result = await scheduledService.get();
		console.log(result.data);
		this.items = result.data;
	},
	methods: {
		selected(item) {
			this.scheduled = item;
		},
		newItem(item) {
			this.items.push({
				start: item.start,
				end: item.end,
				location: item.location,
				date: item.date,
			});
		},
	},
};
</script>
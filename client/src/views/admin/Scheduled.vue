<template>
	<div class="scheduled">
		<Navbar></Navbar>
		<Timeline
			:items="items"
			@selected="selected"
			@new="newItem"
			@updated="update"
			class="mb-3"
		></Timeline>
		<EditScheduled
			v-if="scheduled.location != 0"
			:populateWith="scheduled"
			@updated="update"
		></EditScheduled>
		<Action :actions="actions"></Action>
		<Footer></Footer>
	</div>
</template>

<script>
import EditScheduled from "../../components/scheduled/EditScheduled.vue";
import Timeline from "../../components/timeline/Timeline";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import scheduledService from "../../services/scheduled";

export default {
	name: "Scheduled",
	components: {
		Timeline,
		EditScheduled,
		Navbar,
		Footer,
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
		this.update();
	},
	methods: {
		selected(item) {
			console.log("selected", item);
			this.scheduled = item;
		},
		newItem(item) {
			item.isUpdated = true;
			this.items.push(item);
		},
		update() {
			scheduledService.get().then((res) => {
				this.items = res.data;
			});
		},
	},
};
</script>
<template>
	<div class="scheduled">
		<Navbar></Navbar>
		<Timeline :items="items" @selected="selected" @new="newItem"></Timeline>
		<EditScheduled :populateWith="scheduled"></EditScheduled>
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
		let result = await scheduledService.get();
		console.log(result.data);
		this.items = result.data;
	},
	methods: {
		selected(item) {
			console.log("selected", item);
			this.scheduled = item;
		},
		newItem(item) {
			console.log(item);
			this.items.push(item);
		},
	},
};
</script>
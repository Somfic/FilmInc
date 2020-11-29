<template>
	<div
		class="scheduled list-group-item align-items-start d-flex align-items-center"
	>
		<div class="d-flex col-1 p-0">
			<img class="img-fluid" :src="img" alt="" />
		</div>
		<div class="details col-3 d-flex flex-column">
			<span class="h5 m-0">{{ title }}</span>
			<span class="font-weight-bold"
				>{{ start_time }} - {{ end_time }}</span
			>
			<div>
				<span v-for="tag in tags" :key="tag" class="badge">
					{{ tag }}
				</span>
			</div>
		</div>
		<div class="tickets list-group list-group-horizontal">
			<ticket name="Standaard" cost="7,50"></ticket>
			<ticket name="Kind" cost="5,00"></ticket>
			<ticket name="Familie" cost="25,00"></ticket>
		</div>
	</div>
</template>

<script>
import Ticket from "./Ticket.vue";

export default {
	name: "Scheduled",
	props: {
		img: String,
		title: String,
		theatre: String,
		age: String,
		start_time: String,
		end_time: String,
		tags: Object,
	},
	components: {
		Ticket,
	},
};
</script>
<template>
	<div
		class="scheduled list-group-item align-items-start d-flex align-items-center"
	>
		<div class="d-flex col-1 p-0">
			<img class="img-fluid" :src="poster" alt="" />
		</div>
		<div class="details col-3 d-flex flex-column">
			<span class="h5 m-0">{{ title }} </span>
			<p>
				<span v-if="classification == 'AL'" class="badge badge-success">
					{{ classification }}
				</span>
				<span
					v-if="classification == '6+'"
					class="badge badge-secondary"
				>
					{{ classification }}
				</span>
				<span
					v-if="classification == '9+'"
					class="badge badge-secondary"
				>
					{{ classification }}
				</span>
				<span
					v-if="classification == '12+'"
					class="badge badge-secondary"
				>
					{{ classification }}
				</span>
				<span
					v-if="classification == '16+'"
					class="badge badge-warning"
				>
					{{ classification }}
				</span>
				<span v-if="classification == '18+'" class="badge badge-danger">
					{{ classification }}
				</span>
			</p>
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
			<ticket
				@clicked="ticketSelected"
				name="Standaard"
				cost="7,50"
			></ticket>
			<ticket @clicked="ticketSelected" name="Kind" cost="5,00"></ticket>
			<ticket
				@clicked="ticketSelected"
				name="Familie"
				cost="25,00"
			></ticket>
		</div>
	</div>
</template>

<script>
import Ticket from "../watchable/ticket/Ticket";

export default {
	name: "Scheduled",
	props: {
		id: String,
		poster: String,
		title: String,
		location: String,
		classification: String,
		start_time: String,
		end_time: String,
	},
	components: {
		Ticket,
	},
	methods: {
		ticketSelected(selected) {
			this.$emit("ticket-selected", {
				id: this.id,
				title: this.title,
				type: selected.type,
				cost: selected.cost,
			});
		},
	},
};
</script>

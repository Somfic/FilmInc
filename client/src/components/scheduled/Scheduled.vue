<template>
	<div class="list-group-item">
		<div class="row">
			<div class="col-auto">
				<div class="p-0">
					<img class="img-fluid" width="70" :src="poster" alt="" />
				</div>
			</div>
			<div class="col">
				<div class="align-self-center">
					<span class="h5 m-0">{{ title }} </span>
					<p class="m-0">
						<Badge :content="classification"></Badge
						><Badge content="3D"></Badge>
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
			</div>
			<div class="col-auto">
				<div class="list-group list-group-horizontal h-100">
					<Ticket
						@clicked="ticketSelected"
						name="Standaard"
						cost="7,50"
					></Ticket>
					<Ticket
						@clicked="ticketSelected"
						name="Kind"
						cost="5,00"
					></Ticket>
					<Ticket
						@clicked="ticketSelected"
						name="Familie"
						cost="25,00"
					></Ticket>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Ticket from "./ticket/Ticket";
import Badge from "../badges/Badge";

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
		Badge,
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

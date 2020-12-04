<template>
  <div class="list-group-item">
    <div class="row">
      <div class="col-auto">
        <div class="p-0">
          <img
            class="img-fluid p-0"
            width="70"
            :src="poster"
            alt=""
          >
        </div>
      </div>
      <div class="col p-0">
        <div class="align-self-center">
          <span class="h5 m-0">{{ title }} </span>
          <p class="m-0">
            <Badge :content="classification" /><Badge content="3D" />
          </p>
          <span
            class="font-weight-bold"
          >{{ start_time }} - {{ end_time }}</span>
          <div>
            <span
              v-for="tag in tags"
              :key="tag"
              class="badge"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
      <div class="col-auto pl-2">
        <div class="list-group list-group-horizontal h-100">
          <Ticket
            name="Standaard"
            cost="7,50"
            @clicked="ticketSelected"
          />
          <Ticket
            name="Kind"
            cost="5,50"
            @clicked="ticketSelected"
          />
          <Ticket
            name="Standaard Luxe"
            cost="10,00"
            @clicked="ticketSelected"
          />
          <Ticket
            name="Kind Luxe"
            cost="8,00"
            @clicked="ticketSelected"
          />
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
	components: {
		Ticket,
		Badge,
	},
	props: {
		id: String,
		poster: String,
		title: String,
		location: String,
		classification: String,
		start_time: String,
		end_time: String,
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

<template>
  <div class="list-group-item py-2">
    <div class="row">
      <div class="col-auto pl-1 py-0">
        <div>
          <img
            class="img-fluid img-thumbnail"
            width="70"
            :src="item.watchable.poster"
            alt=""
          />
        </div>
      </div>
      <div class="col p-0 d-flex flex-column justify-content-around">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 m-0">{{ item.watchable.title }}</span>
        </div>
        <span class="m-0">
          <Badge :content="item.watchable.classification" /><Badge />
          <span class="badge badge-light">Zaal {{ item.location }}</span>
        </span>
        <small>{{ item.start }} - {{ item.end }}</small>
      </div>
      <div class="col-auto pl-3 pr-1">
        <div class="list-group list-group-horizontal h-100">
          <Ticket name="Standaard" cost="7,50" @clicked="ticketSelected" />
          <Ticket name="Kind" cost="5,50" @clicked="ticketSelected" />
          <Ticket
            name="Standaard Luxe"
            cost="10,00"
            @clicked="ticketSelected"
          />
          <Ticket name="Kind Luxe" cost="8,00" @clicked="ticketSelected" />
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
    item: Object,
  },
  methods: {
    ticketSelected(selected) {
      this.$emit("ticket-selected", {
        id: this.item._id,
        title: this.item.watchable.title,
        type: selected.type,
        cost: selected.cost,
      });
    },
  },
};
</script>

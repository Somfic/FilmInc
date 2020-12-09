<template>
  <div class="seatplan">
    <div class="row d-flex align-items-baseline ml-1">
      <h1 class="mr-3 badge-dark rounded px-3">{{ scheduled.location }}</h1>
      <h1 class="mr-3">{{ scheduled.watchableTitle }}</h1>
      <small>{{ scheduled.start }} - {{ scheduled.end }}</small>
    </div>

    <div
      class="seat-plan border rounded"
      v-bind:style="{
        'grid-template-columns': 'repeat(' + this.scheduled.columns + ', 1rem)',
        'grid-template-rows': 'repeat(' + this.scheduled.rows + ', 1rem)',
      }"
    >
      <div
        class="seat"
        v-for="i in this.scheduled.rows * this.scheduled.columns"
        :key="i"
        @click="active(i)"
        :class="{
          'text-success': selectedPlaces.includes(i),
          'text-danger': scheduled.takenTickets.includes(i),
        }"
      >
        <i class="fas fa-couch"></i>
      </div>
    </div>
    <Action class="mt-3" @executed="done" :actions="actions"></Action>
  </div>
</template>
<script>
import Action from "../action/Action";
import scheduledService from "../../services/scheduled";

export default {
  name: "Seatplan",
  props: {
    scheduled: Object,
    totalTickets: Number,
  },
  components: {
    Action,
  },
  data() {
    return {
      selectedPlaces: [],
      scheduledEdited: {},
      actions: [
        {
          message: "Sla wijzigingen op",
          class: "btn-dark",
          action: () =>
            scheduledService.edit(this.scheduled._id, this.scheduledEdited),
        },
      ],
    };
  },
  watch: {
    scheduled: function() {
      this.selectedPlaces = [];
    },
  },
  methods: {
    done() {
      this.$emit("done");
    },
    active(i) {
      let proposal = [];

      for (let counter = 0; counter < this.totalTickets; counter++) {
        let seatNumber = i + counter;

        if (seatNumber > this.scheduled.rows * this.scheduled.columns) {
          return;
        }

        if (this.scheduled.takenTickets.includes(seatNumber)) {
          return;
        }

        proposal.push(seatNumber);
      }

      this.selectedPlaces = proposal;
      this.scheduledEdited = JSON.parse(JSON.stringify(this.scheduled));

      proposal.forEach((x) => {
        this.scheduledEdited.takenTickets.push(x);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.seat-plan {
  display: grid;
  padding: 1rem;
  gap: 10px;
  margin: auto;
  width: 100%;
}

.seat {
  opacity: 0.6;
  transition: opacity 200ms ease-in-out;
  font-size: 1rem;

  &:hover {
    opacity: 1;
  }

  &.taken {
    color: red;
  }

  &.this {
    color: rgb(55, 114, 55);
  }
}

.fa-couch {
  transform: scaleX(0.8);
}
</style>

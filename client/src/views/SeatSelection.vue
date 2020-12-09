<template>
  <div class="seat-selection">
    <Navbar></Navbar>
    <div class="row">
      <div class="col-3">
        <div class="list-group">
          <router-link to="/" class="list-group-item list-group-item-action">
            <i class="fas fa-caret-left pr-3" aria-hidden="true"></i>
            Terug naar tickets
          </router-link>
        </div>
        <div
          class="list-group list-group-item-action mt-3"
          v-for="ticketGroup in tickets"
          :key="ticketGroup"
          @click="selected(ticketGroup[0].id)"
          :v-class="{ active: 'ticketGroup[0].id = selected.id' }"
        >
          <div
            class="list-group-item"
            v-for="ticket in ticketGroup"
            :key="ticket"
          >
            <div class="row">
              <div class="col my-1 d-flex flex-column">
                <small>{{ ticket.title }}</small>
                <span>{{ ticket.type }}</span>
                <small>{{ ticket.date }}</small>
              </div>
              <div class="col-auto align-self-center border-left h-100">
                <span class="badge badge-primary badge-pill">{{
                  ticket.amount
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9" v-if="scheduled != null">
        <SeatPlan
          :scheduled="scheduled"
          :totalTickets="totalTickets"
          @seatsselected="seatsSelected"
          @done="done"
        ></SeatPlan>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SeatPlan from "../components/seats/SeatPlan";
import router from "../router/index";
import cacheService from "../services/cache";
import scheduledService from "../services/scheduled";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default {
  name: "SeatSelection",
  data() {
    return {
      tickets: [],
      scheduled: null,
      totalTickets: 0,
      selectedSeats: [],
    };
  },
  async created() {
    this.update();
  },
  methods: {
    update() {
      let orgTickets = cacheService.readObject("tickets");
      this.tickets = this.groupBy(orgTickets, "id");

      if (orgTickets.length == 0) {
        router.push("/finish");
      }
    },
    done() {
      let originalTickets = cacheService.readObject("tickets");
      cacheService.writeObject(
        "tickets",
        originalTickets.filter((x) => x.id != this.scheduled._id)
      );

      this.update();
    },
    seatsSelected(scheduled, seats) {
      this.selectedSeats[scheduled._id] = seats;
    },
    groupBy(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    selected(scheduledId) {
      this.totalTickets = this.tickets[scheduledId].reduce(
        (acc, val) => acc + val.amount,
        0
      );

      scheduledService
        .getOne(scheduledId)
        .then((res) => (this.scheduled = res.data));
    },
  },
  components: {
    SeatPlan,
    Footer,
    Navbar,
  },
};
</script>

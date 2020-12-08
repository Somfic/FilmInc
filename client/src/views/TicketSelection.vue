<template>
  <div class="ticket-selection">
    <Navbar></Navbar>
    <div class="row">
      <div class="col-auto">
        <div class="list-group">
          <Scheduled
            v-for="item in scheduled.filter((x) => x.date == this.date)"
            :key="item"
            :poster="item.watchable.poster"
            :title="item.watchable.title"
            :classification="item.watchable.classification"
            :start="item.start"
            :end="item.end"
            :location="item.location"
            :id="item._id"
            :date="item.date"
            @ticket-selected="addCheckout"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <input
            v-model="date"
            class="form-control"
            type="date"
            @change="changedDate"
          />
        </div>
        <div class="list-group sticky-top pt-3" style="margin-top: -1rem">
          <CheckoutItem
            v-for="(item, index) in selected"
            :id="item.id"
            :key="item"
            :movie-id="item.movieId"
            :title="item.title"
            :type="item.type"
            :cost="item.cost"
            :amount="item.amount"
            :date="item.date"
            :class="{ 'bg-light': index == currentIndex }"
            :is-editing="index == currentIndex"
            @click="setActive(item, index)"
            @add="add"
            @subtract="subtract"
            @remove="remove"
          />
          <CheckoutTotal
            v-if="selected.length > 0"
            :cost="total"
            :count="count"
            @click="setActive(null, -1)"
          />
          <CheckoutOptions
            v-if="selected.length > 0"
            @cancel="cancel"
            @confirm="confirm"
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Scheduled from "../components/scheduled/Scheduled";
import CheckoutItem from "../components/checkout/CheckoutItem";
import CheckoutTotal from "../components/checkout/CheckoutTotal";
import CheckoutOptions from "../components/checkout/CheckoutOptions";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import watchableService from "../services/watchable";
import scheduledService from "../services/scheduled";
import cacheService from "../services/cache";
import router from "../router/index";

export default {
  name: "TicketSelection",
  components: {
    Scheduled,
    CheckoutItem,
    CheckoutTotal,
    CheckoutOptions,
    Footer,
    Navbar,
  },
  data() {
    return {
      scheduled: [],
      selected: [],
      total: 0.0,
      count: 0,
      currentIndex: -1,
      currentItem: {},
      date: new Date().toISOString().substring(0, 10),
    };
  },

  async created() {
    try {
      let watchables = (await watchableService.get()).data;
      let scheduled = (await scheduledService.get()).data;

      scheduled.forEach((s) => {
        s.watchable = watchables.find((w) => w._id == s.watchableId);
      });

      let previousTickets = cacheService.readObject("tickets");
      if (previousTickets && previousTickets.length > 0) {
        this.selected = previousTickets;
        this.updateCheckoutList();
      }

      this.scheduled = scheduled.sort((a, b) => {
        let hourA = parseInt(a.start.split(":")[0]);
        let minuteA = parseInt(a.start.split(":")[1]);

        let hourB = parseInt(b.start.split(":")[0]);
        let minuteB = parseInt(b.start.split(":")[1]);

        if (hourA < hourB || (hourA == hourB && minuteA < minuteB)) {
          return -1;
        }

        if (hourA > hourB || (hourA == hourB && minuteA > minuteB)) {
          return 1;
        }

        return 0;
      });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    addCheckout(item) {
      let filtered = this.selected.filter(
        (x) => x.id == item.id && x.type == item.type && x.title == item.title
      );

      if (filtered.length == 0) {
        this.selected.push({
          id: item.id,
          title: item.title,
          movieId: item.movieId,
          type: item.type,
          cost: item.cost,
          costOne: item.cost,
          amount: 1,
          date: item.date,
        });
      } else {
        filtered[0].amount++;
      }

      this.updateCheckoutList();
    },

    cancel() {
      this.selected = [];
      this.updateCheckoutList();
    },

    add() {
      this.currentItem.amount++;
      this.updateCheckoutList();
    },

    subtract() {
      if (this.currentItem.amount > 1) {
        this.currentItem.amount--;
      }

      this.updateCheckoutList();
    },

    remove() {
      this.selected = this.selected.filter((x) => x != this.currentItem);

      this.currentItem = {};
      this.currentIndex = -1;
      this.updateCheckoutList();
    },

    updateCheckoutList() {
      let total = 0;
      this.selected.forEach((item) => {
        item.cost = (
          parseInt(item.amount.toString().replace(",", ".")) *
          parseInt(item.costOne.toString().replace(",", "."))
        )
          .toFixed(2)
          .replace(".", ",");
        total += parseFloat(item.cost.toString().replace(",", "."));
      });
      this.total = total.toFixed(2).replace(".", ",");

      let count = 0;
      this.selected.forEach((x) => (count += parseInt(x.amount)));
      this.count = count;

      cacheService.writeObject("tickets", this.selected);
    },

    setActive(item, index) {
      if (this.currentIndex == index) {
        this.currentIndex = -1;
        this.currentItem = {};
      } else {
        this.currentIndex = index;
        this.currentItem = item;
      }
    },
    confirm() {
      router.push("/seats");
    },
  },
};
</script>
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
    <div class="edit" v-if="isAdmin">
      <EditScheduled
        :populateWith="scheduled"
        @updated="update"
      ></EditScheduled>
      <Action :actions="actions"></Action>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import EditScheduled from "../components/scheduled/EditScheduled.vue";
import Timeline from "../components/timeline/Timeline";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import scheduledService from "../services/scheduled";
import tokenService from "../services/token";

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
      isAdmin: tokenService.isAdmin(),
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
      if (item.location == 1 || item.location == 2) {
        item.rows = 10;
        item.columns = 15;
      } else {
        item.rows = 15;
        item.columns = 25;
      }

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

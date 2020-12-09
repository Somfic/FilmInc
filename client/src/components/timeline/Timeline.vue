<template>
  <div class="timeline">
    <div class="row">
      <div class="col-2">
        <div class="form-group">
          <label for="start">Start tijd</label>
          <input
            v-model="startTime"
            class="form-control"
            type="time"
            @change="setColumns"
          />
        </div>
      </div>
      <div class="col"></div>
      <div class="col-auto">
        <div class="form-group">
          <label for="start">Datum</label>
          <input
            v-model="date"
            class="form-control"
            type="date"
            @change="changedDate"
          />
        </div>
      </div>
      <div class="col-auto" v-if="isAdmin">
        <div class="form-group">
          <label>Acties</label>
          <Action :actions="actions"></Action>
        </div>
      </div>
      <div class="col"></div>
      <div class="col-2">
        <div class="form-group">
          <label for="start">Eind tijd</label>
          <input
            v-model="endTime"
            class="form-control"
            type="time"
            @change="setColumns"
          />
        </div>
      </div>
    </div>
    <div
      class="timeline-grid"
      v-bind:style="{
        'grid-template-columns': columnStyle,
      }"
    >
      <div
        class="location px-3 badge align-self-center"
        v-for="i in 6"
        :key="i"
        v-bind:style="{ 'grid-row': i + 1 }"
      >
        {{ i }}
      </div>
      <small
        class="timestamp text-muted"
        v-for="timestamp in timestamps"
        :key="timestamp"
        v-bind:style="{
          'grid-column-start': this.getColumn(timestamp),
        }"
      >
        {{ timestamp }}
      </small>
      <div
        v-for="button in buttons"
        :key="button"
        v-bind:style="{
          'grid-column-start': button.columnStart,
          'grid-column-end': button.columnEnd,
          'grid-row': button.row,
        }"
        @click="hasClicked(button)"
        class="new-item border d-flex align-items-center justify-content-center"
      >
        <i class="fas fa-plus-circle" v-if="isAdmin" />
      </div>

      <TimelineItem
        v-for="item in items.filter((x) => shouldBeShown(x))"
        :key="item"
        :item="item"
        @active="active(item)"
        v-bind:style="{
          'grid-column-start': this.getColumn(item.start),
          'grid-column-end': this.getColumn(item.end),
          'grid-row': this.getRow(item.location),
        }"
      >
      </TimelineItem>
    </div>
  </div>
</template>
<script>
import TimelineItem from "./TimelineItem";
import Action from "../action/Action";
import scheduledService from "../../services/scheduled";
import tokenService from "../../services/token";

export default {
  name: "Timeline",
  components: {
    TimelineItem,
    Action,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      isAdmin: tokenService.isAdmin(),
      startTime: "10:00",
      endTime: "14:00",
      date: new Date().toISOString().substring(0, 10),
      columnStyle: "",
      timestamps: [],
      buttons: [],
      actions: [
        {
          message: "Sla wijzigingen op",
          class: "btn-dark",
          action: () =>
            scheduledService.editMany(this.items).then(this.$emit("updated")),
        },
      ],
    };
  },
  async created() {
    this.setColumns();
  },
  methods: {
    active(item) {
      this.$emit("selected", item);
    },
    getColumn(time) {
      let minutes = this.totalMinutes(time);
      let column = minutes;
      let offset = this.totalMinutes(this.startTime);

      return Math.max(2, Math.min(column - offset, this.totalColumns()) + 1);
    },
    getRow(location) {
      return parseInt(location) + 1;
    },
    totalMinutes(time) {
      let hour = parseInt(time.split(":")[0]);
      let minute = parseInt(time.split(":")[1]);

      return hour * 60 + minute;
    },
    totalColumns() {
      let start = this.totalMinutes(this.startTime);
      let end = this.totalMinutes(this.endTime);

      let minutes = end - start;

      return minutes;
    },
    setColumns() {
      let columns = this.totalColumns();
      this.columnStyle = "auto repeat(" + columns + ", 1fr)";

      let hour = parseInt(this.startTime.split(":")[0]);
      let minute = parseInt(this.startTime.split(":")[1]);

      this.timestamps = [];

      while (
        hour < this.endTime.split(":")[0] ||
        minute < this.endTime.split(":")[1]
      ) {
        if (minute < 10) {
          this.timestamps.push(hour + ":0" + minute);
        } else {
          this.timestamps.push(hour + ":" + minute);
        }

        minute += 15;
        if (minute >= 60) {
          minute = 0;
          hour++;
        }
      }

      for (let index = 0; index < this.timestamps.length; index++) {
        let nextIndex = index + 1;

        if (nextIndex == this.timestamps.length) {
          nextIndex = index;
        }

        let timestamp = this.timestamps[index];

        let nextTimestamp = this.timestamps[nextIndex];

        let column = this.getColumn(timestamp);
        let nextColumn = this.getColumn(nextTimestamp);

        for (let row = 0; row < 6; row++) {
          this.buttons.push({
            start: timestamp,
            end: nextTimestamp,
            row: row + 2,
            columnStart: column,
            columnEnd: nextColumn,
          });
        }
      }
    },
    shouldBeShown(item) {
      return (
        this.totalMinutes(item.end) > this.totalMinutes(this.startTime) &&
        this.totalMinutes(item.start) < this.totalMinutes(this.endTime) &&
        item.date == this.date
      );
    },
    hasClicked(button) {
      if (this.isAdmin) {
        this.$emit("new", {
          start: button.start,
          end: button.end,
          location: button.row - 1,
          date: this.date,
        });
      }
    },
    changedDate() {
      this.$emit("changeddate", this.date);
    },
  },
};
</script>
<style lang="scss" scoped>
.timeline-grid {
  display: grid;
  grid-template-rows: auto repeat(6, 50px);
}

.new-item {
  cursor: pointer;

  i {
    opacity: 0;
    transition: opacity 120ms ease;
  }

  &:hover {
    i {
      opacity: 0.2;
    }
  }
}
</style>

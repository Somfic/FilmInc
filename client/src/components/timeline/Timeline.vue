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
				<Action :actions="actions"></Action>
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
			<div
				class="border-bottom"
				v-for="i in 6"
				:key="i"
				v-bind:style="{
					'grid-row': i + 1,
					'grid-column-start': 2,
					'grid-column-end': totalColumns(),
				}"
			></div>
			<div
				class="border-top"
				v-bind:style="{
					'grid-row': 2,
					'grid-column-start': 2,
					'grid-column-end': totalColumns(),
				}"
			></div>
			<div
				class="border-right"
				v-bind:style="{
					'grid-column': totalColumns() - 1,
					'grid-row-start': 2,
					'grid-row-end': 8,
				}"
			></div>
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
				class="timestamp text-muted border-left border-left"
				v-for="timestamp in timestamps"
				:key="timestamp"
				v-bind:style="{
					'grid-column-start': this.getColumn(timestamp),
					'grid-row-start': 2,
					'grid-row-end': 8,
				}"
			></div>
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
			startTime: "10:00",
			endTime: "14:00",
			columnStyle: "",
			timestamps: [],
			actions: [
				{
					message: "Sla op",
					class: "btn-dark",
					action: () => scheduledService.editMany(this.items),
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

			return Math.max(
				2,
				Math.min(column - offset, this.totalColumns()) + 1
			);
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
		},
		shouldBeShown(item) {
			return (
				this.totalMinutes(item.end) >
					this.totalMinutes(this.startTime) &&
				this.totalMinutes(item.start) < this.totalMinutes(this.endTime)
			);
		},
	},
};
</script>
<style lang="scss" scoped>
.timeline-grid {
	display: grid;
	grid-template-rows: auto repeat(6, 1fr);
}
</style>
<template>
	<div class="edit-schedule">
		<div class="row">
			<div class="col">
				<div class="form-group">
					<label for="watchable">Voorstelling</label>
					<select
						@change="changedWatchable"
						v-model="scheduled.watchableId"
						type="text"
						class="form-control"
						id="watchable"
						placeholder="Titel"
					>
						<option
							v-for="item in watchables"
							v-bind:key="item"
							:value="item._id"
						>
							{{ item.title }}
						</option>
					</select>
				</div>
			</div>
			<div class="col">
				<div class="form-group">
					<label for="date">Datum</label>
					<input
						@change="calcEndTime"
						v-model="scheduled.date"
						class="form-control"
						type="date"
						name=""
						minDate="0"
						id="date"
					/>
				</div>
			</div>
			<div class="col">
				<div class="form-group">
					<label for="start">Start tijd</label>
					<input
						v-model="scheduled.start"
						@change="calcEndTime"
						class="form-control"
						type="time"
						name=""
						id="start"
					/>
				</div>
			</div>
			<div class="col">
				<div class="form-group">
					<label for="end">Eind tijd</label>
					<input
						v-model="scheduled.end"
						class="form-control"
						type="time"
						name=""
						id="end"
						disabled
					/>
				</div>
			</div>
			<div class="col">
				<label>Zaal</label>
				<div class="btn-group">
					<button
						v-for="i in 6"
						:key="i"
						class="btn"
						:class="{
							'btn-primary': scheduled.location == i,
							'btn-light': scheduled.location != i,
						}"
						@click="setLocation(i)"
					>
						{{ i }}
					</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-auto">
				<img class="img-fluid" :src="watchable.poster" alt="" />
			</div>
			<div class="col">
				<h1>{{ watchable.title }}</h1>
				<p>{{ watchable.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import watchableService from "../../services/watchable";

export default {
	name: "Scheduled",
	props: {
		populateWith: Object,
	},
	watch: {
		populateWith: function () {
			this.scheduled = this.populateWith;
			this.changedWatchable();
		},
	},
	data() {
		return {
			watchables: [],
			scheduled: {
				location: 0,
			},
			watchable: {
				poster: "",
			},
		};
	},
	async created() {
		let result = await watchableService.get();
		this.watchables = result.data;
	},
	methods: {
		calcEndTime() {
			try {
				let start = new Date(
					this.scheduled.date + " " + this.scheduled.start
				);
				let addMinutes = this.watchable.length;
				let end = new Date(start.getTime() + addMinutes * 60000);
				this.scheduled.end =
					this.addLeading(end.getHours()) +
					":" +
					this.addLeading(end.getMinutes());

				if (!this.scheduled.hasSynced) {
					this.scheduled.hasSynced = true;
				} else {
					this.scheduled.isUpdated = true;
				}
			} catch {
				this.scheduled.end = NaN;
			}
		},
		changedWatchable() {
			try {
				this.watchable = this.watchables.find(
					(x) => x._id == this.scheduled.watchableId
				);
				this.scheduled.watchableId = this.watchable._id;
				this.scheduled.watchableTitle = this.watchable.title;
				this.calcEndTime();
			} catch (err) {
				console.log(err);
			}
		},
		setLocation(i) {
			this.scheduled.location = i;
			this.scheduled.isUpdated = true;
		},
		addLeading(number) {
			if (parseInt(number) < 10) {
				return "0" + number;
			} else {
				return number;
			}
		},
	},
};
</script>

<template>
	<div class="ticket-selection">
		<div class="alert alert-info" role="alert">
			<strong>Project informatie?</strong><br />
			<span
				>Klik <a href="/project">hier</a> om naar projectinformatie te
				gaan</span
			>
		</div>
		<div class="row gap-1">
			<div class="col-auto">
				<div class="list-group">
					<Scheduled
						v-for="item in scheduled"
						:key="item"
						:poster="item.watchable.poster"
						:title="item.watchable.title"
						:classification="item.watchable.classification"
						:start="item.start"
						:end="item.end"
						:location="item.location"
						:id="item._id"
						@ticket-selected="addCheckout"
					/>
				</div>
			</div>
			<div class="col">
				<div
					class="list-group sticky-top pt-3"
					style="margin-top: -1rem"
				>
					<CheckoutItem
						v-for="(item, index) in checkouts"
						:id="item.id"
						:key="item"
						:movie-id="item.movieId"
						:title="item.title"
						:type="item.type"
						:cost="item.cost"
						:amount="item.amount"
						:class="{ 'bg-light': index == currentIndex }"
						:is-editing="index == currentIndex"
						@click="setActive(item, index)"
						@add="add"
						@subtract="subtract"
						@remove="remove"
					/>
					<CheckoutTotal
						v-if="checkouts.length > 0"
						:cost="total"
						:count="count"
						@click="setActive(null, -1)"
					/>
					<CheckoutOptions
						v-if="checkouts.length > 0"
						@cancel="cancel"
					/>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Scheduled from "../components/scheduled/Scheduled";
import CheckoutItem from "../components/checkout/CheckoutItem";
import CheckoutTotal from "../components/checkout/CheckoutTotal";
import CheckoutOptions from "../components/checkout/CheckoutOptions";
import watchableService from "../services/watchable";
import scheduledService from "../services/scheduled";

export default {
	name: "TicketSelection",
	components: {
		Scheduled,
		CheckoutItem,
		CheckoutTotal,
		CheckoutOptions,
	},
	data() {
		return {
			scheduled: [],
			checkouts: [],
			total: 0.0,
			count: 0,
			currentIndex: -1,
			currentItem: {},
		};
	},

	async created() {
		try {
			let watchables = (await watchableService.get()).data;
			let scheduled = (await scheduledService.get()).data;

			scheduled.forEach((s) => {
				s.watchable = watchables.find((w) => w._id == s.watchableId);
			});

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
			let filtered = this.checkouts.filter(
				(x) =>
					x.id == item.id &&
					x.type == item.type &&
					x.title == item.title
			);

			if (filtered.length == 0) {
				this.checkouts.push({
					id: item.id,
					title: item.title,
					movieId: item.movieId,
					type: item.type,
					cost: item.cost,
					costOne: item.cost,
					amount: 1,
				});
			} else {
				filtered[0].amount++;
			}

			this.updateCheckoutList();
		},

		cancel() {
			this.checkouts = [];
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
			this.checkouts = this.checkouts.filter(
				(x) => x != this.currentItem
			);

			this.currentItem = {};
			this.currentIndex = -1;
			this.updateCheckoutList();
		},

		updateCheckoutList() {
			let total = 0;
			this.checkouts.forEach((item) => {
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
			this.checkouts.forEach((x) => (count += parseInt(x.amount)));
			this.count = count;
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
	},
};
</script>
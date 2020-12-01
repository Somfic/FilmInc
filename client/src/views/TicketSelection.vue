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
						v-for="watchable in watchables"
						:key="watchable"
						:poster="watchable.poster"
						:title="watchable.title"
						:classification="watchable.classification"
						:id="watchable._id"
						@ticket-selected="addCheckout"
					>
					</Scheduled>
				</div>
			</div>
			<div class="col">
				<div class="list-group">
					<CheckoutItem
						v-for="(item, index) in checkouts"
						:key="item"
						:movieId="item.movieId"
						:id="item.id"
						:title="item.title"
						:type="item.type"
						:cost="item.cost"
						:amount="item.amount"
						:class="{ 'bg-light': index == currentIndex }"
						:isEditing="index == currentIndex"
						@click="setActive(item, index)"
						@add="add"
						@subtract="subtract"
						@remove="remove"
					></CheckoutItem>
					<CheckoutTotal
						v-if="checkouts.length > 0"
						:cost="total"
						:count="count"
						@click="setActive(null, -1)"
					></CheckoutTotal>
					<CheckoutOptions
						v-if="checkouts.length > 0"
						@cancel="cancel"
					></CheckoutOptions>
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
			watchables: [],
			checkouts: [],
			total: 0.0,
			count: 0,
			currentIndex: -1,
			currentItem: {},
		};
	},
	methods: {
		addCheckout(item) {
			let filtered = this.checkouts.filter(
				(x) =>
					x.movieId == item.movieId &&
					x.type == item.type &&
					x.title == item.title
			);

			if (filtered.length == 0) {
				this.checkouts.push({
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

	async created() {
		try {
			let request = await watchableService.get();
			this.watchables = request.data;
		} catch (err) {
			console.log(err);
		}
	},
};
</script>
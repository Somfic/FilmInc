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
						v-for="checkout in checkouts"
						:key="checkout"
						:movieId="checkout.movieId"
						:id="checkout.id"
						:title="checkout.title"
						:type="checkout.type"
						:cost="checkout.cost"
						:amount="checkout.amount"
						@add="add"
						@subtract="subtract"
						@remove="remove"
					></CheckoutItem>
					<CheckoutTotal
						v-if="checkouts.length > 0"
						:cost="total"
						:count="count"
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
		return { watchables: [], checkouts: [], total: 0.0, count: 0 };
	},
	methods: {
		addCheckout(item) {
			let filtered = this.checkouts.filter(
				(x) => x.movieId == item.movieId && x.type == item.type
			);

			if (filtered.length == 0) {
				this.checkouts.push({
					title: item.title,
					id: this.uuid4(),
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

		add(checkoutId) {
			let filtered = this.checkouts.filter((x) => x.id == checkoutId);
			filtered[0].amount++;
			this.updateCheckoutList();
		},

		subtract(checkoutId) {
			let filtered = this.checkouts.filter((x) => x.id == checkoutId);
			filtered[0].amount--;
			if (filtered[0].amount <= 0) {
				this.remove(checkoutId);
			} else {
				this.updateCheckoutList();
			}
		},

		remove(checkoutId) {
			this.checkouts = this.checkouts.filter((x) => x.id != checkoutId);
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

		uuid4() {
			const ho = (n, p) => n.toString(16).padStart(p, 0);
			const view = new DataView(new ArrayBuffer(16));
			crypto.getRandomValues(new Uint8Array(view.buffer));
			view.setUint8(6, (view.getUint8(6) & 0xf) | 0x40);
			view.setUint8(8, (view.getUint8(8) & 0x3f) | 0x80);
			return `${ho(view.getUint32(0), 8)}-${ho(
				view.getUint16(4),
				4
			)}-${ho(view.getUint16(6), 4)}-${ho(view.getUint16(8), 4)}-${ho(
				view.getUint32(10),
				8
			)}${ho(view.getUint16(14), 4)}`;
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
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
					<CheckoutTotal
						v-if="checkouts.length > 1"
						:cost="total"
						:count="checkouts.length"
					></CheckoutTotal>
					<CheckoutItem
						v-for="checkout in checkouts"
						:key="checkout"
						:id="checkout.id"
						:title="checkout.title"
						:type="checkout.type"
						:cost="checkout.cost"
					></CheckoutItem>
					<CheckoutTotal
						v-if="checkouts.length > 1"
						:cost="total"
						:count="checkouts.length"
					></CheckoutTotal>
					<CheckoutOptions
						v-if="checkouts.length > 0"
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
		return { watchables: [], checkouts: [], total: 0.0 };
	},
	methods: {
		addCheckout(item) {
			this.checkouts.push({
				title: item.title,
				id: item.id,
				type: item.type,
				cost: item.cost,
			});

			let total = 0;
			this.checkouts.forEach(
				(x) => (total += parseFloat(x.cost.replace(",", ".")))
			);
			this.total = total.toFixed(2).replace(".", ",");
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
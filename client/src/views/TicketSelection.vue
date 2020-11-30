<template>
	<div class="ticket-selection row">
		<div class="schedule list-group col-auto">
			<Scheduled
				v-for="item in watchables"
				:key="item"
				:img="item.poster"
				:title="item.title"
			>
			</Scheduled>
		</div>
		<div class="checkout col-auto">
			<Checkout></Checkout>
		</div>
	</div>
</template>


<script>
import Scheduled from "../components/Scheduled";
import Checkout from "../components/checkout/CheckoutItem";
import watchableService from "../services/watchable";

export default {
	name: "TicketSelection",
	components: {
		Scheduled,
		Checkout,
	},
	data() {
		return { watchables: [] };
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
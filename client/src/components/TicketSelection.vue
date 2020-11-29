<template>
	<div class="ticket-selection row">
		<div class="col-8 list-group">
			

			<Scheduled
				img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Trolls-Wereldtour_ps_1_jpg_sd-high_Copyright-2019-DreamWorks-Animation-LLC-All-Rights-Reserved_NL_FO.jpg"
				title="Trolls Wereldtour"
				start_time="12:40"
				end_time="14:42"
				theatre="2"
			></Scheduled>
			<Scheduled
				img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Honest-Thief_ps_1_jpg_sd-high_NL_FO.jpg"
				title="Honest Thief"
				start_time="12:50"
				end_time="14:30"
				theatre="3"
			></Scheduled>
		</div>
		<div class="col-4 checkout">
			<div class="checkout-items list-group-items">
				<CheckoutItem
					name="Standaard"
					cost="7,50"
					class="list-group-item"
				></CheckoutItem>
				<CheckoutItem
					name="Standaard"
					cost="7,50"
					class="list-group-item"
				></CheckoutItem>
				<CheckoutItem
					name="Standaard"
					cost="7,50"
					class="list-group-item"
				></CheckoutItem>
				<CheckoutItem
					name="Standaard"
					cost="7,50"
					class="list-group-item"
				></CheckoutItem>
			</div>
			<div class="checkout-total">
				<CheckoutTotal cost="30,00"></CheckoutTotal>
			</div>
		</div>
	</div>
</template>

<script>
import Scheduled from "./Scheduled.vue";
import CheckoutItem from "./checkout/CheckoutItem.vue";
import CheckoutTotal from "./checkout/CheckoutTotal.vue";

export default {
	name: "TicketSelection",
	components: {
		Scheduled,
		CheckoutItem,
		CheckoutTotal,
	},
};
</script>
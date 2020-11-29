<template>
	<div class="ticket-selection list-group">
		<Scheduled
			img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Tenet_ps_1_jpg_sd-high_Copyright-COPYRIGHT-2020-Warner-Bros-Entertainment-Inc-All-Rights-Reserved-Photo-Credit-Melinda-Sue-Gordon_NL_FO.jpg"
			title="Tenet"
			start_time="12:35"
			end_time="14:21"
			theatre="5"
			age="12"
			tags="2D"
		>
		</Scheduled>
	</div>
</template>


<script>
import Scheduled from "../components/Scheduled";

export default {
	name: "TicketSelection",
	components: {
		Scheduled,
	},
};
</script>
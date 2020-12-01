<template>
	<div class="card">
		<div class="row m-0">
			<div class="card-header border-0 col-auto">
				<img class="img-thumbnail" :src="poster" alt="" />
			</div>
			<div class="card-block m-3 px-2 col">
				<h1>{{ title }}</h1>
				<p class="card-text">{{ description }}</p>
			</div>
		</div>
		<div class="row m-0 card-footer">
			<Badge :content="classification"></Badge>
			<Badge :content="length + ' min'"></Badge>
		</div>
	</div>
</template>

<script>
import Badge from "../badges/Badge";
export default {
	name: "Watchable",
	components: {
		Badge,
	},
	props: {
		title: String,
		description: String,
		poster: String,
		length: Number,
		classification: String,
		variations: Array,
	},
};
</script>
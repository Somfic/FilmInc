<template>
	<div class="card flex-row flex-wrap">
		<div class="card-header border-0">
			<img :src="img" alt="" />
		</div>
		<div class="card-block px-2">
			<h4 class="card-title">{{ title }}</h4>
			<p class="card-text">{{ description }}</p>
			<a href="#" class="btn btn-primary">BUTTON</a>
		</div>
		<div class="w-100"></div>
		<div class="card-footer w-100 text-muted">FOOTER</div>
	</div>
</template>

<script>
export default {
	name: "Watchable",
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
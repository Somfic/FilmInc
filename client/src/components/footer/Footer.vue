<template>
	<footer class="border-top">
		<span class="text-muted">FilmInc 2020</span>
		<span class="text-muted">{{ name() }}</span>
	</footer>
</template>
<script>
import cacheService from "../../services/cache";
import jwt from "jsonwebtoken";

export default {
	name: "Footer",
	data() {
		return {
			name: () => {
				let token = cacheService.read("token");
				let payload = jwt.decode(token);

				return payload.name.toString();
			},
		};
	},
};
</script>
<style scoped>
footer {
	width: 100%;
	display: flex;
	height: 50px;
	margin-top: 50px;
	align-items: center;
	justify-content: space-around;
	padding: 1rem;
	z-index: -20;
	background-color: rgb(235, 235, 235);
}
</style>
<template>
	<div class="ftr rounded border my-3 bg-light p-3">
		<span class="text-muted">FilmInc 2020</span>
		<span class="text-muted">{{ name() }}</span>
	</div>
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
.ftr {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
}
</style>
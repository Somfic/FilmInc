<template>
	<div>
		<div class="container">
			<router-view />
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Footer from "./components/footer/Footer";

export default {
	name: "App",
	components: { Footer },
};
</script>
<style>
footer {
	position: fixed;
	bottom: 0;
	width: 100%;
}

.container {
	padding: 1rem 0px;
}

.list-group-item-action {
	cursor: pointer !important;
}
pre {
	white-space: pre-wrap;
}
#app,
html,
body,
.container {
	width: 100%;
	height: 100%;
}
</style>
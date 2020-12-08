<template>
	<div class="container">
		<router-view />
	</div>
</template>
<style>
footer {
	position: fixed;
	bottom: 0;
	width: 100%;
}

.container {
	padding-top: 1rem;
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
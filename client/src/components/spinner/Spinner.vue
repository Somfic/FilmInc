<template>
	<div
		v-if="isShown"
		class="circle-loader"
		v-bind:class="{ success: isSuccess, failed: isFailed }"
	>
		<div class="status draw"></div>
	</div>
</template>
<script>
export default {
	name: "Spinner",
	props: {
		isShown: Boolean,
		isSuccess: Boolean,
		isFailed: Boolean,
	},
};
</script>


<style lang="scss" scoped>
// Define vars we'll be using
$sin45: 0.70710678;

$brand-success: #71b671;
$brand-failure: #e96b6b;
$brand-loader: rgb(201, 59, 118);
$loader-size: 100%;
$symbol-thickness: 2px;
$check-height: $loader-size/2.1;
$check-width: $check-height/2;
$check-left: ($loader-size/7 + $loader-size/15);
$check-color: $brand-success;
$cross-color: $brand-failure;
$cross-offset: ($check-height / $sin45) - $check-height + 0.168;

.circle-loader {
	border: $symbol-thickness solid rgba(0, 0, 0, 0.2);
	border-left-color: $brand-loader;
	animation-name: loader-spin;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	position: relative;
	display: block;
	margin: 0;
	padding: 0;
	&,
	&:after {
		border-radius: 50%;
		width: $loader-size;
		height: $loader-size;
	}
}

.success {
	border-color: $brand-success;
	transition: all 500ms ease-out;
	background-color: $brand-success;
}

.failed {
	border-color: $brand-failure;
	transition: all 500ms ease-out;
	background-color: $brand-failure;
}

@keyframes loader-spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
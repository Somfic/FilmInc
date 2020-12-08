<template>
	<div
		class="circle-loader"
		:class="{ inactive: !isLoading, success: isSuccess, failed: isFailed }"
	>
		<div class="status draw" />
	</div>
</template>
<script>
export default {
	name: "Spinner",
	props: {
		isLoading: Boolean,
		isSuccess: Boolean,
		isFailed: Boolean,
	},
};
</script>


<style lang="scss" scoped>
$brand-success: #71b671;
$brand-failure: #e96b6b;
$brand-loader: rgb(105, 138, 187);
$loader-size: 1.5rem;
$symbol-thickness: 4px;
$check-color: $brand-success;
$cross-color: $brand-failure;

.circle-loader {
	border: $symbol-thickness solid rgba(0, 0, 0, 0.2);
	border-left-color: $brand-loader;
	animation-name: loader-spin;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	position: relative;
	display: inline-block;
	margin: 0;
	padding: 0;
	opacity: 1;
	transition: opacity 500ms ease-out;
	&,
	&:after {
		border-radius: 50%;
		width: $loader-size;
		height: $loader-size;
	}

	&.inactive {
		opacity: 0;
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
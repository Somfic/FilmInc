<template>
	<div class="list-group my-3">
		<div class="list-group-item">
			<div class="btn-group">
				<button class="btn btn-dark" v-on:click="execute">
					{{ message }}
				</button>
				<button
					class="btn btn-dark"
					v-if="isLoading"
					v-on:click="toggleResult"
				>
					<Spinner
						:isShown="isLoading"
						:isSuccess="isSuccess"
						:isFailed="isFailed"
					></Spinner>
				</button>
			</div>
		</div>
		<div class="list-group-item" v-if="showResult">
			<pre><code >{{ result }}</code></pre>
		</div>
	</div>
</template>
<script>
import Spinner from "../spinner/Spinner";

export default {
	name: "Action",
	components: {
		Spinner,
	},
	props: {
		message: String,
		action: Function,
	},
	data() {
		return {
			isLoading: false,
			isFailed: false,
			isSuccess: false,
			showResult: false,
			result: "",
		};
	},
	methods: {
		execute() {
			this.isLoading = true;
			this.isFailed = false;
			this.isSuccess = false;

			this.action
				.call()
				.then((res) => {
					this.isSuccess = true;
					this.result = res;
				})
				.catch((err) => {
					console.log(err.data);
					this.isFailed = true;
					this.result = err;
				});
		},

		toggleResult() {
			this.showResult = !this.showResult;
		},
	},
};
</script>


<style lang="scss" scoped>
// Define vars we'll be using
$sin45: 0.70710678;

$brand-success: #71b671;
$brand-failure: #e96b6b;
$brand-loader: rgb(169, 193, 216);
$loader-size: 1rem;
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
	animation-timing-function: linear;
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
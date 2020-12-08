<template>
	<div>
		<div v-for="action in actions" :key="action" class="btn-group mr-3">
			<button
				class="btn px-3"
				@click="execute(action)"
				:class="action.class"
			>
				{{ action.message }}
			</button>
			<button
				v-if="action.isLoading || action.isFailed || action.isSuccess"
				class="btn d-flex align-items-center pl-0 px-3"
				:class="action.class"
				@click="toggleResult"
			>
				<Spinner
					:is-success="action.isSuccess"
					:is-failed="action.isFailed"
					:isLoading="
						action.isLoading || action.isFailed || action.isSuccess
					"
				/>
				<span
					v-if="codeText != ''"
					class="ml-2 font-weight-bold"
					v-bind:class="{
						'success-text': action.isSuccess,
						'failed-text': action.isFailed,
					}"
					>{{ code }} {{ codeText }}</span
				>
			</button>
		</div>
		<ActionResult
			:result="result"
			:code="code"
			:codeText="codeText"
			:shown="showResult"
		></ActionResult>
	</div>
</template>
<script>
import Spinner from "./Spinner";
import ActionResult from "./ActionResult";

export default {
	name: "Action",
	components: {
		Spinner,
		ActionResult,
	},
	props: {
		actions: Array,
	},
	data() {
		return {
			showResult: 0,
			result: null,
			code: 0,
			codeText: "",
		};
	},
	methods: {
		execute(item) {
			this.actions.forEach((x) => (x.isLoading = false));

			item.isLoading = true;
			item.isFailed = false;
			item.isSuccess = false;
			this.result = "Pending ...";
			this.code = 0;
			this.codeText = "";

			item.action
				.call()
				.then((res) => {
					item.isSuccess = true;
					item.isLoading = false;
					this.result = res;
					this.code = res.status;
					this.codeText = res.statusText;
					this.$emit("executed");
				})
				.catch((err) => {
					item.isFailed = true;
					item.isLoading = false;
					this.result = err;
					this.code = err.status;
					this.codeText = err.statusText;
					this.$emit("executed");
				});
		},

		toggleResult() {
			this.showResult++;
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

.success-text {
	color: $brand-success;
}

.success {
	border-color: $brand-success;
	transition: all 500ms ease-out;
	background-color: $brand-success;
}

.failed-text {
	color: $brand-failure;
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
<template>
	<div class="popup-wrapper" v-if="isShowing">
		<div class="popup">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">
						{{ code }} {{ codeText }}
					</h5>

					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
						@click="isShowing = false"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body" v-if="result != null">
					<Highlight language="json" :result="result"></Highlight>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-dismiss="modal"
						@click="isShowing = false"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Highlight from "./Highlight";

export default {
	name: "ActionResult",
	components: {
		Highlight,
	},
	props: {
		code: Number,
		codeText: String,
		result: Object,
		shown: Number,
	},
	data() {
		return {
			isShowing: false,
		};
	},
	watch: {
		shown: function () {
			this.isShowing = true;
		},
	},
};
</script>
<style lang="scss" scoped>
.popup-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.616);

	.popup {
		width: 80%;
		margin: auto;
		padding: 1rem;
	}

	.modal-body {
		padding: 0;
		margin: 0;

		pre {
			margin: 0;
			padding: 2rem;
		}
	}
}
</style>
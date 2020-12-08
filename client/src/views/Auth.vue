<template>
	<div class="auth h-100 w-100">
		<div class="card">
			<div class="d-flex inputs">
				<div class="input-group">
					<input
						v-for="i in 4"
						:key="i"
						class="form-control"
						type="text"
						maxlength="1"
						v-model="input[i - 1]"
					/>
				</div>
				<div class="input-group">
					<input
						v-for="i in 4"
						:key="i"
						class="form-control"
						type="password"
						maxlength="1"
						v-model="input[i + 3]"
					/>
				</div>
			</div>

			<div class="keypad">
				<button
					class="btn rounded btn-light"
					v-for="i in 9"
					:key="i"
					@click="addInput(i)"
				>
					{{ i }}
				</button>

				<button class="btn rounded btn-light" disabled>
					<Spinner
						:isLoading="isLoading"
						:isSuccess="isSuccess"
						:isFailed="isFailed"
					></Spinner>
				</button>
				<button class="btn rounded btn-light" @click="addInput(0)">
					0
				</button>
				<button class="btn rounded btn-light" @click="backspace()">
					<i class="fas fa-backspace"></i>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import Spinner from "../components/action/Spinner";
import authService from "../services/auth";
import cacheService from "../services/cache";
import router from "../router/index";

export default {
	name: "Auth",
	components: {
		Spinner,
	},
	data() {
		return {
			input: [],
			isLoading: false,
			isSuccess: false,
			isFailed: false,
		};
	},
	methods: {
		addInput(i) {
			this.input.push(i);
			if (this.input.length == 8) {
				this.login();
			} else {
				this.isLoading = false;
			}

			this.isFailed = false;
			this.isSuccess = false;
		},
		backspace() {
			this.input.pop();
			this.isLoading = false;
		},
		login() {
			this.isFailed = false;
			this.isSuccess = false;
			this.isLoading = true;

			let login = this.input.slice(0, 4).join("");
			let code = this.input.slice(4, 8).join("");

			authService
				.login({
					uid: login,
					code: code,
				})
				.then((res) => {
					this.isSuccess = true;
					let token = res.data.token;
					cacheService.write("token", token);

					router.push("/");
				})
				.catch((err) => {
					this.isFailed = true;
					this.input = this.input.slice(0, 4);
					console.log(err);
				});
		},
	},
};
</script>
<style scoped>
.auth {
	display: flex;
	align-items: center;
	justify-content: center;
}

.card {
	width: 700px;
	margin: auto;
	justify-content: center;
	align-items: center;
	padding: 10% 0px;
	border-radius: 2rem;
}

.input-group {
	width: auto;
	margin: 0rem 1rem;
	margin-bottom: 5rem;
}
.inputs input {
	width: 3rem;
	height: 3rem;
	text-align: center;
}

.keypad {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.keypad button {
	width: 4rem;
	height: 4rem;
	text-align: center;
	margin: 0.25rem;
}
</style>
<template>
	<div class="edit-watchable">
		<div class="list-group mb-3">
			<div
				v-on:click="finish"
				class="list-group-item list-group-item-action"
			>
				<i class="fas fa-caret-left pr-3" />Ga terug
			</div>
		</div>

		<form @change="valueChange">
			<div class="form-group">
				<label for="title">Titel</label>
				<input
					v-model="updatedItem.title"
					type="text"
					class="form-control"
					id="title"
					placeholder="Titel"
				/>
			</div>
			<div class="form-group">
				<label for="length">Lengte</label>
				<div class="input-group">
					<input
						v-model="updatedItem.length"
						type="number"
						class="form-control"
						id="length"
						placeholder="0"
					/>
					<div class="input-group-append">
						<div class="input-group-text">minuten</div>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label for="poster">Poster afbeelding URL</label>
				<input
					v-model="updatedItem.poster"
					type="text"
					class="form-control"
					id="poster"
					placeholder="Link naar poster"
				/>
			</div>
			<div class="form-group">
				<label for="description">Beschrijving</label>
				<textarea
					v-model="updatedItem.description"
					type="text"
					class="form-control"
					id="description"
					rows="5"
					placeholder="Beschrijving van voorstelling"
				/>
			</div>
			<div class="form-group">
				<label for="classification">Klassificatie</label>
				<input
					v-model="updatedItem.classification"
					type="text"
					class="form-control"
					id="classification"
					placeholder="Kijkwijzer"
				/>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	name: "EditWatchable",
	props: {
		populateWith: Object,
	},
	data() {
		return {
			updatedItem: {},
			doneButton: "Update",
		};
	},
	methods: {
		valueChange() {
			this.$emit("value-change", this.updatedItem);
		},
		finish() {
			this.$emit("finish");
		},
	},
	async created() {
		if (this.populateWith != null) {
			this.updatedItem = this.populateWith;
		} else {
			delete this.updatedItem._id;
		}
	},
};
</script>
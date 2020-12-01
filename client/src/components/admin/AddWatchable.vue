<template>
	<div class="add-watchable">
		<div class="preview">
			title: String, description: String, poster: String, length: Number,
			classification: String, variations: Array,

			<Watchable
				:title="title"
				:description="description"
				:poster="poster"
				:length="length"
			></Watchable>
		</div>
		<form>
			<div class="row">
				<div class="form-group col-4">
					<label for="title">Titel</label>
					<input
						v-model="title"
						type="text"
						class="form-control"
						id="title"
						placeholder="Titel"
					/>
				</div>
				<div class="form-group col-2">
					<label for="length">Lengte</label>
					<div class="input-group">
						<input
							v-model="length"
							type="number"
							class="form-control"
							id="length"
						/>
						<div class="input-group-append">
							<div class="input-group-text">minuten</div>
						</div>
					</div>
				</div>
				<div class="form-group col-6">
					<label for="poster">Poster afbeelding URL</label>
					<input
						v-model="poster"
						type="text"
						class="form-control"
						id="poster"
					/>
				</div>
			</div>
			<div class="row">
				<div class="form-group col-8">
					<label for="description">Beschrijving</label>
					<textarea
						v-model="description"
						type="text"
						class="form-control"
						id="description"
						rows="5"
					/>
				</div>
				<div class="col-4">
					<div class="form-group">
						<label for="classification">Klassificatie</label>
						<input
							v-model="classification"
							type="text"
							class="form-control"
							id="classification"
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import Watchable from "../watchable/Watchable";

export default {
	name: "AddWatchable",
	components: {
		Watchable,
	},
	data() {
		return {
			title: "",
			length: 0,
			poster: "",
			description: "",
			classification: "",
		};
	},
};
</script>
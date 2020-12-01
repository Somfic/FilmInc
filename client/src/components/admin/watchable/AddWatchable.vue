<template>
	<div class="add-watchable">
		<div class="row">
			<div class="col-3">
				<form>
					<div class="form-group">
						<label for="title">Titel</label>
						<input
							v-model="title"
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
					<div class="form-group">
						<label for="poster">Poster afbeelding URL</label>
						<input
							v-model="poster"
							type="text"
							class="form-control"
							id="poster"
						/>
					</div>
					<div class="form-group">
						<label for="description">Beschrijving</label>
						<textarea
							v-model="description"
							type="text"
							class="form-control"
							id="description"
							rows="5"
						/>
					</div>
					<div class="form-group">
						<label for="classification">Klassificatie</label>
						<input
							v-model="classification"
							type="text"
							class="form-control"
							id="classification"
						/>
					</div>
				</form>
			</div>
			<div class="col-9">
				<Watchable
					:title="title"
					:description="description"
					:poster="poster"
					:length="length"
					:classification="classification"
				></Watchable>
				<Action message="Voeg toe aan database" :action="add"></Action>
			</div>
		</div>
	</div>
</template>
<script>
import Watchable from "../watchable/Watchable";
import Action from "../admin/Action";
import watchableService from "../../services/watchable";

export default {
	name: "AddWatchable",
	components: {
		Watchable,
		Action,
	},
	data() {
		return {
			title: "",
			length: 0,
			poster: "",
			description: "",
			classification: "",
			add: () => watchableService.add(this),
		};
	},
};
</script>
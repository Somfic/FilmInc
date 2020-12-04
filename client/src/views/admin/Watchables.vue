<template>
	<div class="watchablelist">
		<div class="row">
			<div class="col-3">
				<div v-if="!isEditing" class="list-group">
					<div
						class="list-group-item list-group-item-action"
						@click="startNew"
					>
						<i class="fas fa-plus-circle pr-3" />Nieuw
					</div>
					<div
						v-for="(item, index) in items"
						:key="item"
						class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
						:class="{ active: index == currentIndex }"
						@click="setActive(item, index)"
					>
						<span>{{ item.title }}</span>
						<i
							v-if="index == currentIndex"
							class="fas fa-pen"
							@click="startEditing"
						/>
					</div>
				</div>
				<EditWatchable
					:populateWith="currentItem"
					@value-change="hasEdited"
					@finish="finishEditing"
					v-if="isEditing"
				/>
			</div>
			<div v-if="currentItem" class="col-9">
				<Watchable
					:title="currentItem.title"
					:description="currentItem.description"
					:poster="currentItem.poster"
					:length="currentItem.length"
					:classification="currentItem.classification"
				/>
				<Action
					v-if="!isEditing"
					:actions="normalActions"
					@executed="executed"
				></Action>
				<Action
					v-if="isEditing && !isNew"
					:actions="editingActions"
					@executed="executed"
				></Action>
				<Action
					v-if="isEditing && isNew"
					:actions="newActions"
					@executed="executedNew"
				></Action>
			</div>
		</div>
	</div>
</template>

<script>
import Watchable from "../../components/watchable/Watchable";
import EditWatchable from "../../components/watchable/EditWatchable";
import Action from "../../components/action/Action";
import watchableService from "../../services/watchable";

export default {
	name: "Watchables",
	components: { Watchable, Action, EditWatchable },
	data() {
		return {
			items: [],
			currentIndex: -1,
			currentItem: null,
			normalActions: [
				{
					message: "Dupliceer",
					class: "btn-dark",
					action: () => watchableService.dupe(this.currentItem._id),
				},
				{
					message: "Verwijder",
					class: "btn-danger",
					action: () => watchableService.delete(this.currentItem._id),
				},
			],
			editingActions: [
				{
					message: "Sla op in database",
					class: "btn-dark",
					action: () =>
						watchableService.edit(
							this.currentItem._id,
							this.currentItem
						),
				},
			],
			newActions: [
				{
					message: "Voeg toe aan database",
					class: "btn-dark",
					action: () => watchableService.create(this.currentItem),
				},
			],
			isEditing: false,
			isNew: false,
		};
	},
	async created() {
		let result = await watchableService.get();
		this.items = result.data;
	},
	methods: {
		setActive(item, index) {
			this.currentIndex = index;
			this.currentItem = item;
		},
		resetIndex() {
			this.currentIndex = -1;
		},
		executed() {
			watchableService.get().then((res) => {
				this.items = res.data;
				if (
					!this.items[this.currentIndex] ||
					this.items[this.currentIndex].id != this.currentItem.id
				) {
					this.currentItem = null;
				} else {
					this.currentItem = this.items[this.currentIndex];
				}
			});
		},
		executedNew() {
			watchableService.get().then((res) => {
				this.items = res.data;
				this.currentIndex = this.items.length - 1;
				this.currentItem = this.items[this.currentIndex];
			});
		},
		startNew() {
			this.currentItem = {};
			this.isNew = true;
			this.isEditing = true;
		},

		startEditing() {
			this.isEditing = true;
		},
		finishEditing() {
			this.isNew = false;
			this.isEditing = false;
			this.executed();
		},
		hasEdited(item) {
			this.currentItem = item;
		},
	},
};
</script>
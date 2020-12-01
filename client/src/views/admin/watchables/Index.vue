<template>
	<div class="watchablelist">
		<div class="row">
			<div class="col-3">
				<div class="list-group">
					<div
						class="list-group-item list-group-item-action"
						v-for="(item, index) in items"
						:key="item"
						:class="{ active: index == currentIndex }"
						@click="setActive(item, index)"
					>
						<span>{{ item.title }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import watchableService from "../../../services/watchable";

export default {
	name: "WatchablesList",
	data() {
		return {
			items: [],
			currentIndex: -1,
			currentItem: {},
		};
	},
	methods: {
		setActive(item, index) {
			this.currentIndex = index;
			this.currentItem = item;
		},
	},

	async created() {
		let result = await watchableService.get();
		this.items = result.data;
	},
};
</script>
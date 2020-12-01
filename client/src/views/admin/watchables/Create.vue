<template>
	<div class="admin">
		<h1>Admin</h1>
		<AddWatchable></AddWatchable>
	</div>
</template>

<script>
import AddWatchable from "../components/admin/watchable/AddWatchable";

export default {
	name: "Admin",
	components: {
		AddWatchable,
	},
};
</script>
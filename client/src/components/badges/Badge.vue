<template>
	<span class="badge mr-1" :class="getClass()">
		{{ content }}
	</span>
</template>


<script>
export default {
	name: "Badge",
	props: {
		content: String,
	},
	methods: {
		getClass() {
			switch (this.content) {
				case "AL":
					return "badge-light";

				case "3+":
				case "6+":
				case "9+":
					return "badge-secondary";

				case "12+":
					return "badge-info";

				case "16+":
					return "badge-warning";

				case "18+":
					return "badge-danger";
			}
		},
	},
};
</script>
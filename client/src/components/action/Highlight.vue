<template>
	<pre><code :class=language v-html="html"></code></pre>
</template>
<script>
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/atom-one-dark.css";

export default {
	name: "Highlight",
	props: {
		language: String,
		content: Object,
	},
	data() {
		return {
			html: "",
		};
	},
	watch: {
		content: function () {
			let code = hljs.highlight(
				this.language,
				JSON.stringify(this.content, null, 2),
				true,
				false
			);

			this.html = code.value;
		},
	},
	async created() {
		hljs.registerLanguage("json", json);
	},
};
</script>
<style scoped>
pre {
	padding: 1rem;
	background-color: rgb(32, 34, 43);
	color: rgb(167, 167, 167);
}
</style>
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
		result: Object,
	},
	data() {
		return {
			html: "",
		};
	},
	async created() {
		hljs.registerLanguage("json", json);
		console.log(this.result);

		let code = hljs.highlight(
			this.language,
			JSON.stringify(this.result, null, 2),
			true,
			false
		);

		this.html = code.value;
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
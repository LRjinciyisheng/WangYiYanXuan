<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
	import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		components: {
			HelloWorld,
		},
	};
</script>
<style>
	img {
		width: 300px;
		font-size: 30px;
		height: 100px;
	}
</style>

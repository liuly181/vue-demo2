<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
		ready () {
			var width = document.documentElement.clientWidth / 12.42;
			document.documentElement.style.fontSize = width + 'px';
		}
	}
</script>

<style lang="scss">
	@import url(./assets/reset.css);
 	/*@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");*/
	html,
	body,
	.container,
	#app{
		width: 100%;
		height: 100%;
		font-family: "Microsoft Yahei";
		overflow: hidden;
	}

	.container {
		display: -webkit-flex;
		-webkit-flex-direction: column;
	}

	body {
		font-size: 16px;
	}
</style>

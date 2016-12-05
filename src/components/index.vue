<template>
  <div class="container">
      <index-home></index-home>
  </div>
</template>
<script>
	import indexHome from './indexHome'
	export default {
		components:{
			indexHome
		},
		methods : {
			login () {

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import url("../assets/vux.css");
	.container {
		display: -webkit-flex;
		-webkit-flex-direction: column;
	}
</style>

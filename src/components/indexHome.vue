<template>
    <router-view></router-view>
    <index-foot></index-foot>
</template>

<script>
	import indexFoot from './indexFoot'
    export default {
        data () {
            return {
            }
        },
        components: {
			indexFoot
        }
    }
</script>

<style scoped lang="scss">
	
</style>
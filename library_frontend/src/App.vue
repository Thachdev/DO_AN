<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
	components: {
		AppHeader,
		AppFooter
	},
}
</script>
<template>
		<div id="app">
			<AppHeader />
			<div class="mt-3">
				<router-view />
			</div>
			<AppFooter />
		</div>
</template>
<style scoped>
	
	#app {
		margin: 0;
		padding: 0;
		max-width: 100%;
		min-height: 680px;
		background-color: #fff;
		color:#161a21 ;
	}
	
	
</style>
<style>

.page {
		max-width: 400px;
		margin: auto;
	}
	
</style>
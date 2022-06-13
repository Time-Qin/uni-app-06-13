<template>
	<view>
		{{}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			this.getShopList()
		}
		methods: {
			async getShopList() {
				let result = await GetRequest("/api/goods/load?cityId=110&bid=1&fid=0&page=1&count=20&search=&total=31");
				this.getShopList = result.data
			}
		}
	}
</script>

<style>

</style>

<template>
	<view class="container">
		
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="iconfont icon-gouwuche"></text>
	</view>
</template>

<script>
	import {GetRequest} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {

			}
		},
		created(){
			this.GetData();
		},
		methods: {
			async GetData(){
				let result = await GetRequest('/api/page/load');//首页数据
				console.log(result);
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

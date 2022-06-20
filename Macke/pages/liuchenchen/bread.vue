<template>
	<view class="container">
		<view class="item" v-for="item in goodlist.data" :key="item.id">
			<view class="item-img">
				<image style="width: 100px;height: 100px;" :mode="widthFix" :src="item.img"></image>
			</view>
			<view class="item-r">
				<view class="item-title">{{item.name}}</view>
				<view class="item-desc">{{item.french}}</view>
				<view class="item-footer">
					<view class="item-price">{{item.price}}</view>
					<view class="item-shop">
						<text class="iconfont icon-gouwuche"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetRequest
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				goodlist: [],

			}
		},
		created() {
			this.getGoods();
		},
		methods: {
			async getGoods() {
				let result = await GetRequest("/api/goods/load?cityId=110&bid=11&fid=0&page=1&count=20&search=&total=15");
				this.goodlist = result.data
				console.log(this.goodlist)
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.item {
			background-color: #fff;
			display: flex;
			width: 350px;
			height: 120px;
			margin: 10px auto;
			border-radius: 5px;
			
			.item-img {
				margin: 10px;
				width: 100px;
				height: 100px;
			}
	
			.item-r {
				background-color: #fff;
                width: 210px;
				height: 120px;
				
				.item-price {
					color: black;
					font-weight: 550;
					font-size: 12px;
				}
				.item-desc {
					color:#a9a9a9;
					margin-top: 20rpx;
					font-size: 12px;
					width: 210px;
					height: 30px;
					margin-bottom: 10px;
				}
				.item-title {
					margin-top: 16px;
					font-size: 16px;
					font-weight: 400;
					font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
				}
				.item-footer {
					display: flex;
					justify-content: space-between;
					.item-shop {
						background-color: aliceblue;
					}
				}
			}

		}
	}
</style>


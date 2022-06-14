<template>
	<view class="container">
		<view class="tabBar">
			<view class="group">
				<view :class="['item',{active:active===index}]" v-for="(item,index) in currentGoods" :key="index"
					@click="getGoods(index,item.bid)">{{item.bname}}
				</view>
			</view>
			<scroll-view class="list" scroll-x="true" v-if=flag enable-flex="true">
				<view :class="['content',{active:activeKey===index}]" v-for="(item,index) in list" :key="item.id"
					@click="getGoodsGroup(index,item.tid)">{{item.tname}}</view>
			</scroll-view>
		</view>
		<view :class="flag? 'large-pad':'small-pad'"></view>
		<view class="goods">
			<view class="good" v-for="item in goods" :key="item.title" @click="goDetail(item.id)">
				<image :src="item.img" mode="widthFix"></image>
				<view class="content">
					<view class="name">{{item.name}}</view>
					<view class="french">{{item.french}}</view>
					<view class="buy">
						<view class="price">¥{{item.price}}</view>
						<uni-icons type="cart" size="24"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">——没有更多了——</view>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	export default {
		data() {
			return {
				currentGoods: [],
				goods: [],
				list: [],
				active: 0,
				flag: true,
				activeKey: 0
			}
		},
		created() {
			this.initGoods();
		},
		methods: {
			async initGoods() {
				let result = await GetRequest("/api/goods/category");
				result.code === 0 ? this.currentGoods = result.data : '';
				this.currentGoods[0].list.unshift({
					"bid": "1",
					"tgid": "1",
					"tid": "0",
					"tname": "全部"
				})
				this.list = this.currentGoods[0].list;
				this.getGoods(0, 1);
			},
			async getGoods(idx, bid) {
				this.active = idx;
				let result = await GetRequest("/api/goods/load?bid=" + bid);
				result.code === 0 ? this.goods = result.data.data : ''
				if (idx !== 0) {
					this.flag = false;
				} else {
					this.flag = true;
					let result1 = await GetRequest("/api/goods/load?bid=" + bid + "&page=2");
					result1.code === 0 ? this.goods = [...this.goods, ...result1.data.data] : ''
				}
			},
			async getGoodsGroup(idx, fid) {
				this.activeKey = idx;
				if (fid == 0) {
					this.getGoods(0, 1);
				} else {
					let result = await GetRequest("/api/goods/load?bid=1&fid=" + fid);
					console.log(result, fid);
					result.code === 0 ? this.goods = result.data.data : ''
				}
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/lanmin_detail/lanmin_detail?id='+id
				})
			}
		}
	}
</script>
<style scoped lang="less">
	.container {
		background-color: white;
		.large-pad{
			height: 82px;
		}
		.small-pad{
			height: 50px;
		}
		.tabBar {
			position: fixed;
			width: 100%;

			.group {
				height: 80rpx;
				background-color: white;
				display: flex;
				text-align: center;
				align-items: center;

				.item {
					flex: 1;
					color: #888;
					border-right: 1px solid #eee;
				}

				.active {
					font-weight: 700;
					color: cornflowerblue;
				}

				&:last-child {
					border: none;
				}
			}

			.list {
				display: flex;
				white-space: nowrap;
				height: 64rpx;
				background-color: white;
				padding-bottom: 10px;
				.content {
					height: 40rpx;
					margin: 10px 5px;
					padding: 2rpx 10rpx;
					text-align: center;
					line-height: 40rpx;
					border-radius: 8px;
					font-size: 12px;
					background-color: lightcyan;
				}

				.active {
					background-color: lightblue;
				}
			}
		}

		.goods {
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			width: 100%;
			padding:  0 10px 10px;

			.good {
				width: 50%;
				background-color: white;
				box-sizing: border-box;
				padding: 10rpx;

				image {
					width: 100%;
				}

				.content {
					width: 100%;
					padding: 10px;
					box-sizing: border-box;

					.name {
						letter-spacing: 2px;
					}

					.french {
						color: #999;
						font-size: 8px;
					}

					.buy {
						display: flex;
						align-items: center;
						width: 100%;
						justify-content: space-between;
						margin-top: 6px;

						.price {
							font-size: 12px;
						}

						uni-icons {
							text-align: right;
							background-color: lightcyan;
							border-radius: 2px;

							/deep/ .uni-icons {
								color: #888 !important;
							}
						}
					}
				}
			}
		}
		.bottom{
			text-align: center;
			color: #888;
			font-size: 12px;
			padding-bottom: 20px;
		}
	}
</style>

<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				好好吃面包
			</view>
		</header-nav>
		<view class="header" />
		<view style="margin-top: -200rpx;" class="goods">
			<view class="item" v-for="item in goodlist" :key="item.src">
				<view class="item-img" @click="gosku(item.id)">
					<image style="width: 100px;height: 100px;" mode="widthFix" :src="item.img"></image>
				</view>
				<view class="item-r">
					<view class="item-title">{{item.name}}</view>
					<view class="item-desc">{{item.french}}</view>
					<view class="item-footer">
						<view class="item-price">¥&nbsp;{{item.price}}</view>
						<view class="item-shop" @click="getDatasCar(item.id)">
							<text class="iconfont icon-gouwuche"></text>
						</view>
					</view>
					<car-view ref="Car" :contentDatas="contentDatas"></car-view>
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
				one: 1,
				goodlist: [],
				page: 1,
				canLoad: true,
				contentDatas: [],
				scrollTop: 0,
			}
		},
		created() {
			this.getGoodsPage1(this.page);
		},
		methods: {
			async getGoodsPage1() {
				let that = this;
				let result = await GetRequest(
					`/api/goods/load?cityId=110&bid=11&tid=0&fid=0&page=${that.page}&count=10`);
				if (result.data) {
					that.goodlist = that.goodlist.concat(result.data.data);
					if (result.data.data?.length === 10) {
						that.page += 1
					} else {
						that.canLoad = false;
					}
				} else {
					that.canLoad = false;
				}

			},
			backTo() {
				uni.navigateBack({});
			},
			async getDatasCar(sku) {
				let result = await GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
				result.msg === "Success" ? this.contentDatas = result.data : '';
				this.$refs.Car[0].shopContent2();
			},
			gosku(sku) {
				let sku1 = sku
				uni.navigateTo({
					url: `../index/good_details?sku=${sku1}`
				});
			},
		},
		//上拉加载
		onReachBottom() {
			if (this.canLoad) {
				this.getGoodsPage1()
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			console.log('refresh');
			this.page = 1;
			this.canLoad = true;
			this.getGoodsPage1()
		},
		onPageScroll(Top) {
			this.scrollTop = 200;
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: #cccccc;

		/deep/header-nav {
			display: flex;

			.slot-left {
				margin-left: 20rpx;
				flex: 1;
				color: white;

				.icon-xiangzuo1 {
					font-size: 40rpx;
					margin-right: 20rpx;
				}
			}

			.backC {
				background: #5c382c;
			}

			.navBarBox {
				background-color: #5c382c;
			}
		}

		.item {
			background-color: #fff;
			display: flex;
			width: 100%;
			height: 120px;
			margin-bottom: 10px;
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
					color: #a9a9a9;
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


		.header {
			height: 200rpx;
			width: 100%;
			background-color: #5c382c;
			border-radius: 0 0 40% 40%;
		}

		.goods {
			flex-wrap: wrap;
			box-sizing: border-box;
			width: 100%;
			padding: 0 10px 10px;

			.good {
				width: 100%;
				background-color: white;
				box-sizing: border-box;
				padding: 10rpx;
			}
		}
	}
</style>

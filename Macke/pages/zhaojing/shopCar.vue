<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="cart-title">
				购物车
			</view>
		</header-nav>
		<view v-if="goodcart===true" class="empty">
			<image src="/static/images/shop.png" mode="widthFix" style="width: 400rpx;"></image>
			<view class="empty-text">购物车空空如也</view>
			<view class="empty-button" @click="goshopping">去选购</view>
		</view>
		<view v-else class="carDetail">
			<uni-icons type="circle" size="30" class="icon"></uni-icons>
			<image class="poster" src="" mode=""></image>
			<view class="detail">
				<text>草莓蛋糕</text>
				<view class="">CaoMei</view>
				<view>一磅</view>
				<view style="display: flex;">
					<text>139</text>
					<uni-number-box :min="1" class="step"></uni-number-box>
				</view>
			</view>
		</view>
		<view class="title-split">
			<view class="line"></view>
			<text>推荐商品</text>
			<view class="line"></view>
		</view>
		<view class="goods">
			<view class="good" v-for="item in goods" :key="item.title">
				<view class="good_img" @click="gosku(item.id)">
					<image class="img" :src="item.img" mode="widthFix"></image>
				</view>
				<view class="content">
					<view class="name">{{item.name}}</view>
					<view class="french">{{item.french}}</view>
					<view class="buy">
						<view class="price">¥&nbsp;{{item.price}}</view>
						<uni-icons type="cart" size="30" @click="getDatasCar(item.id)"></uni-icons>
					</view>
					<car-view ref="Car" :contentDatas="contentDatas"></car-view>
				</view>
			</view>
			<uni-load-more v-if="hasMore" status="loading"></uni-load-more>
		</view>
		<view class="back-top" @click="goTop" :style="{'display':(flag===true? 'block':'none')}">
			<uni-icons type="arrow-up" size="30"></uni-icons>
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
				flag: false,
				scrollTop: 200,
				goods: [],
				pageIndex: 1,
				hasMore: true,
				contentDatas: [],
				goodDatas:[],
				goodcart:true
			}
		},
		created() {
			this.getShopList()
		},
		methods: {
			goshopping() {
				uni.navigateTo({
					url: "./bread"
				})
			},
			async getShopList() {
				//购物车数据
				let result1 =await GetRequest('/api/cart/load');
				result1.msg ==='Success'?this.goodDatas=result1.data:''
				if(result1.data.goods.length!=0){
					this.goodcart=false;
				}
				console.log(this.goodDatas,result1,this.goodcart);
				//推荐商品
				let result = await GetRequest(
					`/api/goods/load?cityId=110&bid=1&fid=0&page=${this.pageIndex}&count=20&search=&total=34`);
				if (result.data.data.length < 10) {
					this.hasMore = false;
				}
				console.log(result, this.pageIndex)
				result.code === 0 ? this.goods = [...this.goods, ...result.data.data] : ''
			},
			async getDatasCar(sku) {
				let result = await GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
				result.msg === "Success" ? this.contentDatas = result.data : '';
				this.$refs.Car[0].shopContent2();
			},
			//回到顶部
			goTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			gosku(sku) {
				let sku1 = sku
				uni.navigateTo({
					url: `../index/good_details?sku=${sku1}`
				});
			},
		},
		onPageScroll(scroll) {
			this.scrollTop = scroll.scrollTop;
			if (scroll.scrollTop > 400) { //当距离大于400时显示回到顶部按钮
				this.flag = true
			} else { //当距离小于400时隐藏回到顶部按钮
				this.flag = false
			}

		},
		//下拉加载
		onReachBottom() {
			if (this.hasMore) {
				this.pageIndex += 1;
				this.getShopList();
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.goods = [];
			this.pageIndex = 1;
			this.hasMore = true;
			this.getShopList().then(() => {
				uni.stopPullDownRefresh();
			});
		},
	}
</script>

<style lang="less" scoped>
	.container {
		/deep/header-nav {
			display: flex;

			.cart-title {
				flex: 1;
				margin-left: 30rpx;
			}
		}

		.empty {
			text-align: center;
			display: flex;
			align-items: center;
			flex-direction: column;

			&-text {
				color: #808080;
				margin-bottom: 50rpx;
			}

			&-button {
				width: 300rpx;
				height: 90rpx;
				color: orange;
				border: 1rpx solid orange;
				text-align: center;
				line-height: 90rpx;
				border-radius: 48rpx;
			}
		}

		/deep/.van-empty {
			padding: 0;
		}

		.title-split {
			margin: 48rpx 0 28rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;

			text {
				color: #333;
				font-weight: 500;
				font-size: 30rpx;
				padding: 0 24rpx;
			}

			.line {
				width: 98rpx;
				height: 4rpx;
				border-radius: 3rpx;

				&:first-of-type {
					background: linear-gradient(90deg, rgba(98, 98, 98, 0) 0%, #30a8ff 100%);
				}

				&:last-of-type {
					background: linear-gradient(90deg, #30a8ff 0%, rgba(98, 98, 98, 0) 100%);
				}
			}
		}

		.goods {
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			width: 100%;
			padding: 0 10px 10px;

			.good {
				width: 50%;
				background-color: white;
				box-sizing: border-box;
				padding: 10rpx;

				.good_img {
					border-radius: 8px 8px 0 0;
					overflow: hidden;

					.img {
						width: 100%;
					}
				}
			}

			.content {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;

				.name {
					font-size: 14px;
					letter-spacing: 1px;
				}

				.french {
					color: #999;
					font-size: 12px;
				}

				.buy {
					display: flex;
					align-items: center;
					width: 100%;
					justify-content: space-between;
					margin-top: 10px;

					.price {
						font-size: 12px;
					}

					uni-icons {
						text-align: right;
						background-color: lightcyan;
						border-radius: 2px;

						/deep/ .uni-icons {
							color: #888 !important;
							font-size: 24px !important;
						}
					}
				}
			}
		}

		.back-top {
			height: 60rpx;
			width: 60rpx;
			background-color: lightcyan;
			border-radius: 50%;
			box-shadow: 0 0 30rpx 4rpx rgba(0, 0, 0, 0.4);
			position: fixed;
			bottom: 140rpx;
			right: 45rpx;
			text-align: center;
			line-height: 60rpx;
			display: none;
			/* 先将元素隐藏 */
		}

		// .carDetail {
		// 	width: 100%;
		// 	padding: 0 40rpx;
		// 	background-color: white;
		// 	display: flex;

		// 	.icon {
		// 		display: flex;
		// 		align-items: center;
		// 	}
		// }

		// .poster {
		// 	width: 180rpx;
		// 	height: 180rpx;
		// 	background-color: #30a8ff;
		// }
	}
</style>

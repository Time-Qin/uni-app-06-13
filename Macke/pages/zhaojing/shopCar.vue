<template>
	<view class="container">
		<van-empty class="custom-image" image="/static/images/shop.png" description="购物车空空如也">
			<van-button round type="info" class="bottom-button">去逛逛</van-button>
		</van-empty>
		<view class="title-split">
			<view class="line"></view>
			<text>推荐商品</text>
			<view class="line"></view>
		</view>
		<view class="goods">
			<view class="good" v-for="item in goods" :key="item.title">
				<view class="good_img">
					<image class="img" :src="item.img" mode="widthFix"></image>
				</view>
				<view class="content">
					<view class="name">{{item.name}}</view>
					<view class="french">{{item.french}}</view>
					<view class="buy">
						<view class="price">¥&nbsp;{{item.price}}</view>
						<uni-icons type="cart" size="30"></uni-icons>
					</view>
				</view>
			</view>
			<uni-load-more v-if="hasMore" status="loading"></uni-load-more>
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
				goods: [],
				pageIndex: 1,
				hasMore: true
			}
		},
		created() {
			this.getShopList()
		},
		methods: {
			async getShopList() {
				let result = await GetRequest(
					`/api/goods/load?cityId=110&bid=1&fid=0&page=${this.pageIndex}&count=20&search=&total=34`);
				if (result.data.data.length < 10) {
					this.hasMore = false;
				}
				console.log(result, this.pageIndex)
				result.code === 0 ? this.goods = [...this.goods, ...result.data.data] : ''
			}
		},
		//下拉加载
		onReachBottom() {
			// console.log('到底了')
			if (this.hasMore) {
				this.pageIndex += 1;
				this.getShopList();
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.goods = [];
			this.pageindex = 1;
			this.hasMore = true;
			this.getShopList().then(()=>{
				uni.stopPullDownRefresh();
			});
		}
	}
</script>

<style lang="less" scoped>
	.container {
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
	}
</style>

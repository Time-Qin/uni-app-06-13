<template>
	<view>
		<view class="wrap">
			<header-nav :scrollTop="scrollTop" :one="one">
				<view class="slot-left">
					<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
					全部订单
				</view>
			</header-nav>
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#78b4e3" ref="tabs" :list="list" :current="current" @change="change"
					:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item,index) in list" :key="index">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view v-if="orderList.length>0">
						<view class="page-box">
							<view class="order" v-for="res, in orderList" :key="res.id">
								<view class="top">
									<view class="left">
										<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
										<view class="store">订单号：{{res.id}}</view>
										<u-icon name="arrow-right" color="#cbcbcb" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left">
										<image :src="item.goodsUrl" mode="aspectFill"></image>
									</view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">{{ item.type }}</view>
										<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									共{{ totalNum(res.goodsList) }}件商品 合计:
									<text class="total-price">
										￥{{ priceInt(totalPrice(res.goodsList)) }}
									</text>
								</view>
								<view class="bottom">
									<view class="logistics btn">查看物流</view>
									<view class="exchange btn">卖了换钱</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
						
						</view>
						<view class="page-box" v-else>
							<view>
								<view class="centre">
									<image src="https://cdn.uviewui.com/uview/template/taobao-order.png" mode=""></image>
									<view class="explain">
										您还没有相关的订单
										<view class="tips">可以去看看有那些想买的</view>
									</view>
									<view class="btn">随便逛逛</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				one: 1,
				orderList: [{
					id: 18299861241928748971,
					store: '夏日流星限定贩卖',
					deal: '交易成功',
					goodsList: [{
							goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
							title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
							type: '灰色;M',
							deliveryTime: '付款后30天内发货',
							price: '348.58',
							number: 2
						},
						{
							goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
							title: '【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款',
							type: '45cm;S',
							deliveryTime: '付款后30天内发货',
							price: '135.00',
							number: 1
						}
					]
				}, ],
				list: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '待确认'
					},
					{
						name: '待发货',
					},
					{
						name: '待收货',
					},
					{
						name: '已完成'
					},
					{
						name: '待评价',
					},
					{
						name: '已退货'
					},
					{
						name: '已取消',
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],
			};
		},
		onLoad() {
			this.orderList = [];
		},
		computed: {
			// 价格整数
			priceInt() {
				return val => {
					if (val !== parseInt(val)) return val.split('.')[0];
					else return val;
				};
			}
		},
		methods: {
			reachBottom() {
				// 此tab为空数据
				// if (this.current != 2) {
				// 	this.loadStatus.splice(this.current, 1, "loading")
				// 	setTimeout(() => {
				// 		this.getOrderList(this.current);
				// 	}, 1200);
				// }
			},
			// 页面数据
			getOrderList(idx) {

			},
			// 总价
			totalPrice(item) {
				let price = 0;
				item.map(val => {
					price += parseFloat(val.price);
				});
				return price.toFixed(2);
			},
			// 总件数
			totalNum(item) {
				let num = 0;
				item.map(val => {
					num += val.number;
				});
				return num;
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				this.getOrderList(index);
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			backTo() {
				uni.navigateBack({});
			},
		},
		onPageScroll() {
			this.scrollTop = 200;
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.order {
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;

		.top {
			display: flex;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.store {
					margin-right: 10rpx;
					font-size: 28rpx;
				}
			}

			.right {
				color: #78b4e3;
			}
		}

		.item {
			display: flex;
			margin: 20rpx 0 0;

			.left {
				margin-right: 20rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}

			.content {
				.title {
					font-size: 28rpx;
					line-height: 50rpx;
				}

				.type {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}

				.delivery-time {
					color: #e5d001;
					font-size: 24rpx;
				}
			}

			.right {
				margin-left: 10rpx;
				padding-top: 20rpx;
				text-align: right;

				.number {
					color: $u-tips-color;
					font-size: 24rpx;
				}
			}
		}

		.total {
			margin-top: 20rpx;
			text-align: right;
			font-size: 24rpx;

			.total-price {
				font-size: 32rpx;
			}
		}

		.bottom {
			display: flex;
			margin-top: 40rpx;
			padding: 0 10rpx;
			justify-content: space-between;
			align-items: center;

			.btn {
				line-height: 52rpx;
				width: 160rpx;
				border-radius: 26rpx;
				border: 2rpx solid $u-border-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-type-info-dark;
			}
		}
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
		
		
	}

	.swiper-box {
		flex: 1;
	}
		 header-nav {
			display: flex;
		
			.slot-left {
				margin-left: 20rpx;
				flex: 1;
				color: black;
		
				.icon-xiangzuo1 {
					font-size: 40rpx;
					margin-right: 20rpx;
				}
			}
		
			.navBarBox {
				background-color: #fff;
			}
		}
	.swiper-item {
		height: 100%;
	}
</style>

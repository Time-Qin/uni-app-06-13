<template>
	<view class="main">
		<header-nav :scrollTop="scrollTop"> 我的 </header-nav>
		<!-- 用户信息 -->
		<template v-if="user">
			<view class="user-info">
				<image class="avatar" :src="user.img" mode=""></image>
				<view class="info">
					<text class="name">{{user.nickName}}</text>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="user-info">
				<image class="avatar" src="../../static/images/user.png" mode=""></image>
				<view class="info" @click="login">
					<text class="name">授权登录&nbsp;&gt;</text>
				</view>
			</view>
		</template>
		<!-- 用户积分等详情 -->
		<view class="list">
			<view class="list-tab">
				<view class="tabs">
					<text class="num">{{member.points||0}}</text>
				</view>
				<text class="txt">积分</text>
			</view>
			<view class="list-tab">
				<view class="tabs">
					<text class="num">0.00</text>
				</view>
				<text class="txt">余额</text>
			</view>
			<view class="list-tab">
				<view class="tabs">
					<text class="num">0</text>
				</view>
				<text class="txt">现金卡</text>
			</view>
			<view class="list-tab">
				<view class="tabs">
					<text class="num">0</text>
				</view>
				<text class="txt">优惠券</text>
			</view>
			<view class="list-tab">
				<view class="tabs">
					<text class="num">0</text>
				</view>
				<text class="txt">红包</text>
			</view>
		</view>
		<!-- 订单布局 -->
		<view class="order">
			<view class="order-header">
				<text class="txt">我的订单</text>
				<view class="right">
					<text class="all" @click="goOrder">查看全部&gt;</text>
				</view>
			</view>
			<!-- 订单tab -->
			<view class="order-tab">
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-daifukuan"></text>
					</view>
					<text class="txt">待付款</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-31daifahuo"></text>
					</view>
					<text class="txt">待发货</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-daishouhuofuben"></text>
					</view>
					<text class="txt">待收货</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-31daipingjia"></text>
					</view>
					<text class="txt">待评价</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-shouhou"></text>
					</view>
					<text class="txt">退款/售后</text>
				</view>
			</view>
		</view>
		<!--常用功能-->
		<view class="order">
			<view class="order-header">
				<text class="txt">常用功能</text>
			</view>
			<!-- 常用功能tab-->
			<view class="order-tab">
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-qiandao"></text>
					</view>
					<text class="txt">签到</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-jinianrix"></text>
					</view>
					<text class="txt">纪念日</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-shouhuodizhi"></text>
					</view>
					<text class="txt">我的地址</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-zhiyuandizhi1"></text>
					</view>
					<text class="txt">配送范围</text>
				</view>
				<view class="tab">
					<view class="icons">
						<text class="iconfont icon-shouhou"></text>
					</view>
					<text class="txt">客服</text>
				</view>
			</view>
		</view>
		<view class="recommand">
			<text class="iconfont icon-jingxuan"></text>
			<text>&nbsp;精选推荐</text>
		</view>
		<view class="goods">
			<view class="good" v-for="item in goodlist" :key="item.title">
				<view class="good_img" @click="gosku(item.sku)">
					<image class="img" :src="item.img" mode="widthFix"></image>
				</view>
				<view class="content">
					<view class="name">{{item.name}}</view>
					<view class="french">{{item.french}}</view>
					<view class="buy">
						<view class="price">¥&nbsp;{{item.price}}</view>
						<uni-icons type="cart" size="30" @click="getDatasCar(item.sku)"></uni-icons>
					</view>
					<car-view ref="Car" :contentDatas="contentDatas"></car-view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		GetRequest,PostRequest
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				goodlist: [],
				scrollTop: 0,
				contentDatas: [],
				user: {},
				member:{},
			}
		},
		created() {
			this.getGoods();
		},
		methods: {
			async getGoods() {
				let result = await GetRequest("/api/page/load?cityId=110&route=pages%2Fuser%2Findex");
				this.goodlist = result.data.list[1].data.content.list;
			},
			async getself(){
				let result = await PostRequest('/api/checkout/init');
				result.msg === "Success" ? this.member = result.data.member : '';
			},
			// 购物车组件方法
			async getDatasCar(sku) {
				let result = await GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
				result.msg === "Success" ? this.contentDatas = result.data : '';
				this.$refs.Car[0].shopContent2();
			},
			//跳转商品详情页面
			gosku(sku) {
				let sku1 = sku
				uni.navigateTo({
					url: `/pages/index/good_details?sku=${sku1}`
				});
			},
			login() {
				uni.navigateTo({
					url: '/pages/guowen/login'
				});
				this.getself();
			},
			goOrder(){
				uni.navigateTo({
					url: './myOrder'
				})
			}
		},
		onPageScroll(Top) {
			this.scrollTop = Top.scrollTop;
		},
		onShow() {
			this.user = uni.getStorageSync('user');
			this.getself();
		}
	}
</script>
<style lang="less" scoped>
	.main {
		width: 100%;

		/deep/header-nav {
			.backC {
				background: #9bd1ff;
			}
		}

		.list {
			height: 120rpx;
			background-color: #fff;
			margin: 20rpx;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.list-tab {
				.tabs {
					text-align: center;
				}
			}
		}

		// 用户信息
		.user-info {
			width: 100%;
			height: 260rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-left: 32rpx;
			margin-bottom: 20rpx;
			background: #9bd1ff;
			border-radius: 0 0 50% 50%;

			.avatar {
				width: 140rpx;
				height: 140rpx;
				margin-bottom: 40rpx;
				border-radius: 50%;
			}

			.info {
				flex: 1;
				height: 85rpx;
				padding-left: 40rpx;
			}

			.name {
				font-size: 28rpx;
				color: #fff;
			}
		}

		// 订单
		.order {
			height: 210rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			margin: 20rpx;
			border-radius: 10rpx;

			.order-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 90rpx;
				padding: 0 20rpx;

				.line {
					width: 10px;
					border-bottom: #333 1px solid;
				}

				.right {
					// display: flex;
					// align-items: center;
					font-size: 28rpx;
				}

				.txt {
					font-size: 32rpx;
					font-weight: 500;
					color: #333;
				}
			}
		}

		.order-tab {
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.tab {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.icons {
					width: 60rpx;
					height: 60rpx;
					text-align: center;
					margin-top: 10rpx;

					.iconfont {
						font-size: 40rpx;
					}
				}

				.txt {
					font-size: 28rpx;
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

				.content {
					width: 100%;
					padding: 10px;
					box-sizing: border-box;

					.name {
						font-size: 12px;
						letter-spacing: 1px;
					}

					.french {
						color: #999;
						font-size: 10px;
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

		.recommand {
			text-align: center;
			line-height: 100rpx;
			height: 100rpx;
			background-color: #fff;
			// margin-bottom: 20rpx;
			margin: 20rpx;
			border-radius: 10rpx;

			.iconfont {
				color: red;
				font-size: 40rpx;
			}
		}
	}
</style>

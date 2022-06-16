<template>
	<view class="container">
		<view class="user">
			<view class="user-img">
				<uni-icons type="contact" size="80"></uni-icons>
			</view>
			<view class="login">
				<text class="login-txt">授权登录&nbsp;&gt;</text>
			</view>
		</view>
		<view class="count">
			<view class="cell">
				<view class="num">0</view>
				<view class="desc" style="color: #000000;">积分</view>
			</view>
			<view class="cell">
				<view class="num">0.00</view>
				<view class="desc" style="color: #000000;">余额</view>
			</view>
			<view class="cell">
				<view class="num">0</view>
				<view class="desc" style="color: #000000;">现金卡</view>
			</view>
			<view class="cell">
				<view class="num">0</view>
				<view class="desc" style="color: #000000;">优惠券</view>
			</view>
			<view class="cell">
				<view class="num">0</view>
				<view class="desc" style="color: #000000;">红包</view>
			</view>
		</view>
		<view class="orders">
			<view class="order-h">
				<view class="o-title">我的订单</view>
				<view class="more">查看全部&gt;</view>
			</view>
			<view class="sorts">
				<view class="order-item">
					<view class="i">
						<icon class="iconfont icon-daifukuan" />
					</view>
					<text class="o-name">待付款</text>
				</view>
				<view class="order-item">
					<view class="i">
						<icon class="iconfont icon-31daifahuo" />
					</view>
					<text class="o-name">待发货</text>
				</view>
				<view class="order-item">
					<view class="i">
						<icon class="iconfont icon-daishouhuofuben" />
					</view>
					<text class="o-name">待收货</text>
				</view>
				<view class="order-item">
					<view class="i">
						<icon class="iconfont icon-31daipingjia" />
					</view>
					<text class="o-name">待评价</text>
				</view>
				<view class="order-item">
					<view class="i">
						<icon class="iconfont icon-shouhou" />
					</view>
					<text class="o-name">退款/售后</text>
				</view>
			</view>
		</view>
		<view class="function">
			<view class="f-title">常用功能</view>
			<view class="fun-sorts">
				<view class="f-item">
					<view class="i">
						<icon class="iconfont icon-qiandao" />
					</view>
					<text class="f-name">签到</text>
				</view>
				<view class="f-item">
					<view class="i">
						<icon class="iconfont icon-jinianrix" />
					</view>
					<text class="f-name">纪念日</text>
				</view>
				<view class="f-item">
					<view class="i">
						<icon class="iconfont icon-shouhuodizhi" />
					</view>
					<text class="f-name">我的地址</text>
				</view>
				<view class="f-item">
					<view class="i">
						<icon class="iconfont icon-zhiyuandizhi1" />
					</view>
					<text class="f-name">配送范围</text>
				</view>
				<view class="f-item">
					<view class="i">
						<icon class="iconfont icon-kefu" />
					</view>
					<text class="f-name">客服</text>
				</view>
			</view>
		</view>
		<view class="recommand">
			<text class="iconfont icon-jingxuan" style="color:crimson;">&nbsp;</text>
			<text>精选推荐</text>
		</view>
		<view class="goods">
			<view class="cont" v-for="item in goodlist" :key="item.sku">
				<view class="cake-item" :key="index">
					<view class="poster">
						<image style="width: 170px;height: 170px;" :mode="widthFix" :src="item.img"></image>
					</view>
					<view class="info-cont">
						<view class="info">
							<view class="title">{{item.name}}</view>
							<view class="french">{{item.french}}</view>
						</view>
						<view class="car">
							<view class="price">
								<text>￥</text>{{item.price}}
							</view>
							<view class="shop">
								<text class="iconfont icon-gouwuche"></text>
							</view>
						</view>
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
				let result = await GetRequest("/api/page/load?cityId=110&route=pages%2Fuser%2Findex");
				this.goodlist = result.data.list[1].data.content.list;
				console.log(this.goodlist)
			}
		}
	}
</script>

<style lang="less">
	.container {
		background-color: ghostwhite;

		.user {
			height: 140px;
			background-color: #9cf;
			display: flex;
			width: 350px;
			margin: 0 10px 10px 10px;
			border-radius: 0 0 165px 165px;

			.user-img {
				margin: 20px;
			}
			.login {
				line-height: 140px;
			}
			.login-txt {
				font-size: 12px;
			}
		}

		.count {
			background-color: #fff;
			height: 57px;
			width: 350px;
			margin: 10px;
			border-radius: 3px;
			overflow: hidden;
			display: flex;
			justify-content: space-between;

			.cell {
				width: 50px;

				.num {
					font-size: 12px;
					text-align: center;
					margin-bottom: 7px;
					margin-top: 7px;
					font-size: 700;
				}

				.desc {
					font-size: 12px;
					text-align: center;
				}
			}
		}

		.orders {
			background-color: #fff;
			height: 90px;
			width: 350px;
			margin: 10px;
			border-radius: 3px;
			overflow: hidden;

			.order-h {
				display: flex;
				justify-content: space-between;

				.more {
					font-size: 12px;
					color: #a9a9a9;
					margin-top: 10px;
					margin-right: 10px;
				}
			}

			.o-title {
				margin: 10px;
				font-weight: 700;
				font-size: 14px;
			}

			.sorts {
				display: flex;
			}
		}

		.order-item {
			width: 70px;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;

			.i {
				text-align: center;
				width: 70px;
			}
		}

		.o-name {
			font-size: 12px;
			text-align: center;
		}

		.function {
			background-color: #fff;
			height: 90px;
			width: 350px;
			margin: 10px;
			border-radius: 3px;
			overflow: hidden;

			.f-title {
				margin: 10px;
				font-weight: 700;
				font-size: 14px;
			}

			.fun-sorts {
				display: flex;
			}
		}

		.f-item {
			width: 70px;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;

			.i {
				text-align: center;
				width: 70px;
			}
		}

		.f-name {
			font-size: 12px;
			text-align: center;
		}
	}

	.recommand {
		background-color: #fff;
		height: 40px;
		width: 350px;
		margin: 0 auto;
		line-height: 40px;
		text-align: center;
	}

	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 0 auto;
	}

	.cont {
		width: 170px;
		padding: 5px;
	}

	.cake-item {
		width: 170px;
		margin: 0px 5px;
		height: 270px;

		.poster {
			height: 150px;
		}

		.title {
			margin-top: 20px;
			font-size: 14px;
		}

		.french {
			margin: 12px 0;
			font-size: 10px;
			color: #a9a9a9;
		}

		.price {
			margin-bottom: 22px;
			font-size: 12px;
		}

		.info-cont {
			background-color: #fff;
		}

		.car {
			display: flex;
			justify-content: space-between;
		}

		.shop {
			width: 16px;
			height: 18px;
			background-color: aliceblue;
			margin-right: 7px;
		}
	}
</style>

<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				订单详情
			</view>
		</header-nav>
		<view class="order">
			<!-- 提示 -->
			<view class="notice-bar">
				<uni-notice-bar text="温馨提示:由于疫情团购为特殊时期,蛋糕保温包均免费赠送,现恢复常规配送,如有需求则需付费购买,望理解" />
			</view>
			<!-- 配送标签 -->
			<view class="c-label">
				<view class="c-list" v-for="item in orders.send_type" :key="item.id">
					<view class="c-tit">{{item.name}}</view>
				</view>
			</view>
			<!-- 收货地址 -->
			<view class="c-addr">
				<uni-list-item link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)">
					<template v-slot:header>
						<text class="iconfont icon-shouhuodizhi  "></text>
						<text class="slot-title">选择收货地址</text>
					</template>
				</uni-list-item>
			</view>
			<!-- 商品信息 -->
			<view class="c-goods">
				<view class="c-title">商品信息</view>
				<view class="c-list" v-for="item in goods" :key="item.id">
					<view>
						<uni-list-item>
							<template v-slot:header>
								<view class="c-header">
									<image class="slot-image" :src="item.img" mode="widthFix"></image>
								</view>
							</template>
							<template v-slot:body>
								<view class="slot-body">
									<view class="slot-title">{{item.name}}</view>
									<view class="slot-spec">{{item.spec}}({{item.weight}})</view>
									<view class="slot-canju" >
										<text class="iconfont icon-canju1 item" @click="toggle" v-if="item.tableware">
											<text class="item-title">{{item.tableware}}</text>
										</text>
										<text class="iconfont icon-lazhu item" @click="toggle" v-if="item.candle">
											<text class="item-title">{{item.candle}}</text>
										</text>
									</view>
									<view class="slot-price">
										<text class="price-icon">￥</text>
										<text class="price">{{item.price}}</text>
									</view>
								</view>
							</template>
							<template v-slot:footer>
								<view class="c-footer">
									<view class="slot-num">x{{item.num}}</view>
								</view>
							</template>
						</uni-list-item>
					</view>
					<view class="c-blessing">
						<view class="blessing-title">祝福语</view>
						<uni-list-item to="/pages/vue/index/index" @click="onClick($event,1)">
							<template v-slot:header>
								<text class="slot-title">请填写祝福语</text>
							</template>
						</uni-list-item>
					</view>
				</view>

				<view class="c-amount">
					<view class="amount">
						<text class="c-txt">商品总额</text>
						<text class="c-num">￥{{master.goodsAmount}}</text>
					</view>
					<view class="amount">
						<text class="c-txt">配送费</text>
						<text class="c-num">￥{{master.postAmount}}</text>
					</view>
					<view class="amount">
						<text class="c-txt">现金卡</text>
						<text v-if="member.card === 0" class="c-num">无可用</text>
						<text v-else class="c-num">{{member.card}}</text>
					</view>
					<view class="amount">
						<text class="c-txt">优惠卡/红包</text>
						<text v-if="member.coupon === 0" class="c-num">无可用</text>
						<text v-else class="c-num">{{member.coupon}}</text>
					</view>
					<view class="amount">
						<text class="c-txt">余额 <text class="c-sum">(￥{{member.balance}})</text> </text>
						<uni-icons type="info" size="20" @click="toTips"></uni-icons>
						<text v-if="member.balance === 0" class="c-num monery">余额不足</text>
						<text v-else class="c-num">{{member.balance}}</text>
					</view>
					<view class="amount">
						<text class="c-txt">积分 <text class="c-sum">({{member.points}})</text> </text>
						<uni-icons type="info" size="20" @click="toPoints"></uni-icons>
						<text class="point" v-if="checked === true">-￥{{member.pointsAmount}}</text>
						<checkbox value="cb" @click="onChecked" :checked="checked" style="transform:scale(0.7)"
							class="c-num" />
					</view>
					<view class="total">
						<text>合计：</text>
						<text v-if="checked === true">￥{{master.receivableAmount}}</text>
						<text v-else>￥{{master.goodsAmount}}</text>
					</view>
				</view>
			</view>

			<!-- 支付方式 -->
			<view class="c-pay">
				<uni-list-item link="reLaunch" to="/pages/chenrenjun/invoicing/invoicing" @click="onClick($event,1)">
					<template v-slot:header>
						<text class="pay-title">发票</text>
						<text class="pay-detail">不开发票</text>
					</template>
				</uni-list-item>
				<uni-list-item link="reLaunch" @click="onClick($event,1)">
					<template v-slot:header>
						<text class="pay-title">支付方式</text>
						<text class="pay-detail">在线支付(微信支付)</text>
					</template>
				</uni-list-item>
			</view>
		</view>

		<!-- 提交订单 -->
		<view class="bottom_nav">
			<view v-if="checked === true" class="receivable">实付金额:￥{{master.receivableAmount}}</view>
			<view v-else class="receivable">实付金额:￥{{master.goodsAmount}}</view>
			<button type="default" class="btn">提交订单</button>
		</view>

		<!-- 餐具弹出框 -->
		<view class="c-popup">
			<uni-popup ref="popup" background-color="#fff">
				<view class="popup-content">
					<view class="popup-title">餐具说明</view>
					<view class="text">1份标配餐具=1个餐盘+1个餐勺</view>
					<button class="btn1" size="mini" @click="close">知道了</button>
				</view>
			</uni-popup>
		</view>
		
		<!-- 余额弹出框 -->
		<view class="c-tips">
			<uni-popup ref="popup1" background-color="#fff">
				<view class="popup-content">
					<view class="popup-title">余额使用规则</view>
					<view class="text">1.余额最小使用单位为0.01元;</view>
					<view class="text">2.余额不可与优惠券、红包叠加使用;</view>
					<view class="text">3.使用余额抵扣部分不可开具发票;</view>
					<button class="btn1" size="mini" @click="close">知道了</button>
				</view>
			</uni-popup>
		</view>
		
		<!-- 积分弹出框 -->
		<view class="c-points">
			<uni-popup ref="popup2" background-color="#fff">
				<view class="popup-content">
					<view class="popup-title">积分使用规则</view>
					<view class="text">1.消费时1积分可低0.01元现金使用;</view>
					<view class="text">2.使用积分抵扣部分不可开具发票;</view>
					<button class="btn1" size="mini" @click="close">知道了</button>
				</view>
			</uni-popup>

		</view>
	</view>
</template>

<script>
	import {
		GetRequestToken,PostRequest
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				orders: {},
				goods: {},
				master: {},
				member: {},
				checked: false,
				scrollTop: 0,
				one: 1,
			}
		},
		onLoad(options) {
			console.log(options);
			this.getOrder(options);
		},
		methods: {
			async getOrder(city) {
				let result = await PostRequest("/api/checkout/init",{cityId:110})
				console.log(result);
				result.code == 0 ? this.orders = result.data : '';
				// console.log(this.orders);
				this.goods = this.orders.goods
				// console.log(this.goods);
				this.master = this.orders.master
				console.log(this.master);
				this.member = this.orders.member
				console.log(this.member);
			},
			onChecked() {
				this.checked = !this.checked
			},
			toggle() {
				this.$refs.popup.open()
			},
			toTips(){
				this.$refs.popup1.open()
			},
			toPoints(){
				this.$refs.popup2.open()
			},

			close() {
				this.$refs.popup.close()
				this.$refs.popup1.close()
				this.$refs.popup2.close()
			},
			onClick(e,value){
				
			},
			backTo() {
				uni.navigateBack({});
			},
		},
		onPageScroll() {
			this.scrollTop = 200;
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: #fafcfd;
		// background-color: #bae7ff;
		
		/deep/header-nav {
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

		.notice-bar {
			padding: 12px 14px 12px 14px;

			/deep/.uni-noticebar {
				margin-bottom: 0;
				padding: 6px 12px;

				.uni-noticebar__content-text {
					font-size: 12px;
					color: #f1883a !important;
				}
			}

		}

		.c-label {
			display: flex;
			flex-wrap: wrap;
			padding-left: 14px;

			.c-list {
				margin: 0 10px 10px 0;

				.c-tit {
					border-radius: 10px;
					padding: 0 10px;
					text-align: center;
					line-height: 26px;
					background-color: #bae7ff;
					font-size: 16px;
				}
			}
		}

		.c-addr {
			padding: 0 14px;

			/deep/.uni-list-item__container {
				padding: 24px 0 24px 15px;
			}

			.slot-addr {
				margin-right: 4px;
				font-weight: 700;
			}

			.slot-title {
				font-weight: 700;
			}
		}

		.c-goods {
			margin: 10px 14px 0 14px;
			background-color: #ffffff;

			.c-title {
				padding: 10px 16px;
				font-size: 14px;
				color: #333333;
			}

			.c-list {
				.c-header {
					.slot-image {
						width: 110px;
						height: 110px;
						margin-right: 10px;
					}
				}


				.slot-body {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					padding: 6px 0;
					width: 56vw;
					// position: relative;

					.slot-title {
						font-size: 15px;
						font-weight: 400;
					}

					.slot-spec {
						font-size: 12px;
						font-weight: 200;
						padding-top: 3px;
						color: #999999;
					}

					.slot-canju {
						.item {
							font-size: 16px;
							color: #999999;
							margin-right: 10px;
						}

						.item-title {
							margin-left: 3px;
							font-size: 12px;
							color: #999999;
						}
					}
					.slot-price {
						// position: absolute;
						font-size: 14px;
						padding-top: 18px;
						// right: 144px;
						// top: 80px;
					
						.price-icon {
							font-size: 10px;
						}
					}
				}

				.c-footer {
					position: relative;

					.slot-num {
						position: absolute;
						right: -16px;
						top: 80px;
						font-size: 14px;
						color: #a9a9a9;
					}
				}

				.c-blessing {
					display: flex;

					/deep/.uni-list--border:after {
						height: 0;
					}

					.blessing-title {
						padding: 0 16px;
						margin-right: 54px;
						font-size: 14px;
						text-align: center;
						line-height: 45px;
					}

					.slot-title {
						font-size: 14px;
						color: #c0c0c0;
					}
				}
			}

			.c-amount {
				padding: 0 14px;
				border-top: 1px solid #f3f3f3;

				.amount {
					padding: 13px 0;

					.c-txt {
						font-size: 14px;
					}

					.point {
						font-size: 13px;
						margin-left: 150px;
					}

					.c-num {
						float: right;
						font-size: 14px;
					}

					.monery {
						color: #d2d2d2;
					}


				}

				.total {
					text-align: right;
					font-size: 14px;
					padding: 12px 0;
					border-top: 1px solid #f3f3f3;
				}

			}
		}

		.c-pay {
			padding: 0 14px;
			margin-top: 8px;
			padding-bottom: 90px;
			position: relative;

			.pay-title {
				font-size: 13px;
			}

			.pay-detail {
				font-size: 13px;
				position: absolute;
				right: 0;
			}
		}

		.bottom_nav {
			background-color: #ffffff;
			padding: 14px 14px;
			display: flex;
			border-top: 1px solid #eaeced;
			position: fixed;
			width: 100vw;
			bottom: 0;

			.receivable {
				margin-left: auto;
				margin-right: 8px;
				text-align: center;
				line-height: 38px;
				font-size: 14px;
			}

			.btn {
				background-color: #bae7ff;
				border-radius: 20px;
				margin: 0;
				font-size: 15px;
				padding: 0 26px;
			}
		}

		.c-popup {
			/deep/.uni-popup__wrapper{
				border-radius: 14px;
			}
			.popup-content {
				padding: 20px 60px;
				text-align: center;
				overflow: hidden;
				.popup-title {
					margin-bottom: 16px;
					font-size: 16px;
					font-weight: 600;
				}

				.text {
					font-size: 14px;
					margin-bottom: 14px;
				}

				.btn1 {
					padding: 2px 60px;
					border-radius: 20px;
					font-size: 14px;
					background-color: #bae7ff;
				}
			}
		}
	
		.c-tips {
			/deep/.uni-popup__wrapper{
				border-radius: 14px;
			}
			.popup-content {
				// padding: 20px 60px 20px 0;
				width: 344px;
				height: 200px;
				overflow: hidden;
				.popup-title {
					margin-top: 20px;
					margin-bottom: 16px;
					font-size: 16px;
					font-weight: 600;
					text-align: center;
				}
		
				.text {
					font-size: 14px;
					margin-bottom: 5px;
					margin-left: 26px;
					color: #434343;
				}
		
				.btn1 {
					padding: 2px 60px;
					border-radius: 20px;
					font-size: 14px;
					background-color: #bae7ff;
					margin-left: 91px;
					margin-top: 14px;
				}
			}
		}
	
		.c-points {
			/deep/.uni-popup__wrapper{
				border-radius: 14px;
			}
			.popup-content {
				// padding: 20px 60px 20px 0;
				width: 344px;
				height: 180px;
				overflow: hidden;
				.popup-title {
					margin-top: 20px;
					margin-bottom: 16px;
					font-size: 16px;
					font-weight: 600;
					text-align: center;
				}
		
				.text {
					font-size: 14px;
					margin-bottom: 5px;
					margin-left: 26px;
					color: #434343;
				}
		
				.btn1 {
					padding: 2px 60px;
					border-radius: 20px;
					font-size: 14px;
					background-color: #bae7ff;
					margin-left: 91px;
					margin-top: 14px;
				}
			}
		}
	}
</style>

<template>
	<!-- 底部弹出购物车 -->
	<uni-popup ref="popup" background-color="#fff" @change="change" @touchmove.stop.prevent="moveHandle">
		<view class="showDetail">
			<view class="title">
				<image class="left" :src="goodsDetail.img" mode="widthFix"></image>
				<view class="right">
					<view class="name">{{goodsDetail.name}}</view>
					<view class="fr">{{goodsDetail.french}}</view>
					<view class="price">¥{{goodsDetail.price}}</view>
					<view class="sale">已售{{goodsDetail.saleTotal}}</view>
				</view>
			</view>
			<view class="guige">规格</view>
			<text class="weight">{{goodsDetail.spec}}({{goodsDetail.weight}})</text>
			<view class="iconGroup">
				<view class="item" v-if="list.tableware">
					<view class="icon"><text class="iconfont icon-canju1"></text></view>
					<view class="text">{{list.tableware}}</view>
				</view>
				<view class="item" v-if="list.candle">
					<view class="icon"><text class="iconfont icon-lazhu"></text></view>
					<view class="text">{{list.candle}}</view>
				</view>
				<view class="item" v-if="list.edible">
					<view class="icon"><text class="iconfont icon-canju2"></text></view>
					<view class="text">{{list.edible}}</view>
				</view>
				<view class="item" v-if="list.size">
					<view class="icon"><text class="iconfont icon-dangao"></text></view>
					<view class="text">{{list.size}}</view>
				</view>
			</view>
			<view class="quantity">
				<view class="num">购买数量</view>
				<uni-number-box @change="changeValue" class="step" />
			</view>
			<view class="buttonGroup">
				<view class="carts" @click="addMoreCarts">加入购物车</view>
				<view class="buy">立即购买</view>
			</view>
		</view>
	</uni-popup>
</template>
<script>
	import {
		mapMutations
	} from "vuex"
	export default {
		name: "carts",
		props: ['goodsDetail', 'list'],
		data() {
			return {
				carts: {},
			};
		},
		methods: {
			...mapMutations(['addCarts']),
			change() {
				this.$refs.popup.open('bottom');
			},
			moveHandle() {
				return false
			},
			addMoreCarts() {
				this.addCarts(this.carts);
				this.$refs.popup.close();
				uni.showToast({
					title: `添加购物车成功`,
					mask: true
				})
			},
			changeValue(value) {
				this.carts = {
					id: this.goodsDetail.id,
					price: this.goodsDetail.price,
					buynum: value,
					name: this.goodsDetail.name
				}
			},
		}
	}
</script>
<style lang="less" scoped>
	.showDetail {
		height: 700rpx;
		padding: 0 20rpx;

		.title {
			display: flex;
			width: 100%;
			height: 240rpx;
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
			align-items: center;

			.left {
				width: 200rpx;
				margin-right: 10px;
				height: 200rpx;
			}

			.right {
				width: 500rpx;
				height: 200rpx;
				padding-top: 20rpx;

				.name {
					font-weight: 700;
					font-size: 12px;
					height: 20px;
					line-height: 20px;
				}

				.fr {
					font-size: 10px;
					color: #888;
					height: 15px;
					line-height: 15px;
				}

				.price {
					font-size: 14px;
					height: 25px;
					line-height: 25px;
				}

				.sale {
					font-size: 12px;
					color: #888;
					height: 20px;
					line-height: 20px;
				}
			}
		}

		.guige {
			font-weight: 700;
			font-size: 14px;
			margin: 20rpx 0;
		}

		.weight {
			margin: 20rpx 0;
			width: 240rpx;
			padding: 10rpx 20rpx;
			border-radius: 5px;
			background-color: lightcyan;
			font-size: 12px;
		}

		.iconGroup {
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			margin: 20rpx 0;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 10rpx;
			background-color: #eee;

			.item {
				width: 30%;
				display: flex;
				align-items: center;
				font-size: 10px;
				justify-content: flex-start;

				.icon {
					margin-right: 5px;
				}
			}
		}

		.quantity {
			width: 100%;
			display: flex;
			margin: 20rpx 0;
			padding: 20rpx;
			color: #333;
			box-sizing: border-box;
			justify-content: space-between;
			border-bottom: 1px solid #eee;

			.num {
				font-weight: 700;
				font-size: 12px;
				line-height: 26px;
			}

			.step {
				/deep/ .uni-numbox {
					.uni-numbox-btns {
						background-color: honeydew;
					}

					.uni-numbox__value {
						background-color: lightcyan !important;
						width: 26px;
						height: 26px;
						text-align: center;
						font-size: 12px;
					}
				}
			}
		}

		.buttonGroup {
			width: 100%;
			display: flex;
			margin: 20rpx 0;
			color: #333;
			box-sizing: border-box;
			font-size: 12px;

			.carts {
				flex: 1;
				background-color: #FFFFCC;
				margin-right: 40rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 40rpx;
			}

			.buy {
				flex: 1;
				background-color: lightcyan;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 40rpx;
			}
		}
	}
</style>

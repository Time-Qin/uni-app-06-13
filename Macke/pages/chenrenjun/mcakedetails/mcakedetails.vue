<template>
	<view class="container">
		<swiper class="swiper" indicator-dots circular autoplay>
			<swiper-item v-for="(item ,index) in banner" :key="item.mainId">
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="title">
			<view class="left">
				<view class="c-title">{{datalist.name}}</view>
				<view class="c-french">{{datalist.french}}</view>
			</view>
			<!-- <button open-type="share" class="right">分享</button> -->
			<view class="priceGroup">
				<text class="c-price">¥{{datalist.price}}/</text>
				<text class="c-weight">{{datalist.spec}}({{datalist.weight}})</text>
			</view>
		</view>

		<view class="detailbox">
			<view class="brief">{{datalist.brief}}</view>
			<view class="frenchBrief">{{datalist.frenchBrief}}</view>
		</view>

		<view class="materBox">
			<view class="mater" v-for="item in datalist.mater" :key="item.id">
				<view class="c-img">
					<image :src='item.img' mode="widthFix"></image>
				</view>
				<view class="c-title">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>

		<view class="basicBox">
			<view class="basic" v-for="item in datalist.basic" :key="item.id">
				<view class="basic-title">{{item.title}}</view>
				<view class="basic-value" v-if="item.value === '1' || item.value == '2' || item.value == '3'">
					<text class="slot-cart iconfont icon-meishi-bangbangtang" v-for="bbt in parseInt(item.value)"
						:key="bbt">
					</text>
				</view>
				<view v-else class="basic-value">{{item.value}}</view>
			</view>
		</view>

		<view class="peisong">
			<view class="yixuan">
				<text class="c-title">已选</text>
				<view class="c-detail">
					<text class="iconfont icon-gouwuche content_wei">&nbsp;
						<text class="content-title">{{datalist.spec}}({{datalist.weight}})</text>
					</text>
					<view class="yixuan-title">
						<text class="iconfont icon-canju1 item">&nbsp;
							<text class="item-title">{{datalist.tableware}}</text>
						</text>
						<text class="iconfont icon-lazhu item">&nbsp;
							<text class="item-title">{{datalist.candle}}</text>
						</text>
						<text class="iconfont icon-canju2 item">&nbsp;
							<text class="item-title">{{datalist.edible}}</text>
						</text>
						<text class="iconfont icon-dangao item">&nbsp;
							<text class="item-title">{{datalist.size}}</text>
						</text>
					</view>
				</view>
				<view class="dotsList dot">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
			</view>

			<view class="songzhi">
				<text class="c-title">送至</text>
				<view class="addr-text">
					<text class="iconfont icon-yunshupeisong content_wei"> 请选择收货地址</text><br />
					<text class="iconfont icon-shijian content_wei"> 最早{{datalist.sendStartDate}}
						{{datalist.sendStartTime}}配送</text>
				</view>
				<view class="dotsList dot">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
			</view>

			<view class="fuwu">
				<text class="c-title">服务</text>
				<view class="fuwu-text">
					<text class="iconfont icon-duigouzhong "></text>&nbsp;
					<view class="content_wei"> 提供开票及售后服务</view>
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
				datalist: {},
				banner: {}
			}
		},
		onLoad(options) {
			this.getDetails(options.id)
		},
		methods: {
			async getDetails(id) {
				let result = await GetRequest("/api/goods/detail?id=" + id);
				console.log(result);
				result.code == 0 ? this.datalist = result.data : '';
				this.banner = this.datalist.banner
				// console.log(this.banner);
			},
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: white;

		.swiper {
			height: 560rpx;
			background-color: aliceblue;
			position: relative;

			.swiper-item {
				image {
					width: 100%;
					position: absolute;
					top: -50px;
				}
			}
		}

		.title {
			position: relative;
			text-align: center;
			margin-top: 18px;

			.left {
				.c-title {
					font-size: 20px;
				}

				.c-french {
					font-size: 12px;
					color: #888;
				}
			}

			.right {
				position: absolute;
				width: 40px;
				top: 0;
				right: 0;
				color: green;
				font-size: 14px;
				padding: 0;
			}

			.priceGroup {
				margin: 30px 0;
				font-size: 14px;
				color: #888;
			}
		}

		.detailbox {
			background-color: lightblue;
			margin: 0 20px 10px 20px;
			border-radius: 5px;

			.brief {
				padding: 12px 20px;
				font-size: 13px;
				text-align: center;
			}

			.frenchBrief {
				padding: 0 16px 20px 16px;
				font-size: 10px;
				text-align: center;
			}
		}

		.materBox {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 20px;

			.mater {
				display: flex;
				align-items: center;
				padding: 4px 7px;
				margin: 0 6px 10px 0;
				background-color: lightblue;
				border-radius: 10px;

				.c-img {
					width: 20px;
					height: 20px;

					image {
						width: 100%;
					}
				}

				.c-title {
					font-size: 10px;
					margin-left: 5px;
				}
			}
		}

		.basicBox {
			.basic {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				font-size: 12px;
				margin: 14px;

				.basic-title {
					flex: 1;
					text-align: right;
					margin-right: 20px;
				}

				.basic-value {
					flex: 1;
					// text-align: left;
				}
			}
		}

		.peisong {
			margin: 0 10px;
			background-color: aliceblue;
			border-radius: 5px;
			display: flex;
			flex-direction: column;

			.yixuan {
				display: flex;
				margin-top: 10px;

				.c-title {
					width: 50px;
					margin-left: 20px;
				}

				.c-detail {
					width: 60vw;
					border-bottom: 1px solid #ddd;

					.content_wei {
						font-size: 16px;

						.content-title {
							font-size: 13px;
						}
					}

					.yixuan-title {
						display: flex;
						flex-wrap: wrap;
						margin-top: 16px;
						margin-bottom: 10px;

						.item {
							width: 50%;
							font-size: 16px;
							margin-bottom: 5px;

							.item-title {
								font-size: 13px;
							}
						}
					}
				}
			}

			.songzhi {
				display: flex;
				margin-top: 10px;

				.c-title {
					width: 50px;
					margin-left: 20px;
				}

				.addr-text {
					display: flex;
					flex-wrap: wrap;
					width: 60vw;
					border-bottom: 1px solid #ddd;

					.content_wei {
						font-size: 14px;
						margin-bottom: 10px;
					}
				}
			}

			.fuwu{
				display: flex;
				margin-top: 10px;
				margin-bottom: 10px;
				.c-title{
					width: 50px;
					margin-left: 20px;
				}
				.fuwu-text{
					display: flex;
					justify-content: center;
					text{
						font-size: 16px;
					}
					.content_wei{
						text-align: center;
					}
				}
			}

			.dotsList {
				display: flex;
				margin-top: 10px;
				margin-left: 26px;

				.dots {
					width: 8rpx;
					height: 8rpx;
					border-radius: 50%;
					background-color: #000;
					margin-right: 10rpx;
				}
			}
		}

	}
</style>

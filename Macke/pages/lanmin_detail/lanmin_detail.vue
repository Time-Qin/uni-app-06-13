<template>
	<view class="container">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item ,index) in banner" :key="index">
				<view class="swiper-item">
					<image @click="previewImg(item)" :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="title">
			<view class="left">
				<view class="name">{{goodsDetail.name}}</view>
				<view class="fr">{{goodsDetail.french}}</view>
			</view>
			<button open-type="share" class="right">分享</button>
			<view class="priceGroup">
				<text class="price">¥{{goodsDetail.price}}/</text>
				<text class="weight">{{goodsDetail.spec}}({{goodsDetail.weight}})</text>
			</view>
		</view>
		<view class="ad">
			<view class="ch">{{goodsDetail.brief}}</view>
			<view class="fr">{{goodsDetail.frenchBrief}}</view>
		</view>
		<view class="materBox">
			<view class="mater" v-for="item in mater" :key="item.id">
				<view class="_img">
					<image :src='item.img' mode="widthFix"></image>
				</view>
				<view class="name">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="basic" v-for="(item,index) in basic" :key="item.id">
			<view class="title">{{item.title}}</view>
			<view v-if="index===3" class="value"><text v-for="num in item.value" :key="index"
					class="iconfont1 icon-bangbangtang"></text></view>
			<view v-else class="value">{{item.value}}</view>
		</view>
		<view class="buyDetail">
			<view class="one">
				<view class="tit">已选</view>
				<view class="desc">
					<view class="icon"><text class="iconfont icon-gouwuche"></text></view>
					<view class="text">{{list.spec}}({{list.weight}})</view>
				</view>
				<view class="btn"></view>
			</view>
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
			<view class="two">
				<view class="tit">送至</view>
				<view class="desc">
					<view class="icon"><text class="iconfont icon-yunshupeisong" style="font-size: 14px;"></text></view>
					<view class="text"></view>
				</view>
				<view class="btn"></view>
			</view>
			<view class="iconGroup">
				<view class="item">
					<view class="icon"><text class="iconfont icon-shijian" style="font-size: 12px;"></text></view>
					<view class="text">最早{{time}} 10:30配送</view>
				</view>
			</view>
			<view class="three">
				<view class="tit">服务</view>
				<view class="service">
					<view class="icon"><text class="iconfont icon-duigouzhong" style="font-size: 18px;"></text></view>
					<view class="text">提供开票及售后服务</view>
				</view>
			</view>
		</view>
		<view class="divide">——商品详情——</view>
		<view class="largeImg" v-if="goodsDetail.shopDesc">
			<image :src="goodsDetail.shopDesc" mode="widthFix"></image>
		</view>
		<view class="shuoming">退改说明：上海、苏州、杭州地区距配送时间12小时及以上的订单可修改、取消或退订，如不满足12小时的订单不再支持修改、取消或退订</view>
		<view class="divide">——已经到最底了——</view>
		<view v-if="goTop" class="goTop" @click="toTop">
			<text class="iconfont icon-shang"></text>
		</view>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	export default {
		data() {
			return {
				goodsDetail: [],
				banner: [],
				mater: [],
				basic: [],
				list: [],
				time: '',
				indicatorDots: true,
				goTop: false,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			async getDetail(id) {
				let result = await GetRequest("/api/goods/detail?id=" + id);
				result.code === 0 ? this.goodsDetail = result.data : ''
				this.banner = this.goodsDetail.banner;
				this.mater = this.goodsDetail.mater;
				this.basic = this.goodsDetail.basic;
				this.list = this.goodsDetail.list[0];
				this.time = this.$filters.formatDate()
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			previewImg(current) {
				var urls = this.banner.map(item => item)
				uni.previewImage({
					current,
					urls
				})
			},
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			}
		},
		onLoad(options) {
			this.getDetail(options.id);
			console.log(options.id);
		},
		// onReachBottom() {
		// 	this.goTop = true;
		// },
		onPageScroll(e) {
			var that=this;
			uni.getSystemInfo({
				success: function(res) {
					// console.log(res.windowHeight,"xxxx",e.scrollTop)
					if (e.scrollTop > res.windowHeight) {
						that.goTop = true;
					} else {
						that.goTop = false;
					}
					return res.windowHeight;
				}
			});
			
		},
	}
</script>
<style scoped lang="less">
	.container {
		background-color: white;

		.swiper {
			height: 560rpx;
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

			.left {
				text-align: center;

				.name {
					font-size: 18px;
					font-weight: 700;
				}

				.fr {
					font-size: 14px;
					color: #888
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
				margin-top: 20px;
				text-align: center;

				.price {
					color: #555;
					font-size: 18px;
				}

				.weight {
					color: #666;
				}
			}
		}

		.ad {
			margin: 20px;
			text-align: center;
			font-size: 14px;
			background-color: lightcyan;
			padding: 10px;

			.fr {
				color: #888;
				margin-top: 10px;
			}
		}

		.materBox {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			justify-content: center;

			.mater {
				display: flex;
				background-color: lightcyan;
				height: 16px;
				align-items: center;
				margin: 0 8px 6px 0;
				padding: 5px;
				border-radius: 5px;

				._img {
					image {
						width: 16px;
					}
				}

				.name {
					font-size: 10px;
					margin-left: 5px;
				}
			}
		}

		.basic {
			width: 100%;
			display: flex;
			font-size: 10px;
			margin-bottom: 10px;

			.title {
				flex: 1;
				text-align: right;
			}

			.value {
				margin-left: 10px;
				flex: 1;
				text-align: left;
			}
		}

		.buyDetail {
			width: 100%;
			padding: 20px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			.one,
			.two,
			.three {
				width: 100%;
				display: flex;
				padding: 10px 0;
				height: 25px;

				.tit {
					font-weight: 700;
					line-height: 25px;
					padding-right: 10px;
					flex: 1;
				}

				.desc {
					flex: 8;
					font-size: 10px;
					align-items: center;
					display: flex;
					justify-content: flex-start;

					.icon {
						margin-right: 5px;
						text-align: center;
						width: 18px;
					}
				}

				.btn {
					flex: 1;
					line-height: 21px;
				}

				.service {
					font-size: 10px;
					height: 25px;
					line-height: 25px;
					flex: 9;
					display: flex;

					.icon {
						margin-right: 5px;
						text-align: center;
						width: 18px;
					}
				}
			}

			.iconGroup {
				display: flex;
				width: 80%;
				flex-wrap: wrap;
				padding-left: 10px;
				box-sizing: border-box;

				.item {
					width: 50%;
					display: flex;
					align-items: center;
					font-size: 10px;
					justify-content: flex-start;

					.icon {
						margin-right: 5px;
					}
				}
			}
		}

		.divide {
			text-align: center;
			color: #999;
			font-size: 12px;
			padding-bottom: 20px;
		}

		.shuoming {
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
			font-size: 12px;
			padding-bottom: 20px;
		}

		.largeImg {
			width: 100%;
			padding: 0 10px;
			box-sizing: border-box;

			image {
				width: 100%;
			}
		}

		.goTop {
			position: fixed;
			right: 20px;
			bottom: 20px;
			width: 30px;
			height: 30px;
			background-color: #eef;
			border-radius: 15px;
			text-align: center;
			line-height: 30px;
			color: #999;
		}
	}
</style>

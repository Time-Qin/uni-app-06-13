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
		<view class="basic" v-for="item in basic">
			<view class="title">{{item.title}}</view>
			<view class="value">{{item.value}}</view>
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
				basic:[],
				indicatorDots: true,
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
				this.basic=this.goodsDetail.basic;
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
			}
		},
		onLoad(options) {
			this.getDetail(options.id);
		}
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
			margin:20px;
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
		
		.basic{
			width: 100%;
			display: flex;
			font-size: 10px;
			margin-bottom: 10px;
			
			.title{
				flex:1;
				text-align: right;
			}
			.value{
				margin-left: 10px;
				flex:1;
				text-align: left;
			}
		}
	}
</style>

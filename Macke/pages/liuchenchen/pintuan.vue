<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				拼团
			</view>
		</header-nav>
		<view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="false">
					<swiper-item class="items" v-for="(items,index) in lunbolist" :key="index">
						<image :src="items.image" mode="heightFix"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="item" v-for="item in goodlist.list" :key="item.id">
			<view class="item-img">
				<image style="width: 100px;height: 100px;" :mode="widthFix" :src="item.img"></image>
			</view>
			<view class="item-r">
				<view class="item-header">
					<view class="item-title">{{item.goods_name}}</view>
					<view class="item-title2">{{item.sku_spec}}</view>
				</view>
				<view class="item-desc">{{item.french}}</view>
				<view class="item-tuan">
					<text class="tuan-num">{{item.people}}</text>
					<text class="tuan-txt">人团</text>
				</view>
				<view class="item-footer">
					<view class="footer-left">
						<view class="item-price">￥{{item.amount}}</view>
						<view class="item-disprice">￥{{item.price}}</view>
					</view>
					<view class="item-shop">
						<uni-fav :star="false" :circle="true" class="favBtn" :content-text="contentText" bgColor="#f33"
							fgColor="#fff" />
					</view>
				</view>
			</view>
		</view>
	    <view class="guize">
            <view class="guize-c">
				<view class="guize-title">开团规则</view>
				<rich-text :nodes="guizelist"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetRequest
	} from '@/common/js/requestHttp.js';
	import {
		formatRichText
	} from '@/common/js/fomate.js';
	export default {
		data() {
			return {
				goodlist: [],
				contentText: {
					contentDefault: '立即开团'
				},
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				lunbolist:[],
				guize:[],
				guizelist:[],
				scrollTop: 0,
				one:1,
			}
		},
		created() {
			this.getGoods();
			this.getLunbo();
			this.getGuize()
		},
		methods: {
			formatRichText,
			async getGoods() {
				let result = await GetRequest("/api/groupbuy/load?cityId=110");
				this.goodlist = result.data
				console.log(this.goodlist)
			},
			async getLunbo() {
				let result = await GetRequest("/api/groupbuy/load?cityId=110");
				this.lunbolist = result.data.banner
				console.log(this.lunbolist)
			},
			async getGuize() {
				let result = await GetRequest("/api/groupbuy/load?cityId=110");
				this.guizelist = result.data.rule
				console.log(this.guizelist)
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
		.item {
			background-color: #fff;
			display: flex;
			width: 350px;
			height: 120px;
			margin: 10px auto;
			border-radius: 5px;

			.item-img {
				margin: 10px;
				width: 100px;
				height: 100px;
			}

			.item-r {
				background-color: #fff;
				width: 210px;
				height: 120px;

				.item-header {
					display: flex;
					justify-content: space-between;
				}

				.item-title {
					width: 100px;
					height: 20px;
					margin-top: 16px;
					font-size: 14px;
					font-weight: 400;
					font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
					text-overflow: ellipsis;
					overflow: hidden;
				}

				.item-title2 {
					margin-top: 16px;
					font-size: 14px;
					font-weight: 400;
					font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
					white-space: nowrap;
				}

				.item-desc {
					color: #a9a9a9;
					margin-top: 10px;
					font-size: 12px;
					width: 210px;
					height: 20px;
				}

				.item-tuan {
					margin-top: 2px;

					.tuan-num {
						color: #f33;
						font-size: 12px;
					}

					.tuan-txt {
						font-size: 12px;
					}
				}

				.item-footer {
					display: flex;
					justify-content: space-between;

					.footer-left {
						display: flex;

						.item-price {
							color: red;
							font-weight: 550;
							font-size: 14px;
						}

						.item-disprice {
							color: #a9a9a9;
							font-size: 10px;
							text-decoration: line-through;
						}
					}
				}
			}

		}
	    .guize {
			width: 355px;
			margin: 2px auto;
			background-color: #fff;
			border-radius: 5px;
			overflow: hidden;
			.guize-c {
				width: 335px;
				margin: 5px 10px 20px 10px;
				.guize-title {
					margin: 8px auto;
					text-align: center;
				}
			}
			

		}

	}
</style>

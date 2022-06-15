<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
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
			<button @click="open" class="right"><text class="iconfont1">&#xe60d;</text></button>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change" animation="true"
				@touchmove.stop.prevent="moveHandle">
				<view class="share">
					<view class="tit">分享</view>
					<view class="shareBtn">
						<button class="shareToWX" open-type="share">
							<view class="icon">
								<text class="iconfont1">&#xe60d;</text>
							</view>
							<view class="desc">分享给好友</view>
						</button>
						<button class="poster">
							<view class="icon">
								<image mode="widthFix" src="./static/icons/海报.png"></image>
							</view>
							<view class="desc">生成分享海报</view>
						</button>
					</view>
				</view>
			</uni-popup>
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
				<view class="btn" @click="toggle('bottom')">...</view>
				<!-- 普通弹窗 -->
				<uni-popup ref="popup1" background-color="#fff" @change="change" animation="true"
					@touchmove.stop.prevent="moveHandle">
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
				<view class="btn">...</view>
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
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onOptionsClick"
			@buttonClick="onbuttonClick" />
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	import {
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				goodsDetail: [],
				banner: [],
				mater: [],
				basic: [],
				list: [],
				carts: {},
				options: [{
					icon: 'home',
					text: '首页',
				}, {
					icon: 'cart',
					text: '购物车',
				}],
				buttonGroup: [{
					text: '加入购物车',
					backgroundColor: '#FFFFCC',
					color: '#333'
				}, {
					text: '立即购买',
					backgroundColor: 'lightcyan',
					color: '#333'
				}],
				time: '',
				indicatorDots: true,
				showDetail: false,
				goTop: false,
				show: false,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			...mapMutations(['addCarts']),
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
			},
			onOptionsClick(e) {
				if (e.index === 0) {
					uni.switchTab({
						url: "/pages/index/index",
						success: (res) => {
							console.log('跳转成功')
						},
						fail: (err) => {
							console.log('跳转失败' + err)
						}
					})
				} else {
					uni.navigateTo({
						url: "/pages/cart/cart"
					})
				}
			},
			onbuttonClick(e) {
				if (e.index === 0) {
					var obj = {
						id: this.goodsDetail.id,
						price: this.goodsDetail.price,
						buynum: 1,
						name: this.goodsDetail.name
					}
					this.addCarts(obj);
					uni.showToast({
						title: `添加购物车成功`,
						mask: true
					})
				} else {}
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup1.open(type)
			},
			change(e) {
				this.show = e.show;
			},
			moveHandle() {
				return false
			},
			changeValue(value) {
				this.carts = {
					id: this.goodsDetail.id,
					price: this.goodsDetail.price,
					buynum: value,
					name: this.goodsDetail.name
				}
			},
			addMoreCarts() {
				this.addCarts(this.carts);
				uni.showToast({
					title: `添加购物车成功`,
					mask: true
				})
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open("bottom")
			},
		},
		onLoad(options) {
			this.getDetail(options.id);
		},
		onPageScroll(e) {
			var that = this;
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
		onShareAppMessage(res) {
			return {
				title: 'Mcake蛋糕',
				path: '/pages/lanmin_detail/lanmin_detail'
			}
		}
	}
</script>
<style scoped lang="less">
	.container {
		background-color: white;
		padding-bottom: 80rpx;

		.share {
			width: 100%;
			height: 300rpx;
			padding: 20rpx 0;

			.tit {
				width: 100%;
				height: 100rpx;
				text-align: center;
			}

			.shareBtn {
				width: 100%;
				height: 200rpx;
				display: flex;
				justify-content: center;

				.shareToWX {
					width: 50%;
					text-align: center;
					font-size: 12px;
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: transparent !important;

					&::after {
						border: none !important;
					}

					.icon {
						width: 100rpx;
						height: 100rpx;
						line-height: 100rpx;
						border-radius: 50rpx;
						background-color: #eee;
						margin-bottom: 20rpx;

						.iconfont1 {
							font-size: 24px !important;
							line-height: 100rpx;
						}
					}
				}

				.poster {
					width: 50%;
					text-align: center;
					font-size: 12px;
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: transparent !important;

					&::after {
						border: none !important;
					}

					.icon {
						width: 100rpx;
						height: 100rpx;
						padding: 26rpx 0;
						box-sizing: border-box;
						border-radius: 50rpx;
						background-color: #eee;
						text-align: center;
						margin-bottom: 20rpx;

						image {
							line-height: 100rpx;
							width: 24px;
						}
					}
				}
			}
		}

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
			margin-top: 20rpx;

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
				width: 30px;
				height: 30px;
				line-height: 30px;
				border: none;
				top: 0;
				right: 0;
				font-size: 14px;
				padding: 0;
				background-color: transparent !important;

				&::after {
					border: none !important;
				}
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
				margin-top: 0 !important;
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

			.btn {
				margin-right: 20px;
				font-size: 18px;
				width: 30px;
				text-align: center;
			}

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

		/deep/.uni-goods-nav {
			position: fixed;
			bottom: 0;
			width: 100%;

			.uni-tab__icon {
				font-size: 12px;
			}

			.uni-tab__cart-button-right {
				margin-right: 5px;
				border-radius: 10px;
				width: 30px;
			}

			.uni-tab__text {
				font-size: 12px;
			}
		}

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
	}
</style>

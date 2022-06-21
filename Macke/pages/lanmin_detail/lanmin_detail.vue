<template>
	<view class="container">
		<!-- 顶部弹窗 --功能直达 -->
		<uni-popup ref="popup_top" background-color="#777" @touchmove.stop.prevent="moveHandle">
			<view class="popup_top">
				<view class="tit">功能直达</view>
			</view>
		</uni-popup>
		<!-- 自定义导航条 -->
		<view class="topBar">
			<view class="stausBar" :style="[stausBarStyle]">商品详情</view>
			<template v-if="goTop">
				<uni-icons class="back" @click="goBack" type="back" size="18"></uni-icons>
				<uni-icons class="more" @click="goMore" type="more-filled" size="18"></uni-icons>
			</template>
			<template v-else>
				<text class="iconfont1 icon-fanhui-1 back" @click="goBack"></text>
				<text class="iconfont1 icon-gengduomore12 more" @click="goMore"></text>
			</template>
		</view>
		<!-- 轮播图 -->
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item ,index) in banner" :key="index">
				<view class="swiper-item">
					<image @click="previewImg(item)" :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 商品标题 -->
		<view class="title">
			<view class="left">
				<view class="name">{{goodsDetail.name}}</view>
				<view class="fr">{{goodsDetail.french}}</view>
			</view>
			<button @click="open" class="right"><text class="iconfont1">&#xe60d;</text></button>
			<view class="priceGroup">
				<text class="price">¥{{goodsDetail.price}}/</text>
				<text class="weight">{{goodsDetail.spec}}({{goodsDetail.weight}})</text>
			</view>
		</view>
		<!-- 商品广告语 -->
		<view class="ad">
			<view class="ch">{{goodsDetail.brief}}</view>
			<view class="fr">{{goodsDetail.frenchBrief}}</view>
		</view>
		<!-- 标签注释 -->
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
		<!-- 基本信息 -->
		<view class="basic" v-for="(item,index) in basic" :key="item.id">
			<view class="title">{{item.title}}</view>
			<view v-if="index===3" class="value"><text v-for="num in item.value" :key="index"
					class="iconfont1 icon-bangbangtang"></text></view>
			<view v-else class="value">{{item.value}}</view>
		</view>
		<!-- 商品购买详情 -->
		<view class="buyDetail">
			<view class="one">
				<view class="tit">已选</view>
				<view class="desc">
					<view class="icon"><text class="iconfont icon-gouwuche"></text></view>
					<view class="text">{{itemList.spec}}({{itemList.weight}})</view>
				</view>
				<view class="btn" @click="toggle()">...</view>
			</view>
			<view class="iconGroup">
				<view class="item" v-if="itemList.tableware">
					<view class="icon"><text class="iconfont icon-canju1"></text></view>
					<view class="text">{{itemList.tableware}}</view>
				</view>
				<view class="item" v-if="itemList.candle">
					<view class="icon"><text class="iconfont icon-lazhu"></text></view>
					<view class="text">{{itemList.candle}}</view>
				</view>
				<view class="item" v-if="itemList.edible">
					<view class="icon"><text class="iconfont icon-canju2"></text></view>
					<view class="text">{{itemList.edible}}</view>
				</view>
				<view class="item" v-if="itemList.size">
					<view class="icon"><text class="iconfont icon-dangao"></text></view>
					<view class="text">{{itemList.size}}</view>
				</view>
			</view>
			<view class="two">
				<view class="tit">送至</view>
				<view class="desc">
					<view class="icon"><text class="iconfont icon-yunshupeisong" style="font-size: 14px;"></text></view>
					<view class="text">请选择地址</view>
				</view>
				<view class="btn" @click="selectAdd">...</view>
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
		<!-- 评论 -->
		<view class="comments" v-if="hascomments">
			<view class="top">
				<view class="left">
					<text class="tit">评价</text>
					<text class="total">{{comments.total}}</text>
				</view>
				<view class="right" @click="toAllComment(twoId)">查看全部 ></view>
			</view>
			<view class="content">
				<comments :twoId='twoId' :comments='comments.data' @goType='goType' :commentTag='commentTag'></comments>
			</view>
		</view>
		<view class="divide">——商品详情——</view>
		<!-- 长图介绍 -->
		<view class="largeImg" v-if="goodsDetail.shopDesc">
			<image :src="goodsDetail.shopDesc" mode="widthFix"></image>
		</view>
		<!-- 说明 -->
		<view class="shuoming">退改说明：上海、苏州、杭州地区距配送时间12小时及以上的订单可修改、取消或退订，如不满足12小时的订单不再支持修改、取消或退订</view>
		<view class="divide">——已经到最底了——</view>
		<!-- 回到顶部 -->
		<view v-if="goTop" class="goTop" @click="toTop">
			<text class="iconfont icon-shang"></text>
		</view>
		<!-- 底部导航 -->
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onOptionsClick"
			@buttonClick="onbuttonClick" />
		<!-- 底部弹出购物车 -->
		<carts :goodsDetail="goodsDetail" :list="list" :itemList="itemList" ref="popup1" @changItem='changItem'></carts>
		<!-- 底部弹窗  分享-->
		<uni-popup ref="popup" background-color="#fff" @touchmove.stop.prevent="moveHandle">
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
				itemList: {},
				carts: {},
				comments: [],
				commentTag: [],
				hascomments: false,
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
				twoId: '',
				opacity: 0,
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
				let result = await GetRequest(`/api/goods/detail?id=${id}`);
				result.code === 0 ? this.goodsDetail = result.data : ''
				this.banner = this.goodsDetail.banner;
				this.mater = this.goodsDetail.mater;
				this.basic = this.goodsDetail.basic;
				this.list = this.goodsDetail.list;
				this.itemList = this.list[0]
				this.time = this.$filters.formatDate()
			},
			async getComments(twoId, type) {
				let result = await GetRequest("/api/comment/load?twoId=" + twoId + '&type=' + type +
				'&page=1&count=3');
				result.code === 0 ? this.comments = result.data : '';
				if (this.comments.data && this.comments.data.length > 0) {
					this.hascomments = true;
				}
			},
			async getCommentTag(twoId) {
				let result = await GetRequest("/api/comment/total?twoId=" + twoId);
				result.code === 0 ? this.commentTag = result.data.list : '';
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
					this.toggle();
				} else {}
			},
			toggle() {
				this.$refs.popup1.change("bottom")
			},
			moveHandle() {
				return false
			},
			goMore() {
				this.$refs.popup_top.open("top")
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open("bottom")
			},
			toAllComment(twoId) {
				uni.navigateTo({
					url: '/pages/comments/comments?twoId=' + this.twoId,
				})
			},
			goType(data) {
				this.comments.data = [];
				this.getComments(this.twoId, data);
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			selectAdd() {
				uni.navigateTo({
					url: '/pages/index/address',
				})
			},
			changItem(idx) {
				this.itemList = this.list[idx];
			}
		},
		onLoad(options) {
			this.twoId = options.twoId;
			this.getDetail(options.id);
			this.getComments(options.twoId);
			this.getCommentTag(options.twoId);
		},
		onPageScroll(e) {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					// console.log(res.windowHeight,"xxxx",e.scrollTop)
					if (e.scrollTop > res.windowHeight) {
						that.goTop = true;
						that.opacity = 1;
					} else {
						that.opacity = e.scrollTop / res.windowHeight;
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
		},
		computed: {
			stausBarStyle() {
				return {
					'--stausBar-opacity': this.opacity
				}
			}
		},
	}
</script>
<style scoped lang="less">
	.container {
		background-color: white;
		padding-bottom: 80rpx;

		.topBar {
			height: 80rpx;
			line-height: 80rpx;
			width: 100%;
			padding-top: 40rpx;
			position: fixed;
			top: 0;
			display: flex;
			align-items: center;
			z-index: 10;

			.stausBar {
				height: 80rpx;
				line-height: 80rpx;
				width: 100%;
				padding-top: 40rpx;
				background-color: white;
				position: absolute;
				top: 0;
				z-index: 11;
				opacity: var(--stausBar-opacity);
				text-align: center;
			}

			.back,
			.more {
				z-index: 12;
				margin: 0 20rpx;
			}

			.icon-fanhui-1 {
				font-size: 28px;
				opacity: 0.5;
				z-index: 12;
				padding-left: 10rpx;
				margin: 0 10rpx;
			}

			.icon-gengduomore12 {
				font-size: 20px;
				opacity: 0.5;
				z-index: 12;
			}
		}

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
			padding: 0 20px;
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

		.comments {
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;

			.top {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				color: #999;
				padding: 20rpx;
				border-bottom: 1px solid #eee;

				.left {
					.tit {
						font-weight: 700;
						margin-right: 20rpx;
						color: #333;
						font-size: 16px;
					}
				}
			}

			.content {
				padding: 20rpx;
			}
		}

		.divide {
			text-align: center;
			color: #999;
			font-size: 12px;
			padding: 20rpx 0;
		}

		.shuoming {
			width: 100%;
			padding: 10px 10px 0;
			box-sizing: border-box;
			font-size: 12px;
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
			z-index: 1000;
			right: 20rpx;
			bottom: 120rpx;
			width: 30px;
			height: 30px;
			background-color: lightblue;
			border-radius: 15px;
			text-align: center;
			line-height: 30px;
			color: #999;
			opacity: 0.7;
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
	}
</style>

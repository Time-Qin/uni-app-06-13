<template>
	<view class="content">
		<!-- 导航栏组件 -->
		<header-title ref="heA" :backgdata="backgdata"></header-title>
		<!-- 轮播图 -->
		<view class="lunbo">
			<uni-swiper-dot :info="contentDatas.banner" :current="current" field="content" mode="dot">
				<swiper class="swiper-box" @change="changeLunBo" circular autoplay="true">
					<swiper-item v-for="item in contentDatas.banner" :key="item">
						<view class="swiper-item">
							<image class="lunboimg" :src="item" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!-- 商品名字 -->
		<view class="content_name">
			<view class="text_center">
				<text class="cName">{{contentDatas.name}}</text>
				<text class="engNmae">{{contentDatas.french}}</text>
			</view>
			<text class="iconfont icon-fenxiang1 right_icon" @click="shareO"></text>
		</view>
		<!-- 商品价格 -->
		<view class="content_price">
			￥{{contentDatas.price}}/{{contentDatas.spec}}({{contentDatas.weight}})
		</view>
		<!-- 商品介绍 -->
		<view class="content_title">
			<view class="chaTitle">
				{{contentDatas.brief}}
			</view>
			<view class="engTitle">
				{{contentDatas.frenchBrief}}
			</view>
		</view>
		<!-- 原料标签栏 -->
		<view class="rawMaterial">
			<view class="raw-list" v-for="item in contentDatas.mater" :key="item.id">
				<image class="raw-img" :src="item.img" mode="widthFix"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 口味标签 -->
		<view class="content_basic">
			<view class="basic_list" v-for="item in contentDatas.basic" :key="item.id">
				<view class="right_text">
					{{item.title}}
				</view>
				<view style="width: 40rpx;"></view>
				<view v-if="item.value=='1'||item.value=='2'" class="left_text" v-for="item in item.value" :key="item">
					<text class="iconfont icon-bangbangtang"></text>
				</view>
				<view v-else class="left_text">
					{{item.value}}
				</view>
			</view>
		</view>
		<!-- 商品规格及配送 -->
		<view class="content_main">
			<view class="changeSel">
				<text class="title">已选</text>
				<view class="changeSel_mid">
					<text class="iconfont icon-gouwuche content_wei">{{contentDatas.spec}}
						({{contentDatas.weight}})</text>
					<view class="mid_bottom">
						<text v-if="contentDatas.tableware"
							class="iconfont icon-canju1 item">-{{contentDatas.tableware}}</text>
						<text v-if="contentDatas.candle"
							class="iconfont icon-lazhu item">-{{contentDatas.candle}}</text>
						<text v-if="contentDatas.edible"
							class="iconfont icon-canju2 item">-{{contentDatas.edible}}</text>
						<text v-if="contentDatas.size" class="iconfont icon-dangao item">-{{contentDatas.size}}</text>
					</view>
				</view>
				<view class="dotsList dot" @click="shopContent">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
			</view>
			<view class="changeSel">
				<text class="title">送至</text>
				<view class="changeSel_mid">
					<text class="iconfont icon-yunshupeisong content_wei"> 请选择收货地址</text><br />
					<text class="iconfont icon-shijian content_wei"> 最早{{dateDatas.date}} {{dateDatas.time}}配送</text>
				</view>
				<view class="dotsList dot" @click="goAddress">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
			</view>
			<view class="changeSel2">
				<text class="title">服务</text>
				<view class="changeSel_mid">
					<text class="iconfont icon-duigouzhong "></text>
					<view class="content_wei"> 提供开票及售后服务</view>
				</view>
				<view class="">
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view v-if="hasMore==true" class="content_talke">
			<view class="talke_header">
				<text class="title">评价 </text>
				<text class="num">({{talkeDatas.total}})</text>
				<text class="num2" @click="lookAll">查看全部 </text>
				<uni-icons type="right" size="16"></uni-icons>
			</view>
			<view class="talke_main">
				<view :class="['talke_title_list',{active:changeIndex === idx}]" v-for="(item,idx) in titleDatas.list"
					:key="item.title" @click="changeIndex=idx">
					<view class="item" @click="changeTitle(item.type,idx)">{{item.title}}({{item.total}})</view>
				</view>
			</view>
			<view class="talke_main_text">
				<view class="text_list" v-for="item in (newData.length===0?talkeDatas.data:newData)" :key="item.cid">
					<view class="text_list_header">
						<uni-icons type="contact" size="30"></uni-icons>
						<text class="lphone">{{item.uname}}</text>
						<text class="ltime">{{item.ctime}}</text>
					</view>
					<view class="text_list_main">
						{{item.content}}
					</view>
					<view class="text_list_footer">
						规格:{{item.spec}}
					</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="title_M">
			------商品详情------
		</view>
		<!-- 底部图片 -->
		<view class="foote_img">
			<image class="lang_img" :src="contentDatas.wapDesc" mode="widthFix"></image>
		</view>
		<view class="title_M">
			------已经到最底部了------
		</view>
		<!-- 底部悬浮功能栏 -->
		<view class="bottom_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<car-view ref="popup4" :contentDatas="contentDatas"></car-view>
	</view>
</template>

<script>
	// banner是轮播图数据  mater是小标签 数据   basic是口味类型  list是套餐数据
	import {
		GetRequest
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				backgroundCr: 'transparent',
				backgroundCr1: '#888',
				toOpacity: '1',
				clors: 'white',
				contentDatas: [],
				dateDatas: [],
				talkeDatas: [],
				titleDatas: [],
				sku: 'n0301',
				current: 0,
				changeIndex: 0,
				twoId: 0,
				hasMore: true,
				newData: [],
				options: [{
					icon: 'home',
					text: '首页',
				}, {
					icon: 'cart',
					text: '购物车',
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'rgba(250,250,90,1)',
						color: '#333'
					},
					{
						text: '立即购买',
						backgroundColor: 'rgba(103,200,245,0.5)',
						color: '#333'
					}
				]
			}
		},
		computed: {
			backgdata() {
				const obj = {
					backgroundCr: this.backgroundCr,
					backgroundCr1: this.backgroundCr1,
					toOpacity: this.toOpacity,
					clors: this.clors,
				}
				return obj;
			}
		},
		onLoad(options) {
			this.getDatas(options)
		},
		methods: {
			async getDatas(id) {

				let result = await GetRequest(`/api/goods/detail?sku=${id.sku||id.id}&id=${id.sku||id.id}`);
				result.msg === "Success" ? this.contentDatas = result.data : '';

				this.twoId = this.contentDatas.twoId;

				let result2 = await GetRequest(
					`/api/goods/date?sku=${id.sku}&id=${id.id}&cityId=110&lng=31.23037&lat=121.4737`);
				result2.msg === "Success" ? this.dateDatas = result2.data : '';
				let result3 = await GetRequest(`/api/comment/load?twoId=${this.twoId}&type=0&page=1&count=3`);
				result3.msg === "Success" ? this.talkeDatas = result3.data : '';

				result3.data.total === 0 ? this.hasMore = false : this.hasMore = true;

				let result4 = await GetRequest(`/api/comment/total?twoId=${this.twoId}`);
				result4.msg === "Success" ? this.titleDatas = result4.data : '';
			},
			//评论标签的响应式点击
			async changeTitle(typeId, idx) {
				if (this.changeIndex === idx) return false;
				this.newData = [];
				let result3 = await GetRequest(
					`/api/comment/load?twoId=${this.twoId}&type=${typeId}&page=1&count=3`);
				result3.msg === "Success" ? this.newData = result3.data.data : '';
			},
			lookAll() {
				uni.navigateTo({
					url: `./talke?twoId=${this.twoId}`
				});
			},
			goAddress() {
				uni.navigateTo({
					url: `./address`
				});
			},
			shopContent() {
				// console.log(this.$refs.popup4)
				this.$refs.popup4.shopContent2();
			},
			changeLunBo(e) {
				this.current = e.detail.current;
			},
			shareO() {
				this.$refs.heA.shareOpen();
			},
			onClick(e) {
				if (e.content.text == '首页') {
					uni.switchTab({
						url: './index'
					})
				} else if (e.content.text == '购物车') {
					uni.switchTab({
						url: '/pages/zhaojing/shopCar'
					})
				} else {
					uni.showToast({
						title: `点击${e.content.text}`,
						icon: 'none'
					});
				}

			},
			buttonClick(e) {
				if (e.index) {
					uni.showToast({
						title: `点击${e.content.text}`,
						icon: 'none'
					});
				} else {
					this.shopContent();
				}

			}
		},
		onPageScroll(scrollTop) {
			// console.log('111')
			let toOpacity = scrollTop.scrollTop * 0.005;
			if (scrollTop.scrollTop >= 200) {
				this.backgroundCr = "#fff";
				this.toOpacity = toOpacity;
				this.clors = "black";
				this.backgroundCr1 = "#fff";
			} else if (scrollTop.scrollTop == 0) {
				this.backgroundCr = "transparent";
				this.toOpacity = '1';
				this.clors = "white";
				this.backgroundCr1 = "#888"
			} else {
				this.toOpacity = toOpacity;
			}
		},
	}
</script>

<style lang="less" scoped>
	.content {
		background-color: rgba(240, 240, 240, 0.2);
		margin-bottom: 12vh;

		.lunbo {
			.swiper-box {
				height: 54vh;

				.lunboimg {
					width: 100%;
				}
			}
		}

		.content_name {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 40rpx 0;
			position: relative;

			.text_center {
				display: flex;
				flex-direction: column;
				margin: 0 auto;

				.cName {
					font-size: 40rpx;
					letter-spacing: 6rpx;
					text-align: right;
					margin-bottom: 14rpx;
				}

				.engNmae {
					font-size: 22rpx;
					text-align: center;
					color: #999;
				}
			}

			.right_icon {
				position: absolute;
				right: 2vw;
				margin-right: 36rpx;
				color: #00cc00;
			}
		}

		.content_price {
			text-align: center;
			color: #111;
			font-weight: 300;
			margin-bottom: 40rpx;
		}

		.content_title {
			text-align: center;
			margin: 0 40rpx;
			padding: 32rpx 42rpx;
			background-color: #ecf2fd;
			border-radius: 20rpx;

			.chaTitle {
				font-size: 24rpx;
				letter-spacing: 4rpx;
			}

			.engTitle {
				font-size: 28rpx;
				background-color: #ecf2fd;
				font-weight: 300;
			}
		}

		.rawMaterial {
			margin: 20rpx 0;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			.raw-list {
				padding: 10rpx;
				background-color: #ecf2fd;
				margin-right: 16rpx;
				margin-bottom: 16rpx;
				border-radius: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.raw-img {
					width: 40rpx;
					margin: 0 10rpx;
				}

				text {
					font-size: 20rpx;
				}
			}
		}

		.content_basic {
			margin: 40rpx;

			.basic_list {
				display: flex;
				margin-bottom: 20rpx;
				font-size: 24rpx;

				.right_text {
					flex: 1;
					text-align: right;
				}

				.left_text {
					flex: 1;
					text-align: left;
				}
			}
		}

		.content_main {
			margin: 10rpx 20rpx;
			padding: 10rpx 20rpx;
			background-color: #fdfdfd;
			border-radius: 20rpx;

			.dotsList {
				display: flex;

				.dots {
					width: 8rpx;
					height: 8rpx;
					border-radius: 50%;
					background-color: #000;
					margin-right: 10rpx;
				}
			}

			.changeSel {
				display: flex;
				padding-top: 20rpx;
				padding-bottom: 10rpx;
				border-bottom: 2rpx solid #ddd;

				.title {
					width: 12vw;
					font-weight: 600;
				}

				.changeSel_mid {
					width: 60vw;

					.content_wei {
						font-size: 26rpx;
					}

					.mid_bottom {
						display: flex;
						flex-wrap: wrap;
						margin-top: 20rpx;

						.item {
							margin-bottom: 10rpx;
							padding-right: 20rpx;
							font-size: 26rpx;
							font-weight: 300;
						}
					}
				}

				.dot {
					flex: 1;
					padding-left: 10vw
				}
			}

			.changeSel2 {
				display: flex;
				margin-top: 20rpx;
				margin-bottom: 10rpx;
				align-items: center;
				overflow: hidden;

				.title {
					width: 12vw;
					font-weight: 600;
				}

				.changeSel_mid {
					width: 60vw;
					display: flex;

					.icon-duigouzhong {
						font-size: 40rpx;
					}

					.content_wei {
						font-size: 26rpx;
						line-height: 44rpx;
					}
				}
			}

		}

		.content_talke {
			margin: 20rpx 20rpx;
			padding: 20rpx 20rpx;
			background-color: #fdfdfd;
			border-radius: 20rpx 20rpx 0 0;

			.talke_header {
				display: flex;
				justify-content: center;
				padding-bottom: 20rpx;
				border-bottom: 2rpx solid #999;

				.title {
					width: 12vw;
					font-weight: 600;
				}

				.num {
					width: 54vw;
					color: #999;
					font-size: 28rpx;
				}

				.num2 {
					color: #999;
					font-size: 28rpx;
					margin-right: 16rpx;
				}
			}

			.talke_main {
				margin: 20rpx 20rpx;
				padding: 10rpx 0;
				display: flex;
				flex-wrap: wrap;

				.talke_title_list {
					background-color: #ecf2fd;
					margin-right: 24rpx;
					margin-bottom: 20rpx;
					border-radius: 10rpx;

					&.active {
						background-color: #ccf2fd;
						color: #00d6f9;
					}

					.item {
						font-size: 26rpx;
						padding: 16rpx;
					}
				}
			}

			.talke_main_text {

				.text_list {
					display: flex;
					flex-direction: column;
					border-bottom: 2rpx solid #ddd;
					padding: 14rpx;
					line-height: 60rpx;

					.text_list_header {
						display: flex;

						/deep/.uniui-contact {
							color: #999 !important;
						}

						.lphone {
							font-size: 26rpx;
						}

						.ltime {
							margin-left: auto;
							color: #999;
							font-size: 24rpx;
						}
					}

					.text_list_main {
						background-color: rgba(200, 200, 200, 0.2);
						padding: 10rpx 30rpx;
						border-radius: 20rpx;
						font-size: 24rpx;
					}

					.text_list_footer {
						margin-top: 8rpx;
						font-size: 22rpx;
						color: #999;
					}
				}
			}
		}

		.title_M {
			color: #999;
			text-align: center;
			font-size: 22rpx;
			margin: 40rpx auto;
		}

		.foote_img {
			margin: 0 20rpx;
			border-radius: 10rpx;
			overflow: hidden;
			padding: -8rpx;

			.lang_img {
				width: 100%;
			}
		}

		.bottom_nav {
			position: fixed;
			width: 100%;
			bottom: 0;
			left: 0;

			/deep/.uni-tab__cart-box {
				padding: 20rpx 0;

				.uni-tab__cart-button-right {
					margin-right: 10rpx;
					border-radius: 100px;
				}
			}

		}

	}
</style>

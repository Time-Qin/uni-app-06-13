<template>
	<view class="content">
		<!-- 导航栏组件 -->
		<header-title :backgdata="backgdata"></header-title>
		<!-- 轮播图 -->
		<view class="lunbo">
			<uni-swiper-dot :info="contentDatas.banner" :current="current" field="content" mode="dot">
				<swiper class="swiper-box" @change="change" circular autoplay="true">
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
			<text class="iconfont icon-fenxiang1 right_icon"></text>
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
						<text class="iconfont icon-canju1 item">&nbsp; {{contentDatas.tableware}}</text>
						<text class="iconfont icon-lazhu item">&nbsp; {{contentDatas.candle}}</text>
						<text class="iconfont icon-canju2 item">&nbsp; {{contentDatas.edible}}</text>
						<text class="iconfont icon-dangao item"> {{contentDatas.size}}</text>
					</view>
				</view>
				<view class="dotsList dot">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
			</view>
			<view class="changeSel">
				<text class="title">送至</text>
				<view class="changeSel_mid">
					<text class="iconfont icon-yunshupeisong content_wei"> 请选择收货地址</text><br/>
					<text class="iconfont icon-shijian content_wei"> 最早{{dateDatas.date}} {{dateDatas.time}}配送</text>
				</view>
				<view class="dotsList dot">
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
		<view class="content_talke">
			<view class="talke_header">
				<text class="title">评价 </text>
				<text class="num">({{talkeDatas.total}})</text>
				<text class="num2">查看全部 </text><uni-icons  type="right" size="16"></uni-icons>
			</view>
			<view class="talke_main">
				<view class="talke_title_list" v-for="item in titleDatas.list" :key="item.title">
					<view class="item">{{item.title}}({{item.total}})</view>
				</view>
			</view>
			<view class="talke_main_text">
				<view class="text_list" v-for="item in talkeDatas.data" :key="item.cid">
					<view class="text_list_header">
						<uni-icons type="contact" size="30"></uni-icons>
						<text>{{item.uname}}</text>--
						<text>{{item.ctime}}</text>
					</view>
					<view class="text_list_main">
						<view class="">
							{{item.content}}
						</view>
					</view>
					<view class="text_list_footer">
						<text>规格:{{item.spec}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="">
			------商品详情------
		</view>
		<view class="foote_img">
			<image class="lang_img" src="https://static.mcake.com/desc/lanmeiqingrunapolun/wap.jpg" mode="widthFix"></image>
		</view>
		<view class="">
			------已经到最底部了------
		</view>
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
				talkeDatas:[],
				titleDatas:[],
				sku: 'n0301',
				current: 0,

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
		created() {
			this.getDatas();
		},
		methods: {
			async getDatas() {
				let result = await GetRequest(`/api/goods/detail?id=&sku=n0301&cityId=110`);
				result.msg === "Success" ? this.contentDatas = result.data : '';
				console.log(result, this.contentDatas);
				let result2 = await GetRequest(`/api/goods/date?id=&sku=n0301&cityId=110&lng=31.23037&lat=121.4737`);
				result2.msg === "Success" ? this.dateDatas = result2.data : '';
				let result3 = await GetRequest(`/api/comment/load?twoId=10095&type=0&page=1&count=3`);
				result3.msg === "Success" ? this.talkeDatas = result3.data : '';
				console.log(result3)
				let result4 = await GetRequest(`/api/comment/total?twoId=10095`);
				result4.msg === "Success" ? this.titleDatas = result4.data : '';
				console.log(this.titleDatas)
			},
			change(e) {
				this.current = e.detail.current;
			},
		},
		onPageScroll(scrollTop) {
			console.log('111')
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
		background-color: #fff;

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
							width: 50%;
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
			.changeSel2{
				display: flex;
				margin-top: 20rpx;
				margin-bottom: 10rpx;
				align-items: center;
				overflow: hidden;
				.title{
					width: 12vw;
					font-weight: 600;
				}
				.changeSel_mid{
					width: 60vw;
					display: flex;
					.icon-duigouzhong{
						font-size: 40rpx;
					}
					.content_wei{
						font-size: 26rpx;
						line-height: 44rpx;
					}
				}
			}

		}
		.content_talke{
			margin: 20rpx 20rpx;
			padding: 20rpx 20rpx;
			background-color: #fdfdfd;
			border-radius: 20rpx 20rpx 0 0;
			.talke_header{
				display: flex;
				justify-content: center;
				padding-bottom: 20rpx ;
				border-bottom: 2rpx solid #999;
				.title{
					width: 12vw;
					font-weight: 600;
				}
				.num{
					width: 54vw;
					color: #999;
					font-size: 28rpx;
				}
				.num2{
					color: #999;
					font-size: 28rpx;
					margin-right: 16rpx;
				}
			}
			.talke_main{
				margin: 20rpx 20rpx;
				padding: 10rpx 0;
				display: flex;
				flex-wrap: wrap;
				.talke_title_list{
					background-color: #ecf2fd;
					padding: 16rpx;
					margin-right: 24rpx;
					margin-bottom: 20rpx;
					border-radius: 10rpx;
					.item{
						font-size: 26rpx;
					}
				}
			}
			.talke_main_text{
				
				.text_list{
					display: flex;
					flex-direction: column;
					border-bottom: 2rpx solid #ddd;
				}
			}
		}
		.foote_img{
			.lang_img{
				width: 100%;
			}
		}
	}
</style>

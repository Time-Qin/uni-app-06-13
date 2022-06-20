<template>
	<view class="container" style="width: 100%;" >
		<!-- 自定义导航条 -->
		<view class="header_title" :style="{background: backgroundCr,opacity:toOpacity,color:clors}">
			<view class="header_content">
				<view class="content" :style="{background: backgroundCr1}" @click="goAddress">
					<text class="iconfont icon-shouhuodizhi"></text>
					<text>请选择收货地址</text>
				</view>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="lunbo">
			<uni-swiper-dot :info="fullAdvPlay" :current="current" field="content" mode="dot">
				<swiper class="swiper-box" @change="change" circular autoplay="true">
					<swiper-item v-for="item in fullAdvPlay" :key="item.img">
						<view class="swiper-item">
							<image class="lunboimg" :src="item.img" mode="widthFix" @click="gourl(item)" ></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!-- 小表情栏 -->
		<view class="brandKeys">
			<view class="brandKeysView" v-for="item in brandkeys" :key="item.title">
				<image class="iconImg" :src="item.img" mode="widthFix"></image>
				<view class="title">
					{{item.title}}
				</view>
			</view>
		</view>
		<!-- 图文导航 -->
		<view class="imgTextNav">
			<view class="imgTextNavView" v-for="item in imgtextnav" :key="item.title" @click="gowhere(item)">
				<image class="iconImg" :src="item.img" mode="widthFix"></image>
				<view class="title">
					{{item.title}}
				</view>
			</view>
		</view>
		<!-- 本季推荐 -->
		<view class="recommendedSeason">
			<view class="oneview">
				<text class="iconfont icon-daocha"></text>
				<text class="iconfont icon-line"></text>
				<view class="title">
					<text class="title_content">{{recommendedseason.title}}</text>
					<text class="title_english">{{recommendedseason.subtitle}}</text>
				</view>
				<text class="more">{{recommendedseason.more}}</text>
			</view>
			<view class="twoview">
				<scroll-view class="x_view" scroll-x="true" >
					<template v-for="item in recommendedseason.adv" :key="item.img">
						<image class="item" :src="item.img" mode="heightFix" @click="gourl(item.url)"></image>
					</template>
				</scroll-view>
			</view>
			<!-- 本季推荐 -->
			<view class="recommendedScene">
				<view class="" v-for="item in recommendedscene" :key="item.data.content.more">
					<view class="oneview">
						<text class="iconfont icon-daocha"></text>
						<text class="iconfont icon-line"></text>
						<view class="title">
							<text class="title_content">{{item.title}}</text>
							<text class="title_english">{{item.data.content.subtitle}}</text>
						</view>
						<text class="more">{{item.data.content.more}}</text>
					</view>
					<view class="titleImg">
						<image :src="item.data.content.adv[0].img" mode="widthFix" @click="gourl(item.data.content.adv[0].url)"></image>
					</view>
					<view class="card_view">
						<view class="item" v-for="i in item.data.content.list" :key="i.img">
							<view class="item_view">
								<image class="item_img" :src="i.img" mode="widthFix" @click="gosku(i.sku)"></image>
							</view>							
							<view class="item_title">
								<text>{{i.name}}</text>
								<text class="textfrench">{{i.french}}</text>
								<view class="item_footer">
									<text class="price">￥{{i.price}}</text>
									<text class=" gouwuche iconfont icon-gouwuche" @click="getDatasCar(i.sku)">
										
									</text>
										<car-view ref="Car" :contentDatas="contentDatas" ></car-view>
								</view>
							</view>
						</view>
					</view>
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
				backgroundCr:'transparent',
				backgroundCr1:'#888',
				toOpacity:'1',
				clors:'white',
				datas: [],
				current: 0,
				fullAdvPlay: [],
				brandkeys: [],
				imgtextnav: [],
				recommendedseason: [],
				recommendedscene: [],
				contentDatas:[],
			}
		},
		created() {
			this.GetData();
		},
		methods: {
			async GetData() {
				let result = await GetRequest('/api/page/load'); //首页数据
				result.msg === "Success" ? this.datas = result.data : '';
				this.fullAdvPlay = this.datas.list[0].data.content.list;
				this.brandkeys = this.datas.list[1].data.content.list;
				this.imgtextnav = this.datas.list[2].data.content.list;
				this.recommendedseason = this.datas.list[3].data.content;
				this.recommendedscene = this.datas.list.splice(4, 7);
			},
			async getDatasCar(sku){
				let result = await GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
				result.msg === "Success" ? this.contentDatas = result.data : '';
				this.$refs.Car[0].shopContent2();
			},
			change(e) {
				this.current = e.detail.current;
			},
			goAddress(){
				uni.navigateTo({
					url:'./address'
				})
			},
			gosku(sku){
				let sku1 = sku
				uni.navigateTo({
					url:`./good_details?sku=${sku1}`
				});
			},
			gourl(res){
				switch (res.title) {
					case '2022年父亲节':
						uni.navigateTo({
							url: '/pages/liuchenchen/pintuan'

						});
						return;
					case '超值拼购':
						uni.navigateTo({
							url: '/pages/liuchenchen/pintuan'
						});
						return;
					case '柠漾':{
						let res1 = res.url.lastIndexOf('?');
						res1=res.url.slice(res1+1);
						uni.navigateTo({
							url: `./good_details?${res1}`
						});
						return;}
					case '2022年新人活动':
						uni.navigateTo({
							url: '/pages/liuchenchen/pintuan'
						});
						return;
				};
				
				let src = res.lastIndexOf('?');
				src = res.slice(src+1);
				uni.navigateTo({
					url:`./good_details?${src}`
				});
			},
			gowhere(where){
				console.log(where,'111111111111');
				switch (where.title) {
					case '美味蛋糕':
						uni.navigateTo({
							url: '/pages/chenrenjun/index'
						});
						return;
					case '好好吃面包':
						uni.navigateTo({
							url: '/pages/zhaojing/bread'
						});
						return;
					case '饼干小食':
						uni.navigateTo({
							url: '/pages/liuchenchen/index'
						});
						return;
					case '配送范围':
						uni.navigateTo({
							url: './mapView'
						});
						return;
					case '签到有礼':
						uni.navigateTo({
							url: '/pages/liuchenchen/qiaodao'
						});
						return;
				}
			}
		},
		onPageScroll(scrollTop){
			let toOpacity = scrollTop.scrollTop*0.005;
			if(scrollTop.scrollTop>=200){
				this.backgroundCr = "#fff";
				this.toOpacity = toOpacity;
				this.clors="black";
				this.backgroundCr1="#fff";
			}else if(scrollTop.scrollTop==0){
				this.backgroundCr = "transparent";
				this.toOpacity = '1';
				this.clors="white";
				this.backgroundCr1 = "#888"
			}
			else{
				this.toOpacity = toOpacity;
			}
		},
	}
</script>

<style lang="less" scoped>
	.container {
		.header_title{
			position: fixed;
			z-index: 1;
			.header_content{
				margin-top: 20rpx;
				height: 10vh;
				width: 100vw;
				.content{
					margin: 3vh 36rpx;
					padding: 10rpx 16rpx;
					border-radius: 50rpx;
					display: inline-block;
					background-color: #999;
					text{
						font-size: 24rpx;
						line-height: 20rpx;
						margin-right: 8rpx;
						font-weight: 300;
					}
				}
			}
		}
		.lunbo {
			.swiper-box {
				height: 1450rpx;

				.lunboimg {
					width: 100%;
				}
			}
		}

		.brandKeys {
			background-color: #fff;
			display: flex;
			padding: 10rpx 14rpx;

			.brandKeysView {
				flex: 1;
				display: flex;

				.iconImg {
					width: 50rpx;
					padding-right: 6rpx;
				}

				.title {
					color: #212121;
					font-size: 24rpx;
					line-height: 50rpx;
					font-weight: 300;
				}
			}
		}

		.imgTextNav {
			background-color: #fff;
			display: flex;
			padding: 10rpx 10rpx;

			.imgTextNavView {
				flex: 1;
				display: flex;
				flex-direction: column;

				.iconImg {
					width: 60rpx;
					margin: 0 auto;
				}

				.title {
					color: #212121;
					margin-top: 10rpx;
					font-size: 24rpx;
					text-align: center;
					font-weight: 500;
				}
			}
		}

		.recommendedSeason {
			background-color: #fff;

			.oneview {
				color: #999;
				display: flex;
				align-items: center;
				padding: 60rpx 10rpx;

				.icon-daocha {
					font-size: 90rpx;
				}

				.icon-line {
					font-size: 50rpx;
					padding-right: 10rpx;
				}

				.title {
					display: flex;
					flex-direction: column;

					.title_content {
						color: #212121;
						font-weight: 600;
					}

					.title_english {
						font-size: 20rpx;
					}
				}

				.more {
					margin-left: auto;
					margin-right: 20rpx;
					font-size: 28rpx;
				}
			}

			.twoview {
				.x_view {
					display: flex;
					flex-direction: column;
					white-space: nowrap;
					height: 26vh;

					.item {
						flex: 1;
						height: 26vh !important;
					}
				}
			}
			.recommendedScene {
				background-color: #ddd;
			
				.titleImg {
					image {
						width: 100%;
					}
				}
			
				.card_view {
					display: flex;
					flex-wrap: wrap;
					width: 100vw;
					.item {
						width: 45%;
						box-sizing: border-box;
						margin: 16rpx 18rpx;
						border-radius: 10rpx;
						overflow: hidden;
						box-sizing: border-box;
						.item_view{
							overflow: hidden;
							margin-bottom: -10rpx;
							.item_img{
							width: 100%;
						}
						}
						.item_title{
							background-color: #fff;
							padding: 20rpx;
							display: flex;
							flex-direction: column;
							border-radius: 0 0 10rpx 10rpx;
							.textfrench {
							font-size: 20rpx;
							color: #999;
						}
							.item_footer{
								display: flex;
								height: 40rpx;
								margin-top: 10rpx;
								.price{
									font-size: 26rpx;
									font-weight: 300;
									line-height: 40rpx;
								}
								.gouwuche{
									padding: 6rpx;
									border-radius: 6rpx;
									background-color: #f4fbfb;
									margin-left: auto;
								}
							}
						}
					}
			
					/deep/.uni-card__cover {
						image {
							width: 100% !important;
							margin: 0;
							padding: 0;
						}
					}
				}
			}
		}
	}
</style>

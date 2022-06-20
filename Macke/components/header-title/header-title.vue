<template>
	<view>
		<view class="header_title"
			:style="{background: backgdata.backgroundCr,opacity:backgdata.toOpacity,color:backgdata.clors}">
			<view class="header_content">
				<view class="content_left">
					<view class="content" :style="{background: backgdata.backgroundCr1 ,color:backgdata.clors}" @click="backTo" >
						<text class="iconfont icon-xiangzuo1"></text>
					</view>
					<view class="content" @click.prevent="openPopup" :style="{background: backgdata.backgroundCr1}">
						<view class="dots" :style="{background:backgdata.clors}"></view>
						<view class="dots" :style="{background:backgdata.clors}"></view>
						<view class="dots" :style="{background:backgdata.clors}"></view>
					</view>
				</view>				
				<uni-popup ref="popup" type="top">
					<view class="topview">
						<view class="view_mar">
							<view class="mainpage" v-for="item in topdata" :key="item.name" @click="gopage(item.name)">
								<text :class="item.icon"></text>
								<text class="name">{{item.name}}</text>
							</view>
						</view>
					</view>
				</uni-popup>
			</view>
		</view>
		<uni-popup ref="popup2" type="bottom">
			<view class="shareView">
				<text class="title">分享</text>
				<view class="shareMain">
					<view class="sharePeople" >
						<button open-type="share" class=" shareP iconfont icon-fenxiang1" ></button>
						<text>分享给好友</text>
					</view>
					<view class="shareImg" @click="shareImg">
						<text class="shareI iconfont icon-tupian3"></text>
						<text>生成分享海报</text>
					</view>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name: "header-title",
		props: ['backgdata'],
		data() {
			return {
				backgroundCr: 'transparent',
				backgroundCr1: '#888',
				toOpacity: '1',
				clors: 'white',
				imgurl:'https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg',
				topdata: [{
						name: '首页',
						icon: 'iconfont icon-shouye'
					},
					{
						name: '我的',
						icon: 'iconfont icon-31wode'
					},
					{
						name: '购物车',
						icon: 'iconfont icon-gouwuche'
					},
					{
						name: '客服小蜜',
						icon: 'iconfont icon-kefu'
					},
					{
						name: '我要反馈',
						icon: 'iconfont icon-fankui'
					},
					{
						name: '分享',
						icon: 'iconfont icon-fenxiang'
					}
				]
			};
		},
		created() {},
		methods: {
			backTo(){
				uni.navigateBack({});
			},
			shareImg(){
				
			},
			openPopup() {
				this.$refs.popup.open();
			},
			shareOpen() {
				this.$refs.popup.close();
				this.$refs.popup2.open();
			},
			gopage(name) {
				switch (name) {
					case '首页':
						uni.switchTab({
							url: '/pages/index/index'
						});
						return;
					case '我的':
						uni.switchTab({
							url: '/pages/zhaojing/my'
						});
						return;
					case '购物车':
						uni.switchTab({
							url: '/pages/zhaojing/shopCar'
						});
						return;
					case '客服小蜜':
						uni.makePhoneCall({
							phoneNumber: '4006678678'
						});
						return;
					case '我要反馈':
						uni.navigateTo({
							url: '../../pages/zhaojing/question'
						});
						return;
					case '分享':
						this.shareOpen();
						return;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.header_title {
		position: fixed;
		z-index: 1;
		height: 10vh;

		.header_content {
			height: 6vh;
			width: 100vw;
			.content_left{
				display: flex;
				.content {
					width: 8vw;
					height: 8vw;
					margin: 4vh 14rpx;
					border-radius: 50%;
					display: flex;
					background-color: #999;
					justify-content: center;
					align-items: center;
				
					.dots {
						width: 10rpx;
						height: 10rpx;
						border-radius: 50%;
						background-color: #fff;
						margin-right: 10rpx;
					}
				
					.dots:first-child {
						margin-left: 8rpx;
					}
				}
				
			}

			.topview {
				width: 100%;
				background-color: rgba(85, 85, 85, 0.6);
				border-radius: 0 0 2vh 2vh;
				overflow: hidden;

				.view_mar {
					margin: 60rpx 40rpx;
					display: flex;
					flex-wrap: wrap;

					.mainpage {
						width: 22%;
						display: flex;
						flex-direction: column;
						background-color: rgba(0, 0, 0, 0.6);
						text-align: center;
						color: #fff;
						padding: 30rpx 0;
						border-radius: 20rpx;
						margin: 10rpx 10rpx;

						.iconfont {
							font-size: 50rpx;
							font-weight: 300;
							margin-bottom: 10rpx;
						}

						.name {
							font-size: 26rpx;
						}
						
					}
				}

			}
		}
	}

	.shareView {
		background-color: #fff;
		padding: 40rpx;
		text-align: center;
		border-radius: 20rpx;
		.title {

			text-align: center;
		}
		.shareMain{
			display: flex;
			margin: 40rpx 0;
			.sharePeople,.shareImg{
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.shareP,.shareI{
					height: 10vh;
					line-height: 10vh;
					width: 10vh;
					border-radius: 50%;
					font-size: 60rpx;
					color: #00cc00;
					background-color: #ddd;
				}
				.icon-tupian3{
					color: #f60;
				}
			}
		}
	}
</style>

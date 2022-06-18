<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				签到有礼
			</view>
		</header-nav>
		<view class="user">
			<view class="user-left">
				<view class="user-img">
					<uni-icons type="contact-filled" size="50"></uni-icons>
				</view>
				<view class="info">
					<view class="tel">15052004715</view>
					<view class="day">已连续签到1天</view>
				</view>
			</view>
			<view class="btn">
				<uni-fav :star="false" :circle="true" class="favBtn" :content-text="contentText" bgColor="#f60" fgColor="#fff"/>
			</view>
		</view>
		<view class="getgifts">
			<view class="gift-hd">
				<text class="gift-title">签到领好礼</text>
			</view>
			<view class="gift-bd">
				<view class="gift-item">
					<view class="nthday">第1天</view>
					<view class="gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-jf-samll.png" style="width: 30px;height: 30px;"></image>
					</view>
					<view class="jifen">10积分</view>
				</view>
				<view class="gift-item">
					<view class="nthday">第2天</view>
					<view class="gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-jf-samll.png" style="width: 30px;height: 30px;"></image>
					</view>
					<view class="jifen">15积分</view>
				</view>
				<view class="gift-item">
					<view class="nthday">第3天</view>
					<view class="gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-jf-samll.png" style="width: 30px;height: 30px;"></image>
					</view>
					<view class="jifen">20积分</view>
				</view>
				<view class="gift-item">
					<view class="nthday">第4天</view>
					<view class="gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-jf-samll.png" style="width: 30px;height: 30px;"></image>
					</view>
					<view class="jifen">30积分</view>
				</view>
				<view class="gift-item">
					<view class="nthday">第5天</view>
					<view class="gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-jf-samll.png" style="width: 30px;height: 30px;"></image>
					</view>
					<view class="jifen">40积分</view>
				</view>
				<view class="gift-item">
					<view class="nthday">第6天</view>
					<view class="gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-jf-samll.png" style="width: 30px;height: 30px;"></image>
					</view>
					<view class="jifen">50积分</view>
				</view>
				<view class="gift-item7">
                    <view class="item7-txt">
						<view class="item7-nthday">第7天</view>
						<view class="item7-jifen">神秘大礼包</view>
					</view>
					<view class="item7-gift-img">
						<image src="https://static.mcake.com//mini/static/images/channel/icon-fudai.png" style="width: 60px;height: 60px;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="dotask">
			<view class="task-hd">
				<text class="task-txt">做任务赚积分</text>
			</view>
			<view class="task-bd">
				<view class="task-item">
					<view class="task">
						<view class="task-left">
							<view class="task-img">
								<image src="https://static.mcake.com//mini/static/images/channel/icon-calendar-1.png" style="width: 30px;height: 30px;"></image>
							</view>
							<view class="task-info">
								<view class="task-title">累计签到3天</view>
								<view class="task-desc">累计签到3天可额外获得20积分</view>
							</view>
						</view>
						<view class="task-btn">
							<uni-fav :star="false" :circle="true" class="favBtn" :content-text="buttonText" bgColor="#f60" fgColor="#fff"/>
						</view>
					</view>
					<view class="task">
						<view class="task-left">
							<view class="task-img">
								<image src="https://static.mcake.com//mini/static/images/channel/icon-calendar-2.png" style="width: 30px;height: 30px;"></image>
							</view>
							<view class="task-info">
								<view class="task-title">累计签到7天</view>
								<view class="task-desc">累计签到7天可额外获得50积分</view>
							</view>
						</view>
						<view class="task-btn">
							<uni-fav :star="false" :circle="true" class="favBtn" :content-text="buttonText" bgColor="#f60" fgColor="#fff"/>
						</view>
					</view>
					<view class="task">
						<view class="task-left">
							<view class="task-img">
								<image src="https://static.mcake.com//mini/static/images/channel/icon-calendar-3.png" style="width: 30px;height: 30px;"></image>
							</view>
							<view class="task-info">
								<view class="task-title">完成2单配送订单</view>
								<view class="task-desc">完成2单配送订单获得200积分</view>
							</view>
						</view>
						<view class="task-btn">
							<uni-fav :star="false" :circle="true" class="favBtn" :content-text="buttonText" bgColor="#f60" fgColor="#fff"/>
						</view>
					</view>
					<view class="task">
						<view class="task-left">
							<view class="task-img">
								<image src="https://static.mcake.com//mini/static/images/channel/icon-calendar-4.png" style="width: 30px;height: 30px;"></image>
							</view>
							<view class="task-info">
								<view class="task-title">完成2单自提订单</view>
								<view class="task-desc">完成2单自提订单获得500积分</view>
							</view>
						</view>
						<view class="task-btn">
							<uni-fav :star="false" :circle="true" class="favBtn" :content-text="buttonText" bgColor="#f60" fgColor="#fff"/>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                contentText: {
					contentDefault:'查看积分'
				},
				buttonText: {
					contentDefault:'领任务'
				},
				scrollTop: 0,
				one:1,
			}
		},
		methods: {
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
		background-color: #f96;
		padding-bottom:10vh;
		/deep/header-nav {
			display: flex;
		
			.slot-left {
				margin-left: 20rpx;
				flex: 1;
				color: white;
		
				.icon-xiangzuo1 {
					font-size: 40rpx;
					margin-right: 20rpx;
				}
			}
			.navBarBox {
				background-color: #f96;
			}
		}
		.user {
			width: 355px;
			height: 60px;
			margin: 0 10px 10px 10px;
			display: flex;
			justify-content: space-between;
			padding-top: 20px;
			
			.user-left {
				display: flex;
				.info {
					padding-top: 8px;
				}
				
				.tel {
					color: #fff;
				}
				.day {
					color: #fff;
					font-size: 12px;
				}
			}
			
			.btn {
				padding-top: 12px;
				padding-right: 12px;
			}
		}
		.getgifts {
			width: 355px;
			height: 210px;
			margin: 0 10px 10px 10px;
			background-color: #fff;
			border-radius: 5px;
			
			.gift-title {
				margin: 5px;
				font-size: 12px;
				font-weight: 700;
			}
			.gift-bd {
				width: 347px;
				height: 192px;
				margin: 4px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				
				.gift-item {
					width: 80px;
					height: 80px;
					background-color: #F5F5F5;
					border-radius: 5px;
					overflow: hidden;
					
					.nthday {
						font-size: 12px;
						text-align: center;
						margin-top: 5px;
					}
					.gift-img {
						width: 30px;
						height: 30px;
						margin: 5px auto;
					}
					.jifen {
						font-size: 12px;
						text-align: center;
						color: #a9a9a9;
					}
				}
				.gift-item7 {
					width: 170px;
					height: 80px;
					background-color: #F5F5F5;
					border-radius: 5px;
					display: flex;
					justify-content: space-between;
					overflow: hidden;
					
					.item7-nthday {
						font-size: 12px;
						text-align: center;
						margin-top: 5px;
					}
					.item7-gift-img {
						width: 60px;
						height: 80px;
						margin: 5px auto;
						padding-top: 20px;
					}
					.item7-jifen {
						font-size: 12px;
						text-align: center;
						color: #a9a9a9;
						margin-top: 5px;
						margin-left: 10px;
					}
				}
			}
		}
		
		.dotask {
			width: 355px;
			height: 250px;
			margin: 0 10px 20px 10px;
			background-color: #fff;
			border-radius: 5px;
			overflow: hidden;
			
			.task-hd {
				margin: 8px;
				.task-txt {
					font-size: 12px;
					font-weight: 700;
				}
			}

			.task {
				display: flex;
				justify-content: space-between;
				margin: 20px 8px;
				.task-left {
					display: flex;
					
					.task-info {
						margin-left: 10px;
					}
					
					.task-title {
						font-size: 14px;
						font-weight: 700;
					}
					.task-desc {
						font-size: 10px;
						color: #a9a9a9;
					}
				}
				.task-btn {
					margin-right: 10px;
				}
			}
		
		}
	}
</style>

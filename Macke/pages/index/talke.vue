<template>
	<view class="">
		<view class="content" @click="backTo">
			<text class="iconfont icon-xiangzuo1 conText"></text>
			<text class="conText2">商品评价</text>
		</view>
		<view class="content_talke">
			<view class="talke_main">
				<view class="main_Mar">
					<view :class="['talke_title_list',{active:changeIndex === idx}]" v-for="(item,idx) in titleDatas.list" :key="item.title" @click="changeIndex=idx">
						<view class="item" @click="changeTitle(item.type,idx)">{{item.title}}({{item.total}})</view>
					</view>
				</view>
			</view>
			<view class="talke_main_text">
				<view class="text_list" v-for="item in (newData.length==0?talkeDatas.data:newData)" :key="item.cid">
					<view class="text_list_header">
						<view class="head_img">
							<image :src="item.uhead" mode="widthFix"></image>
						</view>
						<text class="lphone">{{item.uname}}</text>
						<text class="ltime">{{item.ctime}}</text>
					</view>
					<view class="text_list_main">
						{{item.content}}
					</view>
					<view v-if="item.img != ''" class="text_list_img" v-for="i in item.img" :key="i">
						<image :src="i.src" mode="widthFix"></image>
					</view>
					<view class="text_list_footer">
						规格:{{item.spec}}
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
				talkeDatas: [],
				titleDatas: [],
				twoId: 0,
				typeId: 0,
				pageIndex: 1,
				newData: [],
				changeIndex:0,
			}
		},
		onLoad(options) {
			console.log(options, '111111111', this.newData);
			this.getTalkeDatas(options)
		},
		methods: {
			async getTalkeDatas(twoId) {
				this.twoId = twoId;
				let result3 = await GetRequest(`/api/comment/load?twoId=${twoId.twoId}&type=0&page=1&count=10`);
				result3.msg === "Success" ? this.talkeDatas = result3.data : '';

				let result4 = await GetRequest(`/api/comment/total?twoId=${twoId.twoId}`);
				result4.msg === "Success" ? this.titleDatas = result4.data : '';
				console.log(result3, this.talkeDatas, this.titleDatas);
			},
			backTo() {
				uni.navigateBack({});
			},
			async changeTitle(typeId,idx) {
				if(this.changeIndex===idx)return false;
				this.typeId = typeId;
				this.pageIndex = 1;
				this.newData = [];
				let result3 = await GetRequest(
					`/api/comment/load?twoId=${this.twoId.twoId}&type=${typeId}&page=${this.pageIndex}&count=10`);
				result3.msg === "Success" ? this.newData = result3.data.data : '';
				console.log(this.newData, result3.data)
			}
		},
		async onReachBottom() {
			this.pageIndex++;
			let result3 = await GetRequest(
				`/api/comment/load?twoId=${this.twoId.twoId}&type=${this.typeId}&page=${this.pageIndex}&count=10`);
			result3.msg === "Success" ? this.newData = [...this.newData, ...result3.data.data] : '';
		}
	}
</script>

<style lang="less" scoped>
	.content {
		width: 100%;
		position: fixed;
		z-index: 1;
		background-color: #fff;
		height: 10vh;
		padding: 4vh 14rpx;
		display: flex;
		justify-content: left;
		align-items: center;

		.conText {
			font-size: 40rpx;
			width: 8vw;
		}

		.conText2 {
			width: 20vw;
			font-weight: 300;
		}
	}

	.content_talke {
		padding-top: 10vh;

		.talke_main {
			padding: 20rpx 20rpx;
			padding: 10rpx 0;
			background-color: #fdfdfd;
			margin-bottom: 34rpx;

			.main_Mar {
				margin: 0 20rpx;
				display: flex;
				flex-wrap: wrap;

				.talke_title_list {
					background-color: #ecf2fd;
					padding: 16rpx;
					margin-right: 24rpx;
					margin-bottom: 20rpx;
					border-radius: 10rpx;
					box-sizing: border-box;

					&.active {
						background-color: #ccf2fd;
						color: #00d6f9 ;
						font-weight: 600;
					}

					.item {
						font-size: 26rpx;
					}
				}
			}
		}

		.talke_main_text {
			margin: 0 20rpx;

			.text_list {
				display: flex;
				flex-direction: column;
				margin-bottom: 20rpx;
				padding: 14rpx;
				line-height: 60rpx;
				background-color: #fdfdfd;
				border-radius: 10rpx;

				.text_list_header {
					display: flex;

					.head_img {
						width: 80rpx;
						height: 80rpx;
						overflow: hidden;
						border-radius: 50%;

						image {
							width: 80rpx;
						}
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

				.text_list_img {
					margin-top: 10rpx;

					image {
						width: 300rpx;
					}
				}

				.text_list_footer {
					margin-top: 8rpx;
					font-size: 22rpx;
					color: #999;
				}
			}
		}
	}
</style>

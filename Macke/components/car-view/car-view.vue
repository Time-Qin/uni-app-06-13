<template>
	<view>
		<uni-popup ref="popup3" type="bottom">
			<view class="payContent">
				<view class="one">
					<view class="one_img">
						<image :src="contentDatas.img" mode="widthFix"></image>
					</view>
					<view class="one_title">
						<text class="nameC">{{ contentDatas.name }}</text>
						<text class="nameF">{{ contentDatas.french }}</text>
						<text class="price">￥
							<text class="price2">
								{{nowPrice || contentDatas.price}}
							</text>
						</text>
						<text class="sale">已售 {{ contentDatas.saleTotal }}</text>
					</view>
				</view>
				<view class="two">
					<text class="text2">规格</text>
					<view class="two_content">
						<view :class="['two_title',{active:changeIndex === idx}]"
							v-for="(item, idx) in contentDatas.list" :key="item.id"
							@click="(changeIndex = idx), (nowPrice = item.price)">
							{{ item.spec }}({{ item.weight }})
						</view>
						<view class="content_view">
							<view class="content_text" v-for="(item, idx) in contentDatas.list" :key="item.id">
								<view v-if="idx === changeIndex" class="text_main">
									<text class="iconfont icon-canju1 item" v-if="contentDatas.tableware">&nbsp;
										{{ item.tableware }}</text>
									<text v-if="contentDatas.candle" class="iconfont icon-lazhu item">&nbsp;
										{{ item.candle }}</text>
									<text class="iconfont icon-canju2 item" v-if="contentDatas.edible">&nbsp;
										{{ item.edible }}</text>
									<text class="iconfont icon-dangao item" v-if="contentDatas.size">&nbsp;
										{{ item.size }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="three">
					<text class="three_title">购买数量</text>
					<uni-number-box :min="0" :max="99" v-model="mynum"></uni-number-box>
				</view>
				<view class="four">
					<view class="left_button" @click="addCarts()">加入购物车</view>

					<view class="right_button right2">立即购买</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {PostRequest} from '@/common/js/requestHttp.js';
	export default {
		name: "car-view",
		props: ["contentDatas","getShopList"],
		data() {
			return {
				nowPrice: 0,
				changeIndex: 0,
				mynum:1,
			};
		},
		methods: {
			shopContent2() {
				this.$refs.popup3.open();
			},
			async addCarts() {
				this.contentDatas.id = parseInt(this.contentDatas.id)+this.changeIndex;
				let obj = {
					"cityId": "110",
					"goods": [{
						"id": `${this.contentDatas.id}`,
						"num": `${this.mynum}`,
						"blessing": "",
					}, ]
				};
				let result = await PostRequest('/api/cart/add',obj);
				console.log("3333333333",obj, this.contentDatas.list,result);
				let page = getCurrentPages();
				if(page[0].route==='pages/zhaojing/shopCar'){
					this.getShopList();
				};
				if(result.code===0){
					uni.showModal({
						content:"加入购物车成功"
					});
					this.$refs.popup3.close();
				}else{
					uni.showModal({
						content:`${this.contentDatas.name}已下架或售罄，无法加入购物车`
					});
					this.$refs.popup3.close();
				}
				
			}
		},
	};
</script>

<style lang="less" scoped>
	.payContent {
		background-color: #fff;
		padding: 40rpx;
		padding-bottom: 20rpx;
		border-radius: 20rpx;

		.one {
			display: flex;
			padding-bottom: 20rpx;
			border-bottom: 2rpx solid #ddd;

			.one_img {
				margin-right: 20rpx;

				image {
					width: 30vw;
				}
			}

			.one_title {
				display: flex;
				flex-direction: column;

				.nameC {
					font-weight: 600;
				}

				.nameF {
					font-size: 20rpx;
					color: #999;
				}

				.price {
					font-size: 24rpx;
					margin: 10rpx 0;

					.price2 {
						font-size: 32rpx;
					}
				}

				.sale {
					color: #999;
					font-size: 26rpx;
				}
			}
		}

		.two {
			padding: 12rpx 0;
			display: flex;
			flex-direction: column;

			.text2 {
				font-weight: 600;
				margin-bottom: 20rpx;
			}

			.two_content {
				display: flex;
				flex-wrap: wrap;

				.two_title {
					padding: 12rpx 40rpx;
					background-color: lightblue;
					font-size: 26rpx;
					font-weight: 300;
					border-radius: 10rpx;
					margin: 10rpx;

					&.active {
						background-color: #ccf2fd;
						color: #00d6f9;
					}
				}

				.content_view {
					background-color: rgba(240, 240, 240, 1);
					margin: 10rpx;
					padding: 20rpx;
					display: flex;
					flex-wrap: wrap;
					border-radius: 10rpx;

					.content_text {
						.item {
							padding-right: 20rpx;
							height: 20rpx;
							display: inline-block;
							font-size: 24rpx;
							margin: 18rpx;
						}
					}
				}
			}
		}

		.three {
			display: flex;
			justify-content: space-around;
			border-bottom: 2rpx solid #ddd;

			.three_title {
				margin-right: auto;
				font-weight: 600;
				margin-bottom: 40rpx;
			}

			/deep/.uni-numbox__value {
				background-color: lightblue !important;
			}
		}

		.four {
			margin-top: 40rpx;
			display: flex;

			.left_button,
			.right_button {
				flex: 1;
				background-color: rgba(250, 250, 90, 1);
				padding: 26rpx 80rpx;
				text-align: center;
				border-radius: 100rpx;
				font-size: 28rpx;
			}

			.right2 {
				margin-left: 16rpx;
				background-color: rgba(103, 200, 245, 0.5);
			}
		}
	}
</style>

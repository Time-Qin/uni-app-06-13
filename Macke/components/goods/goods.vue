<template>
	<view class="box">
		<view class="good" v-for="item in goods" :key="item.title">
			<image class="image" :src="item.img" mode="widthFix" @click="goDetail(item.id,item.twoId)"></image>
			<view class="content">
				<view class="name">{{item.name}}</view>
				<view class="french">{{item.french}}</view>
				<view class="buy">
					<view class="price">¥{{item.price}}</view>
					<uni-icons type="cart" @click="addItem(item)" size="24" class="uni-icons"></uni-icons>
				</view>
			</view>
		</view>
	</view>
	<!-- 底部弹出购物车 -->
	<carts :goodsDetail="goodsDetail" :list="itemList" ref="popup1"></carts>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	export default {
		name: "goods",
		props: ['goods'],
		data() {
			return {
				goodsDetail: [],
				itemList: [],
			}
		},
		methods: {
			goDetail(id, twoid) {
				uni.navigateTo({
					url: '/pages/lanmin_detail/lanmin_detail?id=' + id + '&twoId=' + twoid
				})
			},
			async addItem(item) {
				let result = await GetRequest("/api/goods/detail?id=" + item.id);
				result.code === 0 ? this.goodsDetail = result.data : ''
				this.itemList = this.goodsDetail.list[0];
				this.$refs.popup1.change("bottom");
			},
		},
	}
</script>
<style scoped lang="less">
	.box {
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		width: 100%;
		padding: 0 10px 10px;

		.good {
			width: 50%;
			background-color: white;
			box-sizing: border-box;
			padding: 10rpx;

			.image {
				width: 100%;
			}

			.content {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;

				.name {
					letter-spacing: 2px;
				}

				.french {
					color: #999;
					font-size: 8px;
				}

				.buy {
					display: flex;
					align-items: center;
					width: 100%;
					justify-content: space-between;
					margin-top: 6px;

					.price {
						font-size: 12px;
					}

					.uni-icons {
						text-align: right;
						background-color: lightcyan;
						border-radius: 2px;

						/deep/ .uni-icons {
							color: #888 !important;
						}
					}
				}
			}
		}
	}
</style>

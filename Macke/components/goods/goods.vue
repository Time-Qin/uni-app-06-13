<template>
	<view class="box">
		<view class="good" v-for="item in goods" :key="item.title">
			<image v-if="item" class="image" :src="item.img" mode="widthFix" @click="goDetail(item.id,item.twoId)"></image>
			<view class="content">
				<view class="name">{{item.name}}</view>
				<view class="french">{{item.french}}</view>
				<view class="buy">
					<view class="price">¥{{item.price}}</view>
					<uni-icons type="cart" @click="addItem(item)" size="24" class="uni-icons"></uni-icons>
					<!-- <uni-icons type="cart" size="24" class="uni-icons" @click="getDatasCar(item.id)"></uni-icons> -->
				</view>
				<!-- <car-view ref="Car" :contentDatas="contentDatas"></car-view> -->
			</view>
		</view>
		<carts :goodsDetail="goodsDetail" :list="list" :itemList="itemList" ref="popup1" @changItem='changItem'></carts>
	</view>
	<!-- 底部弹出购物车 -->
	<!-- <carts :goodsDetail="goodsDetail" :list="itemList" ref="popup1"></carts> -->
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
				list: [],
				itemList:{}
			}
		},
		methods: {
			goDetail(id, twoid) {
				// uni.navigateTo({
				// 	url: '/pages/index/good_details?id=' + id + '&twoId=' + twoid
				// })
				uni.navigateTo({
					url: '/pages/lanmin_detail/lanmin_detail?id=' + id + '&twoId=' + twoid
				})
			},
			async addItem(item) {
				let result = await GetRequest("/api/goods/detail?id=" + item.id);
				result.code === 0 ? this.goodsDetail = result.data : ''
				this.list = this.goodsDetail.list;
				this.itemList=this.list[0];
				this.$refs.popup1.change("bottom");
				// console.log(this.itemList);
			},
			changItem(idx){
				this.itemList=this.list[idx];
			}
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

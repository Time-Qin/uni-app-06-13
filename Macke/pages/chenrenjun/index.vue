<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				美味蛋糕
			</view>
		</header-nav>
		<!-- tapbar切换 -->
		<view class="c-tapbar">
			<scroll-view class="tap-list" scroll-x="true" v-if=flag enable-flex="true">
				<view :class="['content',{active:activeKey == item.tid}]" v-for="item in mcakeScene"
					:key="item.tname" @click="getMcakeGroup(item.tid)">{{item.tname}}</view>
			</scroll-view>
		</view>
		<!-- 商品列表 -->
		<view class="" style="margin-top: 100rpx;">
			<view class="c-list" v-for="item in datalist" :key="item.id" >
				<view v-if="item">
					<uni-list-item>
						<template v-slot:header>
							<view class="c-header" @click="goDetail(item.id)">
								<image class="slot-image" :src="item.img" mode="widthFix"></image>
							</view>
						</template>
						<template v-slot:body>
							<view class="slot-body">
								<view class="slot-title">{{item.name}}</view>
								<view class="slot-french">{{item.french}}</view>
								<view class="slot-price">￥{{item.price}}</view>
							</view>
						</template>
						<template v-slot:footer>
							<view class="c-footer">
								<view class="slot-cart iconfont icon-gouwuche" @click="getDatasCar(item.id)"></view>
							</view>
							
						</template>
					</uni-list-item>
					<!-- 购物车组件 -->
					<car-view ref="Car" :contentDatas="contentDatas"></car-view>
				</view>
			</view>
		</view>
		
		<uni-load-more v-if="hasMore" status="loading"></uni-load-more>
		<uni-load-more v-else status="noMore"></uni-load-more>
	</view>
</template>

<script>
	import {
		GetRequest
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				datalist: [],
				mcakeScene: {},
				flag: true,
				activeKey: 0,
				hasMore: true,
				page: 1,
				fid: 0,
				one:1,
				scrollTop:0,
				contentDatas:[],
			}
		},
		created() {
			this.initMcake();
			this.getMcakes();
		},
		methods: {
			async initMcake() {
				let result = await GetRequest("/api/goods/category");
				result.code === 0 ? this.mcakeScene = result.data[0].scene : '';
				this.mcakeScene.unshift({
					"bid": "1",
					"tgid": "3",
					"tid": "0",
					"tname": "全部"
				})
			},
			async getMcakes() {
				let result = await GetRequest(`/api/goods/load?bid=1&tid=0&fid=${this.fid}&page=${this.page}&count=10`)
				if (result.data.data.length < 10) {
					this.hasMore = false
				}
				result.code == 0 ? this.datalist = [...this.datalist, ...result.data.data] : '';
			},
			async getMcakeGroup(fid) {
				this.activeKey = fid;
				this.fid = fid
				this.hasMore = true
				this.page = 1
				let result = await GetRequest(`/api/goods/load?bid=1&tid=0&fid=${fid}&page=${this.page}&count=10`);
				result.code === 0 ? this.datalist = result.data.data : ''
			},
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/index/good_details?id=${id}`
				})
			},
			backTo(){
				uni.navigateBack({});
			},
			onPageScroll(Top) {
				this.scrollTop = 200;
			},
			// 购物车组件方法
			async getDatasCar(sku) {
				let result = await GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
				result.msg === "Success" ? this.contentDatas = result.data : '';
				this.$refs.Car[0].shopContent2();
			},
		},
		// 上拉加载
		onReachBottom() {
			if (this.hasMore) {
				this.page++;
				this.getMcakes()
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.datalist = [];
			this.page = 1;
			this.hasMore = true;
			this.getMcakes().then(() => {
				uni.stopPullDownRefresh();
			})
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: pink;
		
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
				background-color: pink;
			}
		}
		

		.c-tapbar {
			width: 100%;
			position: fixed;
			z-index: 999999999;
			.tap-list {
				display: flex;
				white-space: nowrap;
				height: 64rpx;
				background-color: #ffaaae;
				padding-bottom: 10px;

				.content {
					font-size: 14px;
					height: 40rpx;
					color: white;
					margin: 10px 10px;
					padding: 2rpx 10rpx;
					text-align: center;
					line-height: 40rpx;
					border-radius: 8px;
				}

				.active {
					font-size: 18px;
				}
			}
		}
	}

	.c-list {
		margin-bottom: 14px;
		padding: 0 10px;
		.c-header {
			.slot-image {
				width: 110px;
				height: 110px;
				margin-right: 10px;
			}
		}


		.slot-body {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			padding: 6px 0;

			.slot-title {
				font-size: 16px;
			}

			.slot-french {
				flex: 1;
				font-size: 12px;
				line-height: 60px;
			}

			.slot-price {
				font-size: 14px;
			}
		}

		.c-footer {
			position: absolute;

			.slot-cart {
				position: relative;
				right: -310px;
				top: 96px;
				font-size: 20px;
				background-color: #f0f0f0;
			}
		}

	}
</style>

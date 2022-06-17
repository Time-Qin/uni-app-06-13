<template>
	<view class="container">
		<!-- tapbar切换 -->
		<view class="c-tapbar">
			<scroll-view class="tap-list" scroll-x="true" v-if=flag enable-flex="true">
				<view :class="['content',{active:activeKey === item.tid}]" v-for="(item,index) in mcakeScene" :key="item.tid"
					@click="getMcakeGroup(item.tid)">{{item.tname}}</view>
			</scroll-view>
		</view>
		<!-- 商品列表 -->
		<view class="c-list" v-for="item in datalist" :key="item.id" @click="goDetail(item.id)">
			<view>
				<uni-list-item>
					<template v-slot:header>
						<view class="c-header">
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
							<view class="slot-cart iconfont icon-gouwuche"></view>
						</view>
					</template>
				</uni-list-item>
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
				goods: {},
				list: {},
				flag: true,
				activeKey: 0,
				active: 0,
				hasMore: true,
				page:1,
				fid:192

			}
		},
		created() {
			// this.getMcakes()
			this.initMcake()
			this.getMcakeGroup()
		},
		methods: {
			async initMcake() {
				let result = await GetRequest("/api/goods/category");
				result.code === 0 ? this.mcakeScene = result.data[0].scene : '';
				// console.log(this.mcakeScene);
				this.mcakeScene.unshift({
					"bid": "1",
					"tgid": "3",
					"tid": "192",
					"tname": "全部"
				})

				this.getMcakes(this.mcakeScene.bid,this.mcakeScene.tid)
				// this.getMcakeGroup()
				// console.log(this.mcakeScene,"1111111111111111111");
			},
			async getMcakes(bid,tid) {
				let result = await GetRequest(`/api/goods/load?bid=${bid}&page=${this.page}&tid=${tid}&count=10`);
				// console.log(result,tid,"22222222222");
				if (result.data.data.length < 10) {
					this.hasMore = false
				}
				result.code == 0 ? this.datalist = [...this.datalist,...result.data.data] : '';
				console.log(this.datalist,this.page,tid,"333333333");
			},
			async getMcakeGroup(fid) {
				this.activeKey = fid;
				if (fid == 192) {
					this.getMcakes();
				} else {
					let result = await GetRequest(`/api/goods/load?bid=1&fid=${fid}&page=${this.page}&count=10`);
					console.log(result, this.page,fid,"4444444");
					result.code === 0 ? this.datalist = result.data.data : ''
					// console.log(this.datalist);

				}
			},
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/chenrenjun/mcakedetails/mcakedetails?id=${id}`
				})
				// console.log(id);
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

		.c-tapbar {
			.tap-list {
				display: flex;
				white-space: nowrap;
				height: 64rpx;
				background-color: pink;
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

<template>
	<view class="container">
		<!-- 头部切换 -->
		<view class="tabBar">
			<view class="search" @click="onClick">
				<uni-search-bar :focus="true" placeholder="请输入商品名称" cancelButton="none">
				</uni-search-bar>
			</view>
			<view class="group">
				<view :class="['item',{active:active===index}]" v-for="(item,index) in currentGoods" :key="index"
					@click="getGoods(index,item.bid)">{{item.bname}}
				</view>
			</view>
			<scroll-view class="list" scroll-x="true" v-if=flag enable-flex="true">
				<view :class="['content',{active:activeKey===index}]" v-for="(item,index) in list" :key="item.id"
					@click="getGoodsGroup(index,item.tid)">{{item.tname}}</view>
			</scroll-view>
		</view>
		<view :class="flag? 'large-pad':'small-pad'"></view>
		<!-- 商品列表 -->
		<goods :goods='goods'></goods>
		<view class="bottom">——没有更多了——</view>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	import {
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				currentGoods: [],
				goods: [],
				list: [],
				active: 0,
				flag: true,
				activeKey: 0,
				isFocus: false
			}
		},
		created() {
			this.initGoods();
			this.getGoods(0, 1);
		},
		methods: {
			...mapMutations(['addCarts']),
			async initGoods() {
				let result = await GetRequest("/api/goods/category");
				result.code === 0 ? this.currentGoods = result.data : '';
				this.currentGoods[0].list.unshift({
					"bid": "1",
					"tgid": "1",
					"tid": "0",
					"tname": "全部"
				})
				this.list = this.currentGoods[0].list;
			},
			async getGoods(idx, bid) {
				this.active = idx;
				let result = await GetRequest("/api/goods/load?bid=" + bid);
				result.code === 0 ? this.goods = result.data.data : ''
				if (idx !== 0) {
					this.flag = false;
				} else {
					this.flag = true;
					let result1 = await GetRequest("/api/goods/load?bid=" + bid + "&page=2");
					result1.code === 0 ? this.goods = [...this.goods, ...result1.data.data] : ''
				}
			},
			async getGoodsGroup(idx, fid) {
				this.activeKey = idx;
				if (fid == 0) {
					this.getGoods(0, 1);
				} else {
					let result = await GetRequest("/api/goods/load?bid=1&fid=" + fid);
					console.log(result, fid);
					result.code === 0 ? this.goods = result.data.data : ''
				}
			},
			onClick() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		},
	}
</script>
<style scoped lang="less">
	.container {
		background-color: white;

		.large-pad {
			height: 142px;
		}

		.small-pad {
			height: 110px;
		}

		.tabBar {
			position: fixed;
			width: 100%;

			.search {
				width: 100%;
				height: 120rpx;
				background: #eee;
				padding-top: 30rpx;

				/deep/ .uni-searchbar {
					.uni-searchbar__box {
						height: 32px !important;
						flex: 0 0 500rpx !important;
						border-radius: 20rpx !important;
					}
				}
			}

			.group {
				height: 80rpx;
				background-color: white;
				display: flex;
				text-align: center;
				align-items: center;

				.item {
					flex: 1;
					color: #888;
					border-right: 1px solid #eee;
				}

				.active {
					font-weight: 700;
					color: cornflowerblue;
				}

				&:last-child {
					border: none;
				}
			}

			.list {
				display: flex;
				white-space: nowrap;
				height: 64rpx;
				background-color: white;
				padding-bottom: 10px;

				.content {
					height: 40rpx;
					margin: 10px 5px;
					padding: 2rpx 10rpx;
					text-align: center;
					line-height: 40rpx;
					border-radius: 8px;
					font-size: 12px;
					background-color: lightcyan;
				}

				.active {
					background-color: lightblue;
				}
			}
		}

	
		.bottom {
			text-align: center;
			color: #999;
			font-size: 12px;
			padding-bottom: 20px;
		}
	}
</style>

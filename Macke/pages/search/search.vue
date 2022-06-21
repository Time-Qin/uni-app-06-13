<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				搜索商品
			</view>
		</header-nav>
		<view v-show="!show">
			<!-- 搜索输入 -->
			<view class="search">
				<view class="input">
					<uni-search-bar @confirm="search" :focus="true" v-model="keywords"
						placeholder="请输入商品名称" cancelButton="none">
					</uni-search-bar>
				</view>
				<view class="btn" @click="search">搜索</view>
			</view>
			<view class="search-result" v-if="keywords">
				<text class="search-result-text">搜索"{{ keywords }}"</text>
			</view>
			<!-- 热词 -->
			<view class="hot">
				<view class="tit">大家正在搜</view>
				<view class="content">
					<view class="mater" v-for="item in hot" :key="item" @click="chooseHot(item)">
						{{item}}
					</view>
				</view>
			</view>
			<!-- 搜索历史 -->
			<view v-if="history && history.length>0">
				<view class="history">
					<view class="head">
						<view class="left"> 搜索历史 </view>
						<view class="right">
							<text class="iconfont1" @click="toggle('center')">&#xe666;</text>
						</view>
					</view>
					<view class="content">
						<view class="mater" v-for="item in history" :key="item" @click="chooseHot(item)">
							{{item}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 进入搜索页面 -->
		<view v-show="show">
			<view class="search" @click="onClick">
				<view class="input input1">
					<uni-search-bar @confirm="search" :focus="true" v-model="keywords" @change="change"
						placeholder="请输入商品名称" cancelButton="none">
					</uni-search-bar>
				</view>
			</view>
			<goods :goods='goods'></goods>
		</view>
		<!-- 提示信息弹框 -->
		<uni-popup ref="alertDialog">
			<uni-popup-dialog cancelText="取消" confirmText="确认" title="温馨提示" content="确认清空搜索历史吗"
				@confirm="dialogConfirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	import {
		mapMutations,
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				keywords: '',
				hot: [],
				goods: [],
				show: false,
				one:1,
				scrollTop:0,
			}
		},
		methods: {
			...mapMutations(["addHistory","clearHistry"]),
			async getHot(item) {
				let result = await GetRequest("/api/goods/hot");
				result.code === 0 ? this.hot = result.data : ''
			},
			async getGoods(keywords) {
				let result = await GetRequest("/api/goods/load?search=" + keywords);
				result.code === 0 ? this.goods = result.data.data : ''
			},
			chooseHot(value) {
				this.keywords = value;
				this.getGoods(this.keywords)
				this.show = true;
				this.addHistory({
					history: this.keywords
				});
			},
			backTo(){
				uni.navigateBack({});
			},
			search() {
				this.getGoods(this.keywords);
				this.show = true;
				this.addHistory({
					history: this.keywords
				});
			},
			onClick() {
				this.show = false;
			},
			toggle(type) {
				this.$refs.alertDialog.open(type)
			},
			dialogConfirm() {
				this.clearHistry();
			},
		},
		created() {
			this.getHot();
		},
		computed: {
			...mapState(['history'])
		},
		onPageScroll() {
			this.scrollTop = 200;
		}
	}
</script>
<style lang="less" scoped >
	text,view{
		box-sizing: content-box;
	}
	.search-result {
		padding: 0 20px;
		font-size: 12px;
	}
	/deep/header-nav{
		display: flex;
		.slot-left{
			margin-left: 20rpx;
			flex: 1;
			color: black;
			.icon-xiangzuo1{
				font-size: 40rpx;
				margin-right: 20rpx;
			}
		}
	}

	.search {
		width: 100%;
		display: flex;
		padding: 0 10px;
		overflow: hidden;

		.input {
			width: 650rpx;

			&.input1 {
				width: 700rpx;

				/deep/ .uni-searchbar {
					.uni-searchbar__box {
						flex: 1 !important;
					}
				}
			}

			/deep/ .uni-searchbar {
				.uni-searchbar__box {
					height: 32px !important;
					flex: 0 0 600rpx !important;
					border-radius: 20rpx !important;
					background: #eee !important;
				}
			}
		}

		.btn {
			width: 100rpx;
			height: 104rpx;
			line-height: 104rpx;
			font-size: 14px;
			color: #888
		}
	}

	.hot,
	.history {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;

		.tit {
			font-size: 14px;
			font-weight: 700;
			padding: 10px;
		}

		.head {
			display: flex;
			padding: 10px;
			justify-content: space-between;
		}

		.content {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			padding: 10px 0;
			justify-content: flex-start;
			text,view{
				box-sizing: content-box;
			}

			.mater {
				background-color: #eee;
				height: 16px;
				line-height: 16px;
				margin-left: 10px;
				padding: 8px;
				border-radius: 5px;
				font-size: 12px;
				margin-bottom: 10rpx;
			}
		}
	}
</style>

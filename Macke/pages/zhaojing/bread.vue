<template>
	<view class="container">
		<view class="item" v-for="item in goodlist" :key="item.id">
			<van-card :desc="item.french" :title="item.name" :thumb="item.img">
				<view class="list" slot='price'>
					<view>
						<text>¥&nbsp;</text>
						<text class="price">{{item.price}}</text>
					</view>
					<view>
						<text class="iconfont icon-gouwuche"></text>
					</view>
				</view>
			</van-card>
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
				goodlist: [],
				goodInfo: [],
				page: 1,
				canLoad: true,
			}
		},
		created() {
			this.getGoodsPage1(this.page);
		},
		methods: {
			async getGoodsPage1() {
				let that = this;
				let result = await GetRequest(
					`/api/goods/load?cityId=110&bid=11&tid=0&fid=0&page=${that.page}&count=10`);
				if (result.data) {
					that.goodlist = that.goodlist.concat(result.data.data);
					if (result.data.data?.length === 10) {
						that.page += 1
					} else {
						that.canLoad = false;
					}
				} else {
					that.canLoad = false;
				}

			},
		},
		//上拉加载
		onReachBottom() {
			if (this.canLoad) this.getGoodsPage1()
		},
		onPullDownRefresh() {
			console.log('refresh');
			this.page=1;
			this.canLoad=true;
			this.getGoodsPage1()
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: #cccccc;

		.item {
			margin-bottom: 10px;
			padding: 0 10px;

			.list {
				display: flex;
				justify-content: space-between;
			}

			.price {
				font-size: 18px;
			}

			.iconfont {
				font-size: 20px;
				width: 15px;
				height: 15px;
				background-color: #cccccc;
			}
		}
	}
</style>

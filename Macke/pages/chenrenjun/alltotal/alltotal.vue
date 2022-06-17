<template>
	<view class="container">
		<view class="c-label">
			<view class="[c-list" v-for="item in total.list" :key="item.type"
				@click="getComment(twoId,item.type)">
				<view :class="['c-tit',{active:activeKey === item.type }]">{{item.title}}({{item.total}})</view>
			</view>
		</view>

		<view class="commentinfo">
			<view class="comment_list" v-for="item in comment.data" :key="item.cid">
				<view class="comment_list_header">
					<image :src="item.uhead" mode="widthFix"></image>
					<text class="c-phone">{{item.uname}}</text>
					<text class="c-time">{{item.ctime}}</text>
				</view>
				<view class="comment_list_main">
					<view class="list-main">{{item.content}}</view>
				</view>
				<view class="comment_img">
					<view class="comment_list_img" v-for="i in item.img" :key="i">
						<image :src="i.src" mode="widthFix"></image>
					</view>
				</view>
				<view class="comment_list_footer">
					规格:<text class="list_footer">{{item.spec}}</text>
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
				total: {},
				comment: [],
				twoId:"",
				activeKey: 0,
				active: 0,
				page: 1,
				type:0,
				hasMore: true
			}
		},
		onLoad(options) {
			console.log(options);
			this.getTotal(options.twoId)
			this.getComment(options.twoId)
		},
		methods: {
			async getTotal(twoId) {
				let result = await GetRequest(`/api/comment/total?twoId=${twoId}`);
				// console.log(result.data.list[0]);
				result.code == 0 ? this.total = result.data : '';
				// console.log(this.total);
				this.twoId = twoId
				// console.log(this.twoId);
			},
			async getComment(twoId,type) {
				console.log(this.type);
				this.activeKey = type;
				let result = await GetRequest(`/api/comment/load?twoId=${this.twoId||twoId}&type=${this.type}&page=${this.page}&count=10`);
				console.log(result,this.page,type);
				if (result.data.length < 10) {
					this.hasMore = false
				}
				result.code == 0 ? this.comment = result.data : '';
				console.log(this.comment);
			},
			// async goTotal(twoId, type) {
			// 	// console.log(twoId,type);
			// 	this.activeKey = type;
			// 	let result = await GetRequest(`/api/comment/load?twoId=${twoId}&type=${type}&page=1&count=10`);
			// 	// console.log(result, type, twoId, "11111111");
			// 	result.code == 0 ? this.comment = result.data : '';
			// },
		},
		// 上拉加载
		onReachBottom() {
			if (this.hasMore) {
				this.page++;
				this.getComment()
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.comment = [];
			this.page = 1;
			this.hasMore = true;
			this.getComment().then(() => {
				uni.stopPullDownRefresh();
			})
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: #fafcfd;
		.c-label {
			display: flex;
			flex-wrap: wrap;
			padding: 15px 0 0 20px;
			background-color: white;

			.c-list {
				margin: 0 15px 10px 0;

				.c-tit {
					border-radius: 8px;
					padding: 7px 12px;
					background-color: #f0f6fa;
					font-size: 12px;

					&.active {
						background-color: #d3eafa;
					}
				}
			}
		}

		.commentinfo {
			padding: 0 20px;
			.comment_list {
				margin: 20px 0;
				padding-bottom: 16px;
				background-color: #ffffff;

				.comment_list_header {
					display: flex;
					padding-left: 20px;
					padding-top: 16px;

					image {
						width: 38px;
						height: 38px;
						border-radius: 50%;
					}

					.c-phone {
						font-size: 12px;
						margin-left: 10px;
					}

					.c-time {
						font-size: 12px;
						margin-top: 5px;
						margin-left: 60px;
						color: #888;
					}
				}

				.comment_list_main {
					margin: 10px 0;
					padding: 0 20px;

					.list-main {
						font-size: 14px;
						border-radius: 10px;
						background-color: #f5f5f6;
						padding: 8px 10px;
					}
				}

				.comment_list_footer {
					padding: 0 20px;
					font-size: 12px;
					color: #999999;
					margin: 10px 0 6px 0;

					.list_footer {
						margin-left: 6px;
					}
				}

				.comment_img {
					display: flex;
					// flex-wrap: wrap;

					.comment_list_img {
						padding-left: 20px;
						width: 130px;


						image {
							width: 100%;
							// height: auto;
						}
					}
				}
			}
		}
	}
</style>

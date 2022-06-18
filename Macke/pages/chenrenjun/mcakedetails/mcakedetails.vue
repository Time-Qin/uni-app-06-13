<template>
	<view class="container">
		<swiper class="swiper" indicator-dots circular autoplay>
			<swiper-item v-for="(item ,index) in banner" :key="item.mainId">
				<view class="swiper-item">
					<image @click="previewImg(item)" :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="title">
			<view class="left">
				<view class="c-title">{{datalist.name}}</view>
				<view class="c-french">{{datalist.french}}</view>
			</view>
			<!-- <button open-type="share" class="right">分享</button> -->
			<view class="priceGroup">
				<text class="c-price">¥{{datalist.price}}/</text>
				<text class="c-weight">{{datalist.spec}}({{datalist.weight}})</text>
			</view>
		</view>

		<view class="detailbox">
			<view class="brief">{{datalist.brief}}</view>
			<view class="frenchBrief">{{datalist.frenchBrief}}</view>
		</view>

		<view class="materBox">
			<view class="mater" v-for="item in datalist.mater" :key="item.id">
				<view class="c-img">
					<image :src='item.img' mode="widthFix"></image>
				</view>
				<view class="c-title">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>

		<view class="basicBox">
			<view class="basic" v-for="item in datalist.basic" :key="item.id">
				<view class="basic-title">{{item.title}}</view>
				<view class="basic-value" v-if="item.value === '1' || item.value == '2' || item.value == '3'">
					<text class="slot-cart iconfont icon-meishi-bangbangtang" v-for="bbt in parseInt(item.value)"
						:key="bbt">
					</text>
				</view>
				<view v-else class="basic-value">{{item.value}}</view>
			</view>
		</view>

		<view class="peisong">
			<view class="yixuan">
				<text class="c-title">已选</text>
				<view class="c-detail">
					<text class="iconfont icon-gouwuche content_wei">&nbsp;
						<text class="content-title">{{datalist.spec}}({{datalist.weight}})</text>
					</text>
					<view class="yixuan-title">
						<text class="iconfont icon-canju1 item">&nbsp;
							<text class="item-title">{{datalist.tableware}}</text>
						</text>
						<text class="iconfont icon-lazhu item">&nbsp;
							<text class="item-title">{{datalist.candle}}</text>
						</text>
						<text class="iconfont icon-canju2 item">&nbsp;
							<text class="item-title">{{datalist.edible}}</text>
						</text>
						<text class="iconfont icon-dangao item">&nbsp;
							<text class="item-title">{{datalist.size}}</text>
						</text>
					</view>
				</view>

				<view class="dotsList dot" @click="open">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
				<uni-popup ref="popup" type="bottom">
					<!-- <view class="c-pop">
						<view class="c-header">
							<image :src="datalist.img" mode="widthFix"></image>
							<view class="c-header-main">
								<view class="slot-title">{{datalist.name}}</view>
								<view class="slot-french">{{datalist.french}}</view>
								<view class="slot-price"> <text class="slot-price-icon">￥</text> {{datalist.price}}
								</view>
								<view class="slot-saleTotal">已售{{datalist.saleTotal}}</view>
							</view>
							<uni-icons type="closeempty" size="20" color="#909399" @click="close"></uni-icons>
						</view>
						<view class="c-body">
							<view class="c-txt">规格</view>
							<view class="c-label">
								<view class="[c-list" v-for="item in list" :key="item.id" @click="gospec(item.id)">
									<view :class="['c-tit',{active:activeKey === item.id }]">
										{{item.spec}}({{item.weight}})
									</view>
								</view>
							</view>
							<view class="yixuan-title" v-for="item in list" :key="item.id">
								<text class="iconfont icon-canju1 item">&nbsp;
									<text class="item-title">{{item.tableware}}</text>
								</text>
								<text class="iconfont icon-lazhu item">&nbsp;
									<text class="item-title">{{item.candle}}</text>
								</text>
								<text class="iconfont icon-canju2 item">&nbsp;
									<text class="item-title">{{item.edible}}</text>
								</text>
								<text class="iconfont icon-dangao item">&nbsp;
									<text class="item-title">{{item.size}}</text>
								</text>
							</view>
						</view>
					</view> -->
				</uni-popup>
			</view>

			<view class="songzhi">
				<text class="c-title">送至</text>
				<view class="addr-text">
					<text class="iconfont icon-yunshupeisong content_wei"> 请选择收货地址</text><br />
					<text class="iconfont icon-shijian content_wei"> 最早{{datalist.sendStartDate}}
						{{datalist.sendStartTime}}配送</text>
				</view>
				<view class="dotsList dot">
					<view class="dots"></view>
					<view class="dots"></view>
					<view class="dots"></view>
				</view>
			</view>

			<view class="fuwu">
				<text class="c-title">服务</text>
				<view class="fuwu-text">
					<text class="iconfont icon-duigouzhong icon-text"></text>&nbsp;
					<view class="content_wei"> 提供开票及售后服务</view>
				</view>
			</view>
		</view>

		<view class="c-comment" v-if="total.total != 0">
			<view class="c-header">
				<text class="c-title">评价</text>
				<text class="c-total">{{total.total}}</text>
				<text class="c-icon" @click="goAllTotal(datalist.twoId)">查看全部</text>&nbsp;
				<uni-icons type="forward" size="16" color="#888"></uni-icons>
			</view>

			<view class="c-label">
				<view class="[c-list" v-for="item in total.list" :key="item.type"
					@click="goTotal(datalist.twoId,item.type)">
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
					<view class="comment_list_footer">
						规格:<text class="list_footer">{{item.spec}}</text>
					</view>
					<view class="comment_img">
						<view class="comment_list_img" v-for="i in item.img" :key="i">
							<image :src="i.src" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="gooddetail">
			<view class="c-good">——— 商品详情 ———</view>

			<view class="goodimg">
				<image :src="datalist.wapDesc" mode="widthFix"></image>
			</view>
			<view class="retroactive">
				<view class="c-txt">退改说明：上海、苏州、杭州地区距配送时间12小时及以上的订单可修改、取消或退订，如不满足12小时的订单不再支持修改、取消或退订</view>
			</view>
			<view class="c-good">——— 已经到最底了 ———</view>
		</view>

		<view class="bottom_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<car-view ref="popup4" :contentDatas="contentDatas"></car-view>

		<view v-if="goTop" class="gotop" @click="toTop">
			<text class="iconfont icon-shang c-icon"></text>
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
				datalist: {},
				banner: {},
				comment: {},
				total: {},
				list: {},
				activeKey: 0,
				active: 0,
				goTop: false,
				options: [{
					icon: 'home',
					text: '首页',
				}, {
					icon: 'cart',
					text: '购物车',
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#fff566',
						color: '#333'
					},
					{
						text: '立即购买',
						backgroundColor: '#bae7ff',
						color: '#333'
					}
				]
			}
		},
		created() {

		},
		onLoad(options) {
			this.getDetails(options.id)
		},
		methods: {
			async getDetails(id) {
				let result = await GetRequest("/api/goods/detail?id=" + id);
				result.code == 0 ? this.datalist = result.data : '';
				this.banner = this.datalist.banner
				this.list = this.datalist.list
				this.getComment(this.datalist.twoId)
				this.getTotal(this.datalist.twoId)
			},
			async getTotal(twoId) {
				let result = await GetRequest(`/api/comment/total?twoId=${twoId}`);
				result.code == 0 ? this.total = result.data : '';
			},
			async getComment(twoId) {
				let result = await GetRequest(`/api/comment/load?twoId=${twoId}&type=0&page=1&count=3`);
				result.code == 0 ? this.comment = result.data : '';
			},
			async goTotal(twoId, type) {
				this.activeKey = type;
				let result = await GetRequest(`/api/comment/load?twoId=${twoId}&type=${type}&page=1&count=3`);
				result.code == 0 ? this.comment = result.data : '';
			},
			goAllTotal(twoId) {
				uni.navigateTo({
					url: `/pages/chenrenjun/alltotal/alltotal?twoId=${twoId}`
				})
			},
			previewImg(current) {
				var urls = this.banner.map(item => item)
				uni.previewImage({
					current,
					urls
				})
			},
			open() {
				this.$refs.popup.open('tottom')
			},
			close() {
				this.$refs.popup.close()
			},
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
		},
		onPageScroll(e) {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					if (e.scrollTop > res.windowHeight) {
						that.goTop = true;
					} else {
						that.goTop = false;
					}
					return res.windowHeight;
				}
			});
		},
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: white;

		.swiper {
			height: 560rpx;
			background-color: aliceblue;
			position: relative;

			.swiper-item {
				image {
					width: 100%;
					position: absolute;
					top: -50px;
				}
			}
		}

		.title {
			position: relative;
			text-align: center;
			margin-top: 18px;

			.left {
				.c-title {
					font-size: 20px;
				}

				.c-french {
					font-size: 12px;
					color: #888;
				}
			}

			.right {
				position: absolute;
				width: 40px;
				top: 0;
				right: 0;
				color: green;
				font-size: 14px;
				padding: 0;
			}

			.priceGroup {
				margin: 30px 0;
				font-size: 14px;
				color: #888;
			}
		}

		.detailbox {
			background-color: #f0f6fa;
			margin: 0 20px 10px 20px;
			border-radius: 5px;

			.brief {
				padding: 12px 20px;
				font-size: 13px;
				text-align: center;
			}

			.frenchBrief {
				padding: 0 16px 20px 16px;
				font-size: 10px;
				text-align: center;
			}
		}

		.materBox {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 0 20px;

			.mater {
				display: flex;
				align-items: center;
				padding: 4px 7px;
				margin: 0 6px 10px 0;
				background-color: #f0f6fa;
				border-radius: 10px;

				.c-img {
					width: 20px;
					height: 20px;

					image {
						width: 100%;
					}
				}

				.c-title {
					font-size: 10px;
					margin-left: 5px;
				}
			}
		}

		.basicBox {
			.basic {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				font-size: 12px;
				margin: 14px;

				.basic-title {
					flex: 1;
					text-align: right;
					margin-right: 20px;
				}

				.basic-value {
					flex: 1;
				}
			}
		}

		.peisong {
			margin: 0 10px;
			border-radius: 5px;
			display: flex;
			flex-direction: column;

			.yixuan {
				display: flex;
				margin-top: 10px;

				.c-title {
					width: 50px;
					margin-left: 20px;
				}

				.c-detail {
					width: 60vw;
					border-bottom: 1px solid #ddd;

					.content_wei {
						font-size: 16px;

						.content-title {
							font-size: 13px;
						}
					}

					.yixuan-title {
						display: flex;
						flex-wrap: wrap;
						margin-top: 16px;
						margin-bottom: 10px;

						.item {
							width: 50%;
							font-size: 16px;
							margin-bottom: 5px;

							.item-title {
								font-size: 13px;
							}
						}
					}
				}
			}

			.songzhi {
				display: flex;
				margin-top: 10px;

				.c-title {
					width: 50px;
					margin-left: 20px;
				}

				.addr-text {
					display: flex;
					flex-wrap: wrap;
					width: 60vw;
					border-bottom: 1px solid #ddd;

					.content_wei {
						font-size: 14px;
						margin-bottom: 10px;
					}
				}
			}

			.fuwu {
				display: flex;
				margin-top: 10px;
				margin-bottom: 10px;

				.c-title {
					width: 50px;
					margin-left: 20px;
				}

				.fuwu-text {
					display: flex;
					justify-content: center;

					.icon-text {
						font-size: 20px;
					}

					.content_wei {
						text-align: center;
					}
				}
			}

			.dotsList {
				display: flex;
				margin-top: 10px;
				margin-left: 26px;

				.dots {
					width: 8rpx;
					height: 8rpx;
					border-radius: 50%;
					background-color: #000;
					margin-right: 10rpx;
				}
			}

			.c-pop {
				background-color: #fff;

				.c-header {
					display: flex;
					padding: 16px;
					border-bottom: 1px solid #f9f9f9;

					image {
						width: 120px;
						height: 120px;
						margin-right: 8px;
					}

					.c-header-main {
						display: flex;
						flex-wrap: wrap;
						flex-direction: column;
						margin-right: 70px;

						.slot-title {
							font-size: 16px;
						}

						.slot-french {
							font-size: 10px;
							color: #c0c0c0;
						}

						.slot-price {
							margin: 8px 0 10px 0;
							font-size: 16px;

							.slot-price-icon {
								font-size: 12px;
							}
						}

						.slot-saleTotal {
							font-size: 12px;
							color: #999999;
						}

						.uni-icons {
							margin-left: 80px;
						}
					}
				}

				.c-body {
					padding: 16px;

					.c-txt {
						font-size: 16px;
					}

					.c-label {
						display: flex;
						flex-wrap: wrap;
						padding-top: 15px;

						.c-list {
							margin: 0 10px 10px 0;

							.c-tit {
								border-radius: 8px;
								width: 100px;
								height: 26px;
								text-align: center;
								line-height: 26px;
								background-color: #e6f7ff;
								font-size: 12px;

								&.active {
									background-color: #bae7ff;
								}
							}
						}
					}
				}

			}
		}

		.c-comment {
			margin: 14px 10px;

			.c-header {
				padding: 15px 0 15px 20px;
				border-bottom: 1px solid #e8e8e8;
				text-align: center;

				.c-title {
					margin-right: 14px;
					font-size: 16px;
				}

				.c-total {
					font-size: 14px;
					color: #999999;
				}

				.c-icon {
					margin-left: 158px;
					color: #999999;
				}
			}

			.c-label {
				display: flex;
				flex-wrap: wrap;
				padding: 15px 0 0 20px;

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
				.comment_list {
					margin: 20px 0;
					padding-bottom: 16px;
					border-bottom: 1px solid #e8e8e8;

					.comment_list_header {
						display: flex;
						padding-left: 20px;

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
							margin-left: 80px;
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

		.gooddetail {
			background-color: #fafcfd;
			margin-bottom: 52px;

			.c-good {
				padding: 24px 0;
				text-align: center;
				font-size: 13px;
				color: #999999;
			}

			.goodimg {
				padding: 0 16px;

				image {
					width: 100%;
				}
			}

			.retroactive {
				margin: 0 16px;
				background-color: #fff;

				.c-txt {
					padding: 10px 10px;
					font-size: 11px;
				}
			}


		}

		.bottom_nav {
			position: fixed;
			width: 100%;
			bottom: 0;
			left: 0;

			/deep/.uni-tab__cart-box {
				padding: 20rpx 0;

				.uni-tab__cart-button-right {
					margin-right: 10rpx;
					border-radius: 100px;
				}
			}

		}

		.gotop {
			position: fixed;
			right: 20px;
			bottom: 80px;
			width: 40px;
			height: 40px;
			background-color: #f0f6fa;
			border-radius: 20px;
			text-align: center;
			line-height: 40px;
			color: #999;

			.c-icon {
				font-size: 22px;
				color: #999999;
			}
		}
	}
</style>

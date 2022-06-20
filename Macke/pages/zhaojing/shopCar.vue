<template>
	<view class="container">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="cart-title">
				购物车
			</view>
		</header-nav>
		<!-- 购物车没商品出现的页面 -->
		<view v-if="goodcart===true" class="empty">
			<image src="/static/images/shop.png" mode="widthFix" style="width: 400rpx;"></image>
			<view class="empty-text">购物车空空如也</view>
			<view class="empty-button" @click="goshopping">去选购</view>
		</view>
		<!-- 购物车加购商品的东西 -->
		<view v-else class="empty-mar">
			<view class="update-cart">
				<view class="cart-num">
					全部 {{goodDatas.goods.length}}
				</view>
				<view v-if="update===false" class="do-btn" @click="update=true">
					编辑
				</view>
				<view v-else class="do-btn" @click="update=false">
					完成
				</view>
			</view>
			<view class="goodAll" v-for="(item,idx) in goodDatas.goods" :key="item.id">
				<view class="goods-detail">
					<view class="detail-left">
						<view class="goods-left">
							<!-- 商品的选择框 -->
							<checkbox-group>
								<label>
									<checkbox @click="changeThis(item.id,idx,item.buy)" :checked="item.buy===1"
										class="selected" color="#555555" />
								</label>
							</checkbox-group>
							<image :src="item.img" mode="widthFix"></image>
						</view>
						<view class="goodsName">
							<text>{{item.name}}</text>
							<text class="french">{{item.french}}</text>
							<view class="goods-change">
								<view class="change-click">{{item.spec}}({{item.weight}})</view>
								<view class="change-content">
									<text class="iconfont icon-canju1 ">{{item.tableware}}&nbsp;</text>
									<text class="iconfont icon-lazhu"> {{item.candle}}</text>
								</view>
							</view>
							<view class="goods-footer">
								<text class="goods-price">¥{{item.price}}</text>
								<van-stepper :value=" item.num " @minus="minus(item.num,idx,item.buy,item.id)" @plus="plus(item.num,idx,item.buy,item.id)" />
								<!-- <uni-number-box :min="1" :max="99"  :value="item.num" @change="updateNum(idx,item.buy,item.num,item.id)"></uni-number-box> -->
							</view>
						</view>
					</view>
				</view>
				<view class="birthday-text">
					<text class="text-content">祝福语</text>
					<input type="text" placeholder="请填写祝福语">
				</view>
			</view>
		</view>
		<!-- 精选推荐 -->
		<view class="title-split">
			<view class="line"></view>
			<text>推荐商品</text>
			<view class="line"></view>
		</view>
		<view class="goods-d">
			<view class="good" v-for="item in goods" :key="item.title">
				<view class="good_img" @click="gosku(item.id)">
					<image class="img" :src="item.img" mode="widthFix"></image>
				</view>
				<view class="content">
					<view class="name">{{item.name}}</view>
					<view class="french">{{item.french}}</view>
					<view class="buy">
						<view class="price">¥&nbsp;{{item.price}}</view>
						<!-- 点击弹出购物车 -->
						<uni-icons type="cart" size="30" @click="getDatasCar(item.id)"></uni-icons>
					</view>
					<!-- 购物车组件 -->
					<car-view ref="Car" :contentDatas="contentDatas" :getShopList="getShopList" ></car-view>
				</view>
			</view>
			<uni-load-more v-if="hasMore" status="loading"></uni-load-more>
		</view>
		<view class="back-top" @click="goTop" :style="{'display':(flag===true? 'block':'none')}">
			<uni-icons type="arrow-up" size="30"></uni-icons>
		</view>

		<!-- //全选总计 -->
		<view class="end">
			<view class="end-left">
				<checkbox-group v-if="goodDatas.master">
					<label>
						<checkbox :checked="goodDatas.master.checkAll===true" @click="Allchecked" />全选
					</label>
				</checkbox-group>
			</view>
			<view v-if="update===false" class="end-right-all">
				<view>
					总计：<text v-if="goodDatas.master" style="font-weight: bold;">￥{{goodDatas.master.total}}</text>
				</view>
				<view v-if="goodDatas.master" class="end-right">
					去结算({{goodDatas.master.buy||0}})
				</view>
			</view>
			<view v-else class="del-btn" @click="delGoods">
				删除
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetRequest,
		PostRequest
	} from "@/common/js/requestHttp.js";
	export default {
		data() {
			return {
				one: 1,
				flag: false,
				scrollTop: 200,
				goods: [],
				pageIndex: 1,
				hasMore: true,
				contentDatas: [],
				goodDatas: [],
				goodcart: true,
				mynum: 1,
				update:false,
			};
		},
		computed:{
			
		},
		created() {
			this.getShopList();
		},
		onShow() {
			this.getShopList();
		},
		methods: {
			goshopping() {
				uni.switchTab({
					url: "/pages/index/index",
				});
			},
			async getShopList() {
				//购物车数据
				let result1 = await GetRequest("/api/cart/load");
				result1.msg === "Success" ? (this.goodDatas = result1.data) : "";
				if (result1.data.goods.length != 0) {
					this.goodcart = false;
				}
				// console.log(this.goodDatas.goods, result1, this.goodcart, '11111111111111');
				//推荐商品
				let result = await GetRequest(
					`/api/goods/load?cityId=110&bid=1&fid=0&page=${this.pageIndex}&count=20&search=&total=34`
				);
				if (result.data.data.length < 10) {
					this.hasMore = false;
				}
				// console.log(result, this.pageIndex);
				result.code === 0 ?
					(this.goods = [...this.goods, ...result.data.data]) :
					"";
			},
			// 购物车组件方法
			async getDatasCar(sku) {
				let result = await GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
				result.msg === "Success" ? (this.contentDatas = result.data) : "";
				this.$refs.Car[0].shopContent2();
			}, //更改购物车数据发送的请求
			async postDatasCar(obj) {
				let result = await PostRequest('/api/cart/update ', obj);
				result.msg === "Success" ? this.goodDatas = result.data : "";
			},
			//删除购物车中的商品
			async postDatasCarDel(obj) {
				let result = await PostRequest('/api/cart/del ', obj);
				result.msg === "Success" ? (this.goodDatas = result.data) : "";
				// console.log(this.goodDatas);
			},
			//回到顶部
			goTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300,
				});
			},
			plus(value,idx,buy,id){
				let obj = {
					"cityId": 110,
					"goods": [{
						"key": idx,
						"id": id,
						"newId": id,
						"num": ++value,
						"buy": buy,
						"blessing": ""
					}]
				}
				this.postDatasCar(obj);
			},
			minus(value,idx,buy,id){
				let obj = {
					"cityId": 110,
					"goods": [{
						"key": idx,
						"id": id,
						"newId": id,
						"num": --value,
						"buy": buy,
						"blessing": ""
					}]
				}
				this.postDatasCar(obj);
			},
			gosku(sku) {
				let sku1 = sku;
				uni.navigateTo({
					url: `../index/good_details?sku=${sku1}`,
				});
			},
			changeThis(goods, index, buy) {
				buy === 1 ? buy = 0 : buy = 1;
				let obj = {
					"cityId": 110,
					"goods": [{
						"key": index,
						"id": goods,
						"newId": goods,
						"num": this.mynum,
						"buy": buy,
						"blessing": ""
					}]
				}
				// console.log(obj)
				this.postDatasCar(obj);
			},
			Allchecked() {
				if (this.goodDatas.master.checkAll) {
					let list = this.newDatas(0);
					this.postDatasCar(list);
					// console.log(list);
				} else {
					let list = this.newDatas(1);
					this.postDatasCar(list);
					// console.log(list);
				}
			},
			delGoods(){
				let obj = {
					"cityId": 110,
					'goods': []
				};
				for (var i = 0,j=0; i < this.goodDatas.goods.length; i++) {
					if(this.goodDatas.goods[i].buy === 1){
						obj.goods[j++] = i;
					}
				};
				this.postDatasCarDel(obj);
				// console.log(obj);
			},
			newDatas(num) {
				let obj = {
					"cityId": 110,
					'goods': []
				};
				for (let i = 0; i < this.goodDatas.goods.length; i++) {
					obj.goods[i] = {};
					obj.goods[i].key = i;
					obj.goods[i].id = this.goodDatas.goods[i].id;
					obj.goods[i].newId = this.goodDatas.goods[i].id;
					obj.goods[i].num = this.goodDatas.goods[i].num;
					obj.goods[i].buy = num;
					obj.goods[i].blessing = '';
					console.log(this.goodDatas.goods[i].id,'3333333333333')
				};
				return obj
			}
		},
		onPageScroll(scroll) {
			this.scrollTop = scroll.scrollTop;
			if (scroll.scrollTop > 400) {
				//当距离大于400时显示回到顶部按钮
				this.flag = true;
			} else {
				//当距离小于400时隐藏回到顶部按钮
				this.flag = false;
			}
		},
		//下拉加载
		onReachBottom() {
			if (this.hasMore) {
				this.pageIndex += 1;
				this.getShopList();
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.goods = [];
			this.pageIndex = 1;
			this.hasMore = true;
			this.getShopList().then(() => {
				uni.stopPullDownRefresh();
			});
		},
	};
</script>

<style lang="less" scoped>
	.container {
		/deep/header-nav {
			display: flex;

			.cart-title {
				flex: 1;
				margin-left: 30rpx;
			}
		}

		.empty {
			text-align: center;
			display: flex;
			align-items: center;
			flex-direction: column;

			&-text {
				color: #808080;
				margin-bottom: 50rpx;
			}

			&-button {
				width: 300rpx;
				height: 90rpx;
				color: orange;
				border: 1rpx solid orange;
				text-align: center;
				line-height: 90rpx;
				border-radius: 48rpx;
			}
		}

		.empty-mar {
			margin-top: 30rpx;

			.update-cart {
				margin: 0 20rpx;
				display: flex;
				padding: 40rpx 0;

				.cart-num {
					padding: 12rpx 0;
					font-weight: 300;
				}

				.do-btn {
					margin-left: auto;
					color: #999;
					font-weight: 300;
					padding: 12rpx 54rpx;
					border: 2rpx solid #999;
					border-radius: 40rpx;
				}
			}
		}

		/deep/.van-empty {
			padding: 0;
		}

		.title-split {
			margin: 48rpx 0 28rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;

			text {
				color: #333;
				font-weight: 500;
				font-size: 30rpx;
				padding: 0 24rpx;
			}

			.line {
				width: 98rpx;
				height: 4rpx;
				border-radius: 3rpx;

				&:first-of-type {
					background: linear-gradient(90deg,
							rgba(98, 98, 98, 0) 0%,
							#30a8ff 100%);
				}

				&:last-of-type {
					background: linear-gradient(90deg,
							#30a8ff 0%,
							rgba(98, 98, 98, 0) 100%);
				}
			}
		}

		.goods-d {
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

				.good_img {
					border-radius: 8px 8px 0 0;
					overflow: hidden;

					.img {
						width: 100%;
					}
				}
			}

			.content {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;

				.name {
					font-size: 14px;
					letter-spacing: 1px;
				}

				.french {
					color: #999;
					font-size: 12px;
				}

				.buy {
					display: flex;
					align-items: center;
					width: 100%;
					justify-content: space-between;
					margin-top: 10px;

					.price {
						font-size: 12px;
					}

					uni-icons {
						text-align: right;
						background-color: lightcyan;
						border-radius: 2px;

						/deep/ .uni-icons {
							color: #888 !important;
							font-size: 24px !important;
						}
					}
				}
			}
		}

		.back-top {
			height: 60rpx;
			width: 60rpx;
			background-color: lightcyan;
			border-radius: 50%;
			box-shadow: 0 0 30rpx 4rpx rgba(0, 0, 0, 0.4);
			position: fixed;
			bottom: 140rpx;
			right: 45rpx;
			text-align: center;
			line-height: 60rpx;
			display: none;
			/* 先将元素隐藏 */
		}

		.goodAll {
			margin-bottom: 20rpx;
			box-sizing: border-box;
			width: 100%;
			padding: 0 20rpx;
			overflow: hidden;

			.goods-detail {
				// width: 100%;
				padding: 10rpx;
			}

			.birthday-text {
				display: flex;
				background-color: #fff;
				align-items: center;

				.text-content {
					padding: 20rpx 60rpx;
				}
			}
		}

		.goods {
			line-height: 80rpx;
			background-color: #ffffff;

			&-detail {
				display: flex;
				padding: 30rpx 15rpx 30rpx 30rpx;
				background-color: #fff;
				justify-content: space-between;
				border-bottom: 5rpx solid #f1f1f1;
				align-items: center;

				.detail-left {
					display: flex;

					.goods-left {
						display: flex;
						align-items: center;

						image {
							width: 180rpx;
							height: 180rpx;
						}
					}
				}

				.detail-right {
					margin-top: 120rpx;
				}

				.goodsName {
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					margin-left: 30rpx;

					.french {
						font-size: 20rpx;
						color: #999;
					}

					.goods-change {
						margin: 10rpx 0;
						font-size: 24rpx;
						color: #999;

						.change-click {
							display: inline-block;
							padding: 6rpx 10rpx;
							background-color: #ebf8ff;
							border-radius: 10rpx;
						}

						.change-content {
							.iconfont {
								font-size: 24rpx;
							}
						}
					}

					.goods-footer {
						display: flex;

						.goods-price {
							align-self: center;
							margin-right: 14vw;
							font-size: 30rpx;
							color: #333;
						}

						/deep/.uni-numbox__value {
							width: 60rpx;
							background-color: #d8f0ff !important;
						}
					}

				}
			}
		}

		.end {
			width: 100%;
			height: 90rpx;
			background-color: #fff;
			position: fixed;
			bottom: 0rpx;
			left: 0;
			display: flex;
			align-items: center;
			z-index: 10;

			&-left {
				width: 30%;
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;

				.end-flex {
					display: flex;
					align-items: center;
				}
			}
			&-right-all{
				width: 70%;
				display: flex;
				line-height: 60rpx;
				margin-right: 20rpx;
				.end-right {
					width: 40%;
					margin-left: auto;
					background-color: lightblue;
					text-align: center;
					border-radius: 40rpx;
					color: #000;
				}
			}
			.del-btn{
				margin-left: auto;
				margin-right: 20rpx;
				padding: 10rpx 50rpx;
				border: 2rpx solid #30a8ff;
				color: #30a8ff;
				border-radius: 50rpx;
			}
		}
	}
</style>

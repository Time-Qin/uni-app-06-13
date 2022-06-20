<template>

	<view class="list">
		<view class="item" v-for="item in breadlist" :key="item.id">



			<view class="">
				<image :src="item.img" mode="widthFix"></image>
			</view>

			<view class="name">
				<view class="name1">
					{{item.name}}
				</view>

				<view class="french">
					{{item.french}}
				</view>

				<view class="price">
					￥{{item.price}}
				</view>




			</view>
			<view class="iconfont icon-gouwuche che">

			</view>





		</view>
	</view>
</template>

<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js";
	export default {
		data() {
			return {
				breadlist: [],

			}
		},
		created() {
			this.geteat();

		},
		methods: {


			async geteat() {
				let result = await GetRequest("/api/goods/load?cityId=110&bid=11&tid=0&fid=0&page=1&count=10");
				console.log(result)
				result.code == 0 ? this.breadlist = result.data.data: "";
				console.log(result, this.breadlist)
			}

		}
	}
</script>

<style lang="less" scoped>
	.list {
		background-color: antiquewhite;
		width: 100%;




		.item {
			background-color: white;
			width: 100%;
			height: 300rpx;
			padding: 4px;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;

			.name {
				width: 170px;

				.name1 {
					font-size: 11px;
					padding-top: 10px;
					padding-left: 5px;
				}

				.french {
					padding-left: 5px;

					padding-top: 10px;
					font-size: 10px;
					opacity: 0.4;
				}

				.price {
					padding-left: 5px;
					font-size: 11px;
					padding-top: 30px;
				}

				
			}
			.che {
				
				padding-top: 80px;
				padding-right: 5px;
			}


			image {
				height: 250rpx !important;
				width: 250rpx;

			}



			// .name {
			// 	font-size: 14px;
			// 	text-overflow: -o-ellipsis-lastline;
			// 	overflow: hidden; //溢出内容隐藏
			// 	text-overflow: ellipsis; //文本溢出部分用省略号表示
			// 	display: -webkit-box; //特别显示模式
			// 	-webkit-line-clamp: 2; //行数
			// 	line-clamp: 2;
			// 	-webkit-box-orient: vertical; //盒子中内容竖直排列

			// }
		}

	}
</style>

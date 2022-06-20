<template>
	<view class="box">
		<!-- 评价标签 -->
		<view class="materBox">
			<view :class="['mater',{active:activeKey===index}]" v-for="(item,index) in commentTag" :key="item.title"
				@click="goType(item.type,index)">
				<view class="name">
					<text>{{item.title}}({{item.total}})</text>
				</view>
			</view>
		</view>
		<!-- 评价详情 -->
		<view class="item">
			<uni-card class="uni_card" :isFull="true" v-for="item in comments" :key="item.cid" :title="item.uname"
				sub-title="" :extra="item.ctime" :thumbnail="item.uhead">
				<template>
					<view class="info">
						{{item.content}}
					</view>
					<view class="guige"> 规格：{{item.spec}}
					</view>
					<view class="imgs" v-if="item.img&&item.img.length>0">
						<image class="image" v-for="img in item.img" :key="img.src" :src="img.src" mode="widthFix">
						</image>
					</view>
				</template>
			</uni-card>
		</view>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	export default {
		name: "comments",
		props: ['twoId', 'comments','commentTag'],
		emits: ['goType'],
		data() {
			return {
				activeKey: 0,
			};
		},
		methods: {
			goType(type, idx) {
				this.$emit('goType', type);
				this.activeKey = idx;
			}
		},
	}
</script>
<style lang="less" scoped>
	.box {
		padding-top: 20rpx;
		background-color: white;

		.materBox {
			display: flex;
			flex-wrap: wrap;
			padding: 0 20rpx;
			width: 100%;
			box-sizing: border-box;
			justify-content: flex-start;

			.mater {
				display: flex;
				background-color: lightcyan;
				height: 16px;
				align-items: center;
				margin: 0 8px 6px 0;
				padding: 5px;
				border-radius: 5px;

				&.active {
					background-color: cadetblue;
					font-weight: 700;
				}

				._img {
					.image {
						width: 16px;
					}
				}

				.name {
					font-size: 10px;
					margin-left: 5px;
				}
			}
		}

		.item {
			.info {
				background-color: #eee;
				box-sizing: border-box;
				padding: 10rpx 20rpx;
				font-size: 12px;
				color: #333;
				border-radius: 20rpx;
				margin-bottom: 20rpx;
			}

			.guige {
				font-size: 10px;
				color: #999;
				padding-bottom: 10rpx;
			}

			.imgs {
				width: 80%;
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;

				.image {
					max-width: 40%;
					flex: 1;
					padding-right: 10rpx;
				}
			}
		}
	}
</style>

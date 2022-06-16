<template>
	<view class="box">
		<view class="materBox">
			<view :class="['mater',{active:activeKey===index}]" v-for="(item,index) in commentTag" :key="item.title" @click="goType(item.type,index)">
				<view class="name">
					<text>{{item.title}}({{item.total}})</text>
				</view>
			</view>
		</view>
		<uni-card class="item" :isFull="true" v-for="item in comments" :key="item.cid" :title="item.uname"
			sub-title="" :extra="item.ctime" :thumbnail="item.uhead">
			<template #actions>
				<view class="info">
					{{item.content}}
				</view>
				<view class="imgs" v-if="item.img&&item.img.length>0">
					<image class="image" v-for="img in item.img" :key="img.src" :src="img.src" mode="widthFix"></image>
				</view>
			</template>
		</uni-card>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	export default {
		name: "comments",
		props: ['twoId', 'comments'],
		emits:['goType'],
		data() {
			return {
				commentTag: [],
				activeKey:0,
			};
		},
		methods: {
			async getCommentTag(twoId) {
				let result = await GetRequest("/api/comment/total?twoId=" + twoId);
				result.code === 0 ? this.commentTag = result.data.list : '';
			},
			goType(type,idx){
				this.$emit('goType',type);
				this.activeKey=idx;
			}
		},
		created() {
			this.getCommentTag(this.twoId);
		},
		updated() {
			this.getCommentTag(this.twoId);
		}
	}
</script>
<style lang="less" scope>
	.box {
		background-color: white;
		.materBox {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			padding: 0 20px;
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
				&.active{
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
	}
</style>

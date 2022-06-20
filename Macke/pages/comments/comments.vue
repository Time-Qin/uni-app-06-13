<template>
	<view class="container">
		<comments :twoId='twoId' :comments='comments' :commentTag='commentTag' @goType='goType'></comments>
	</view>
</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js"
	export default {
		data() {
			return {
				comments: [],
				commentTag: [],
				twoId: '',
				type: 0,
				page: 1,
			}
		},
		methods: {
			// https://interface.mcake.com/api/comment/load?twoId=17463&type=0&page=1
			async getComments(twoId, type, page) {
				let result = await GetRequest("/api/comment/load?twoId=" + twoId + '&type=' + type + '&page=' + page +
					'&count=10');
				result.code === 0 ? this.comments = [...this.comments, ...result.data.data] : '';
			},
			async getCommentTag(twoId) {
				let result = await GetRequest("/api/comment/total?twoId=" + twoId);
				result.code === 0 ? this.commentTag = result.data.list : '';
			},
			goType(data) {
				this.type = data;
				this.comments = [];
				this.getComments(this.twoId, this.type, this.page);
			}
		},
		onLoad(options) {
			this.twoId = options.twoId;
			this.getComments(this.twoId, this.type, this.page);
			this.getCommentTag(this.twoId);
		},
		onReachBottom() {
			this.page++;
			this.getComments(this.twoId, this.type, this.page);
		},
		onPullDownRefresh() {
			this.comments = [];
			this.type = 0;
			this.page = 1;
			this.getComments(this.twoId, this.type, this.page).then(() => {
				uni.stopPullDownRefresh();
			})
		}
	}
</script>
<style>
</style>

<template>
	<view class="container">
		<view class="question">
			<uni-forms >
				<uni-forms-item>
					<text class="txt">问题描述</text>
					<uni-easyinput type="textarea" maxlength="200" @input="sumfontnum"
						placeholder="我希望加入XXXX功能,因为XX情况下,会出现XX异常" />
					<view class="total"><text>{{fontNum}}</text>/200</view>
				</uni-forms-item>
				<uni-forms-item>
					<text class="txt">联系人</text>
					<uni-easyinput type="text" placeholder="请输入联系人" />
				</uni-forms-item>
				<uni-forms-item>
					<text class="txt">联系电话</text>
					<uni-easyinput type="number" placeholder="请输入联系电话" />
				</uni-forms-item>
			</uni-forms>
			<button class="btn">提交反馈</button>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				fontNum: 0,
			}
		},
		methods: {
			// 限制⽂本框字数
			sumfontnum(e) {
				console.log(e.length)
				this.fontNum = e.length
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
		background-color: #f0f0f0;
		padding: 10rpx;

		.question {
			padding: 30rpx;

			.txt {
				color: #888;
			}

			.total {
				color: #888;
				float: right;
			}

			/deep/ uni-easyinput {
				padding-top: 30rpx;
			}

			.btn {
				border-radius: 50rpx;
				background-color: lightskyblue;
			}
		}
	}
</style>

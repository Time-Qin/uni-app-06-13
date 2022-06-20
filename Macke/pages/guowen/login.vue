<template>
	<view class="container">
		<image class="bg-img" src="https://act.mcake.com/fangli/static/images/common/login.png">
		</image>
		<view class="login">
			<radio :checked="isChecked" @click="isChecked=!isChecked" /><text>同意《MCAKE购物协议》</text>
		</view>
		<view class="but">
			<template v-if='isChecked'>
				<button type="default" @click="getUserInfo">微信授权登录</button>
			</template>
			<template v-else>
				<button type="default">查看协议</button>
			</template>
		</view>
	</view>
</template>
<script>
	import {
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				isChecked: false,
			}
		},
		methods: {
			...mapMutations(['addUser']),
			getUserInfo(info) {
				var _this=this;
				uni.getUserProfile({
					desc: 'weixin',
					success(res) {
						_this.addUser({nickName:res.userInfo.nickName,img:res.userInfo.avatarUrl});
						// console.log(res.userInfo, 'hhhhhhhhh')
						uni.switchTab({
							url:'/pages/zhaojing/my'
						})
					}
				})
			},
		},
	}
</script>
<style scoped lang="less">
	.container {
		.bg-img {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -1;
		}

		.login {
			position: fixed;
			bottom: 70px;
			padding-left: 0;
			transform: scale(0.8);
			padding-left: 250rpx;

			text {
				color: white;
				font-size: 10px;
			}
		}

		.but {
			position: fixed;
			bottom: 5px;
			margin: 0 auto;
			padding-left: 250rpx;

			button {
				width: 120px;
				height: 30px;
				box-sizing: border-box;
				line-height: 15px;
				background: skyblue;
				color: black;
				font-size: 13px;
				border-radius: 27px;
				animation: zoomIn 1.5s infinite;
				margin: 20px auto;
				padding: 10rpx;
			}
		}
	}
</style>

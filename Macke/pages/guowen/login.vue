<template>
	<view class="container"> 
	          <image class="bg-img" src="https://act.mcake.com/fangli/static/images/common/login.png">
				 
				 
			  </image>
			  <view class="login">
			  
			 <radio :checked="change" @click="change" /><text>同意《MCAKE购物协议》</text>
			  </view>
	          <view class="but">
	          	<button type="default">授权手机登录</button>
	          	<button type="default">查看协议</button>
	          </view>
	    </view> 
	
		



</template>
<script>
	export default {
		data() {
			return {
				chang: false,
				
			}
		},
		methods: {
			change() {
				if (this.chang == false) {
					this.chang = true
				} else {
					this.chang = false
				}
			}
		}


	}
</script>
<style scoped lang="less">
	.container {
		.bg-img{
		    position: fixed;
		    width: 100%;
		    height: 100%;
		    top: 0;
		    left: 0;
		    z-index: -1;
		}
		.login{
			position: fixed;
			  bottom: 100px;
			  padding-left: 80px;
			  transform:scale(0.8);
			  text{
				  color: white;
				  font-size: 10px;
			  }
		}
		.but{
			position: fixed; 
			    bottom: 5px;
				
				padding-left: 80px;
			button {
			
				width: 150px;
				height: 20px;
				line-height: 15px;
				background: skyblue;
				color: black;
				font-size: 13px;
				border-radius: 27px;
				animation: zoomIn 1.5s infinite;
				margin: 20px auto;
				
			}
			
		}
	
	}
</style>

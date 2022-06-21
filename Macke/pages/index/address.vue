<template>
	<view>
		<view class="content" @click="backTo">
			<text class="iconfont icon-xiangzuo1 conText"></text>
			<text class="conText2">选择地址</text>
		</view>
		<view class="search_view">
			<view class="search_main" @click="changeAddress">
				<text class="iconfont icon-shouhuodizhi"></text>
				<text class=""> {{city||'请选择城市'}}</text>
				<text class="iconfont icon-xiangxia1"></text>
			</view>
			<view class="input-text">
				<text class="iconfont icon-sousuoxiao"></text>
				<input :value="inputV" type="search"  placeholder="请输入收货地址">
			</view>
			
		</view>
		<view class="map_address" @click="getGPS">
			<text>{{myAddress.address||'请选择收获地址'}}</text>
			<text class="iconfont icon-dangqian">重新定位</text>
		</view>
		<view class="FJ_address">
			<text class="iconfont icon-shouhuodizhi"></text>
			<text>附近地址</text>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="bottom_change">
				<view @click="city= item.name" class="change-1" v-for="item in addressDatas" :key="item.id">
					<text >{{item.name}}</text>
				</view>
				<view class="change-2" @click="close">
					<text>取消</text>
				</view>
			</view>	
		</uni-popup>
	</view>
</template>

<script>
	import {
		GetRequest
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				addressDatas:[],
				city:'',
				inputV:'',
				myAddress:'',
			};
		},
		created(){
			this.getAddress();
		},
		computed(){
		},
		methods: {
			async getAddress(){
				let result = await GetRequest('/api/region/city');
				result.msg === 'Success'? this.addressDatas = result.data : '';
				console.log(result);
			},
			backTo(){
				this.$store.commit('updateCart',this.myAddress.address);
				uni.navigateBack();
			},
			changeAddress(){
				this.$refs.popup.open();
			},
			close(){
				this.$refs.popup.close();
			},
			getGPS(){
				uni.getLocation({
					type:'wgs84',
					success:(res)=>{
						var getAddressUrl = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + res.latitude + "," + res.longitude + "&key=U5SBZ-5RA3Q-4LK5M-GKWJY-ULARS-6HFIH&get_poi:1";
						console.log(res,getAddressUrl);
						uni.request({
							url:getAddressUrl,
							method:'GET',
							success:(res)=>{
								this.myAddress = res.data.result;
								// this.$store.state.commit('updateCart',this.myAddress.address);
								console.log(res);
							}
						});
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		width: 100%;
		position: fixed;
		z-index: 1;
		background-color: #fff;
		height: 9vh;
		padding: 4vh 14rpx;
		display: flex;
		justify-content: left;
		align-items: center;

		.conText {
			font-size: 40rpx;
			width: 8vw;
		}

		.conText2 {
			width: 20vw;
			font-weight: 300;
		}
	}

	.search_view {
		background-color: #fff;
		padding-top: 10vh;
		padding-bottom: 20rpx;
		display: flex;
		border-bottom: 4rpx solid #ddd;
		.search_main{
			margin: 20rpx 30rpx;
			width: 30vw;
		}
		.input-text{
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #dddddd;
			border-radius: 20rpx;
			.icon-sousuoxiao{
				padding: 10rpx;
				color: #ddd !important;
			}
		}
	}
	.map_address{
		background-color: #fff;
		display: flex;
		align-items: center;
		border-bottom:4rpx solid #ddd ;
		padding: 26rpx 32rpx;
		.icon-dangqian{
			margin-left: auto;
			color: orange;
		}
	}
	.FJ_address{
		padding: 20rpx 32rpx;
		.iconfont{
			margin-right: 14rpx;
		}
	}
	.bottom_change{
		background-color: #dddddd;
		.change-1{
			background-color: #fff;
			padding: 28rpx 0;
			text-align: center;
			border-bottom: 2rpx solid #dddddd;
		}
		.change-2{
			background-color: #fff;
			text-align: center;
			margin-top: 20rpx;
			padding: 32rpx 0;
		}
	}
</style>

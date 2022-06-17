<template>
	<scroll-view class="scr" :scroll-into-view="topItem" scroll-with-animation scroll-y="true" @scroll="handleScroll">
		<view class="top">
			
		
	
	<view class="goods">
		<view class="nav">
			<image class="imge" src="../../static/icons/shop.png" mode="widthFix"></image>
		<uni-title class="" title="购物车空空如也" align="center"></uni-title>
		<button type="default" @click="goto('/pages/guowen/eat-bread-well')">去逛逛</button>
		
		</view>
		<uni-title class="tit" title="推荐商品" align="center"></uni-title>
		<view class="list">
			<view class="item" v-for="item in hotbreadlist" :key="item.id">
				<view class="itemcontent">
					<image :src="item.img"></image>
					<view class="name">{{item.name}}</view>
					<view class="nam">{{item.french}}</view>
					<view class="price">
						<text>￥{{item.price}}</text>
						<view class="iconfont icon-gouwuche che" >
						
						</view>
					</view>
					
				</view>
				
			</view>

		</view>
		
			<view class="iconfont icon-gouwuche ico" v-if="isShow" @click="handleBackTop">
				
			</view>
		        
		        
		   
	</view>
</view>
	</scroll-view>

</template>
<script>
	import {
		GetRequest
	} from "@/common/js/requestHttp.js";
	export default {
		data() {
			return {
				hotbreadlist: [],
				isShow:false,
				topItem:""

			}
		},
		created() {
			this.shopp();

		},
		methods: {
			handleScroll(ev){
				let {scrollTop} = ev.detail;
				this.isShow = scrollTop>500
				this.topItem=""
			},
			handleBackTop(){
				this.topItem="top"
			},
			goto(url) {
							uni.navigateTo({
								url:"/pages/guowen/eat-bread-well"
							})
						},


			async shopp() {
				let result = await GetRequest(
					"/api/goods/load?cityId=110&bid=1&fid=0&page=1&count=20&search=&total=31");
				console.log(result)
				result.code == 0 ? this.hotbreadlist = result.data.data : "";
				console.log(result, this.hotbreadlist)
			}

		}
	}
</script>
<style lang="less" scoped>
	.goods {
		.tit {
			background-color: while;
		}

		.list {
			background-color: while;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
		
		button{
		    width: 100px;
		    height: 20px;
		    line-height: 15px;
		    background: skyblue;
		    color: black;
		    font-size: 13px;
		    border-radius: 27px;
		    animation: zoomIn 1.5s infinite;
			margin:0 auto;
		    // text-align: center;
		}
		.nav{
			background-color: white;
			height: 150px;
		
			
			
			.imge{
				
				width: 50px;
				height: 50px;
				align:"center";
				padding-left: 135px;
				padding-top: 10px;
			}
			
		}

		.item {
			background-color: white;
			width: 50%;
			padding: 4px;
			box-sizing: border-box;

			.itemcontent {
				padding-left: 10px;
				background-color: white;
				display: flex;
				flex-direction: column;
				
				box-sizing: border-box;
			}

			image {
				width: 130px;
				height: 130px;
			}

			.nam {
				opacity: 0.4;
				font-size: 10px;
			}

			.price {
				font-size: 9px;
				padding: 8px 0;
				.che{
					padding-left: 100px;
					padding-bottom: 10px;
				}

				text:nth-child(2) {
					color: #ccc;
					text-decoration: line-through;
					margin-left: 10px;
					font-size: 13px;
					
				}
			}
			
			.name {
				font-size: 10px;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;

			}
		}
		.ico{
			height: 100upx;
			width: 100upx;
			background-color: #fff;
			border-radius: 50%;
			box-shandow:0 0 30upx 4upx rgba(0,0,0,0.4);
			position: fixed;
			
			bottom:40upx;
			right: 20upx;
			text-align: center;
			line-height: 100upx;
		}
	}
	.scr{
		
		height: 100vh;
	}
	
</style>

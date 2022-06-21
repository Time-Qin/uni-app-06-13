<template>
	<view class="map-view">
		<header-nav :scrollTop="scrollTop" :one="one">
			<view class="slot-left">
				<text class="iconfont icon-xiangzuo1" @click="backTo"></text>
				地图
			</view>
		</header-nav>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 100vh;" scale="11" longitude="120.3597929" latitude="31.5661341" :markers="covers"
				 :polygons="polygon"  >
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				one: 1,
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/icons/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '/static/icons/location.png'
				}],
				polygon: [{
				      points:[
				        {
							"longitude":"120.4540790",
							 "latitude":"31.5927130"
				        },
						{
							"longitude":"120.3891136",
							 "latitude":"31.6212522"
						},
				        {
				            "longitude":"120.3126498",
				             "latitude":"31.6842039"
				        },
						{
							"longitude":"120.2655067",
							 "latitude":"31.6064917"
						},
				        {
				            "longitude":"120.2068654",
				             "latitude":"31.5405324"
				        },
						{
							"longitude":"120.3086254",
							 "latitude":"31.5331460"
						},
				        {
				            "longitude":"120.3528939",
				             "latitude":"31.4700912"
				        },
						{
							"longitude":"120.3971624",
							 "latitude":"31.5641650"
						}
				    ],
				    strokeWidth:2,
				    strokeColor:"#2cd2ff60",
				    fillColor:"#35a8ff80"
				    }],
			}
		},
		methods: {
			backTo() {
				uni.navigateBack({});
			},
		},
		onPageScroll() {
			this.scrollTop = 200;
		}
	}
</script>

<style lang="less" scoped>
	.map-view {
		/deep/header-nav {
			display: flex;

			.slot-left {
				margin-left: 20rpx;
				flex: 1;
				color: black;

				.icon-xiangzuo1 {
					font-size: 40rpx;
					margin-right: 20rpx;
				}
			}

			.navBarBox {
				background-color: #fff;
			}
		}
	}
</style>

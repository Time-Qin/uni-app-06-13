<template>
	<view :class="['header','backC']" :style="[headerStyle]">
		<view class="navBarBox" :style="{opacity: one||menuopacity }" >
			<view class="statusBar" :style="[headerStyle]"></view>
			<navbar  class="navBar">
				<slot></slot>
			</navbar>
		</view>
	</view>
</template>

<script>
	export default {
		name: "header-nav",
		props:['scrollTop','one'],
		data() {
			return {
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82,
				menuopacity: 0,
				headerStyle: {
					'--header-height': "0px",
					'--status-height': "0px"
				}

			};
		},
		created() {
			this.headerStyle['--status-height'] = uni.getSystemInfoSync()['statusBarHeight'] * 2 + 'rpx';
			this.headerStyle['--header-height'] = uni.getSystemInfoSync()['statusBarHeight'] * 2 + this.navBarHeight +
				'rpx';
		},
		onPageScroll(Top) {
			const scrollTop = this.scrollTop;
			if (scrollTop >= 0) {
				// 导航条颜色透明渐变
				if (scrollTop <= 20) {
					this.menuopacity = 0
				} else if (20 < scrollTop && scrollTop <= 200) {
					this.menuopacity = scrollTop / 200
				} else if (scrollTop > 200) {
					this.menuopacity = 1;
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		padding-top: var(--header-height);
		
		

		.navBarBox {
			width: 100vw;
			top: 0;
			overflow: hidden;
			position: fixed;
			background-color: white;
			z-index: 999999999;

			.statusBar {
				height: var(--status-height);
				// background-color: white;
			}

			.navBar {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				height: 82rpx;
				line-height: 82rpx;
			}


		}
	}
</style>

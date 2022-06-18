<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// @import "/wxcomponents/vant/dist/common/index.wxss";
	@import '@/uni_modules/uni-scss/index.scss';
	@import "@/uni_modules/vk-uview-ui/index.scss";
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}

	@font-face {
		font-family: "iconfont";
		/* Project id 3457046 */
		src: url('@/static/iconfont.woff2') format('woff2'),
			url('@/static/iconfont.woff') format('woff'),
			url('@/static/iconfont.ttf') format('truetype');
	}



	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-gouwuche:before {
		content: "\e70b";
	}

	.icon-daifukuan:before {
		content: "\e601";
	}

	.icon-31daifahuo:before {
		content: "\e602";
	}

	.icon-31daipingjia:before {
		content: "\e603";
	}

	.icon-zhiyuandizhi1:before {
		content: "\e60c";
	}

	.icon-daishouhuofuben:before {
		content: "\e6b1";
	}

	.icon-qiandao:before {
		content: "\e60f";
	}

	.icon-kefu:before {
		content: "\e60a";
	}

	.icon-jingxuan:before {
		content: "\e62b";
	}

	.icon-shouhou:before {
		content: "\e63c";
	}

	.icon-jinianrix:before {
		content: "\e6be";
	}

	.icon-31shezhi:before {
		content: "\e600";
	}

	.icon-shouhuodizhi:before {
		content: "\e64e";
	}

	.icon-sousuoxiao:before {
		content: "\e8d6";
	}
</style>

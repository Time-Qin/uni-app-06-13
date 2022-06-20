<template>
	<view class="container">
		<view class="">
			<view class="notice-bar">
				<uni-notice-bar text="温馨提示:由于疫情团购为特殊时期,蛋糕保温包均免费赠送,现恢复常规配送,如有需求则需付费购买,望理解" />
			</view>
			<view class="c-label">
				<view class="c-list" v-for="item in orders.send_type" :key="item.id">
					<view class="c-tit">{{item.name}}</view>
				</view>
			</view>
			<view class="c-addr">
				<uni-list-item link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)">
					<template v-slot:header>
						<text class="slot-addr iconfont icon-shouhuodizhi"></text>
						<text class="slot-title">选择收货地址</text>
					</template>
				</uni-list-item>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetRequestToken
	} from '@/common/js/requestHttp.js';
	export default {
		data() {
			return {
				orders: {}
			}
		},
		created() {
			this.getOrder()
		},
		methods: {
			async getOrder() {
				let result = await GetRequestToken("/api/checkout/load")
				console.log(result);
				result.code == 0 ? this.orders = result.data : '';
				console.log(this.orders);
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.notice-bar {
			padding: 12px 14px 12px 14px;

			/deep/.uni-noticebar {
				margin-bottom: 0;
				padding: 6px 12px;

				.uni-noticebar__content-text {
					font-size: 12px;
					color: #f1883a !important;
				}
			}

		}

		.c-label {
			display: flex;
			flex-wrap: wrap;
			padding-left: 14px;

			.c-list {
				margin: 0 10px 10px 0;

				.c-tit {
					border-radius: 10px;
					padding: 0 10px;
					text-align: center;
					line-height: 26px;
					background-color: #bae7ff;
					font-size: 16px;
				}
			}
		}
		.c-addr{
			padding: 0 14px;
		}
	}
</style>

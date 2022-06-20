<template>
	<view class="container">
		<view class="c-invoicing">
			<view class="invoice-type">
				<view class="c-header">
					<text class="c-type">发票类型</text>
					<text class="instructions" @click="toPoints">发票须知</text>
				</view>

				<van-tabs v-model:active="active">
					<van-tab title="电子普通发票">
						<view class="c-tips">
							电子普通发票与纸质普通发票具备同等法律效力，订单完成后24小时内在"我的订单"查看
						</view>
						<view class="invoice-title">
							<view class="c-title">发票抬头</view>

							<van-tabs v-model:active="active">
								<van-tab title="个人">
									<view class="personal">
										<text class="personal-title">个人名称</text>
										<input class="uni-input" confirm-type="search"
											placeholder-style="font-size:12px;color:#bfbfbf"
											placeholder="请填写'个人'或您的姓名" />
									</view>
								</van-tab>
								<van-tab title="单位">
									<view class="company">
										<view class=" c-name">
											<text class="name-title">单位名称</text>
											<input class="uni-input" confirm-type="search"
												placeholder-style="font-size:12px;color:#bfbfbf"
												placeholder="请填写单位名称" />
										</view>
										<view class="c-taxpayer">
											<text class="taxpayer-title">纳税人识别码</text>
											<input class="uni-input" confirm-type="search"
												placeholder-style="font-size:12px;color:#bfbfbf"
												placeholder="纳税人识别号/统一社会信用代码" />
										</view>
									</view>
								</van-tab>
							</van-tabs>

							<view class="c-content">
								<view class="content-header">
									<text class="content-title">发票内容</text>
									<text class="explanation">发票内容选项已根据税法调整，具体请以展示为准</text>
								</view>
								<view class="content-btn">
									<button size="mini" class="cake-btn active">蛋糕</button>
									<button size="mini" class="food-btn">食品</button>
								</view>
							</view>
						</view>
					</van-tab>
					<van-tab title="不开发票">
						<view class="c-tips">
							电子普通发票与纸质普通发票具备同等法律效力，订单完成后24小时内在"我的订单"查看
						</view>
					</van-tab>
				</van-tabs>
			</view>
			<view class="determine">
				<button size="" class="determine-btn">确定</button>
			</view>
		</view>

		<!-- 发票须知弹出框 -->
		<view class="c-tips">
			<uni-popup ref="popup1" background-color="#fff">
				<view class="popup-content">
					<view class="popup-title">发票须知</view>
					<view class="text">1.发票金额不含卡劵、红包、积分和余额支付部分。</view>
					<view class="text">2.电子普通发票;</view>
					<view class="text">（1）电子普通发票是税局认可的有效收付款凭证，其法律效力、基本用途及使用规定同纸质发票，如需纸质发票可自行下载打印;</view>
					<view class="text">（2）MCAKE全面启用电子普通发票，用户可前往订单详情页查询和下载。</view>
					<button class="btn1" size="mini" @click="close">我知道了</button>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toPoints() {
				this.$refs.popup1.open()
			},
			close() {
				this.$refs.popup1.close()
			},
		}
	}
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
		background-color: #fafcfd;

		.c-invoicing {
			padding: 0 16px;

			.invoice-type {
				padding: 10px 16px;
				background-color: #fff;

				.c-header {
					margin-bottom: 14px;

					.c-type {
						color: #333333;
						font-weight: 600;
						font-size: 14px;
					}

					.instructions {
						margin-left: 186px;
						font-size: 13px;
						color: #999999;
					}
				}

				.btn-type {
					.electronic {
						border-radius: 30px;
						margin-right: 20px;
						background-color: #f7f7f7;
						font-size: 14px;
					}

					.noinvoi {
						border-radius: 30px;
						background-color: #f7f7f7;
						font-size: 14px;
						border: 1px solid #f7f7f7;
					}
				}

				.c-tips {
					margin-top: 12px;
					font-size: 12px;
					padding-bottom: 14px;
					color: #999999;
					border-bottom: 1px solid #f7f9fa;
				}

				.invoice-title {
					margin-top: 14px;

					.c-title {
						color: #333333;
						font-weight: 600;
						font-size: 14px;
						margin-bottom: 12px;
					}

					.btn-type {
						margin-bottom: 14px;

						.btn-personal {
							border-radius: 30px;
							margin-right: 20px;
							padding: 2px 38px;
							font-size: 14px;
						}

						.btn-company {
							border-radius: 30px;
							padding: 2px 38px;
							font-size: 14px;
						}
					}

					.personal {
						display: flex;
						flex-wrap: wrap;
						padding: 10px 0;
						border-bottom: 1px solid #f7f9fa;

						.personal-title {
							font-size: 14px;
							margin-right: 60px;
						}

						.uni-input {
							font-size: 14px;
						}
					}

					.company {
						border-bottom: 1px solid #f7f9fa;

						.uni-input {
							font-size: 14px;
							overflow: ;
						}

						.c-name {
							display: flex;
							flex-wrap: wrap;
							padding: 10px 0;

							.name-title {
								font-size: 14px;
								margin-right: 60px;
							}
						}

						.c-taxpayer {
							display: flex;
							flex-wrap: wrap;
							padding: 10px 0;

							.taxpayer-title {
								font-size: 14px;
								margin-right: 30px;
							}
						}
					}

					.c-content {
						.content-header {
							padding: 10px 0;

							.content-title {
								color: #333333;
								font-weight: 600;
								font-size: 14px;
							}

							.explanation {
								font-size: 11px;
								color: #999999;
							}
						}

						.content-btn {
							.cake-btn {
								border-radius: 30px;
								margin-right: 20px;
								padding: 2px 38px;
								font-size: 14px;
								border: 1px solid #f8f8f8;
								box-sizing: border-box;

								&:hover {
									color: #64b6e8;
									border: 1px solid #64b6e8;
									font-weight: 600;
									background-color: #fff;

								}
							}

							.food-btn {
								border-radius: 30px;
								padding: 2px 38px;
								font-size: 14px;
								border: 1px solid #f8f8f8;
								box-sizing: border-box;

								&:hover {
									color: #64b6e8;
									border: 1px solid #64b6e8;
									font-weight: 600;
									background-color: #fff;

								}
							}
						}

					}
				}
			}

			.determine {
				padding: 0 16px;

				.determine-btn {
					margin-top: 30px;
					border-radius: 30px;
					background-color: #bae7ff;
					font-size: 17px;
				}
			}
		}


		.c-tips {
			/deep/.uni-popup__wrapper {
				border-radius: 14px;
			}

			.popup-content {
				// padding: 20px 60px 20px 0;
				width: 344px;
				height: 320px;
				overflow: hidden;

				.popup-title {
					margin-top: 20px;
					margin-bottom: 16px;
					font-size: 16px;
					font-weight: 600;
					text-align: center;
				}

				.text {
					font-size: 14px;
					margin-bottom: 5px;
					margin-left: 22px;
					padding-right: 10px;
					color: #888888;
				}

				.btn1 {
					padding: 2px 60px;
					border-radius: 20px;
					font-size: 14px;
					background-color: #bae7ff;
					margin-left: 91px;
					margin-top: 20px;
				}
			}
		}
	}
</style>

<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="问题描述" name="msg">
				<uni-easyinput type="textarea" v-model="formData.msg" placeholder="我希望加入XXXX功能,因为XX情况下,会出现XX异常"
					maxlength="200" @input="sumfontnum" />
				<view class="total"><text>{{fontNum}}</text>/200</view>
			</uni-forms-item>
			<uni-forms-item label="联系人" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入联系人" />
			</uni-forms-item>
			<uni-forms-item label="联系电话" name="tel">
				<uni-easyinput class="input" v-model="formData.tel" type="text" placeholder="请输入联系电话" />
			</uni-forms-item>

		</uni-forms>
		<button class="btn" @click="submit">提交反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fontNum: 0,
				// 表单数据
				formData: {
					name: '',
					tel: "",
					msg: ''
				},
				rules: {
					// 对name字段进行必填验证
					msg: {
						rules: [{
								required: true,
								errorMessage: '请描述问题',
							},
							{
								minLength: 8,
								maxLength: 200,
								errorMessage: '问题描述必须 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对name字段进行必填验证
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人',
						}]
					},
					tel: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号',
						}, ]
					},
				}
			}
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			// 限制⽂本框字数
			sumfontnum(e) {
				console.log(e.length)
				this.fontNum = e.length
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		height: 100vh;
		padding: 80rpx 40rpx;
		.btn{
			background: lightblue;
			border-radius: 60rpx;
		}
		.total{
			float: right;
		}
	}
</style>
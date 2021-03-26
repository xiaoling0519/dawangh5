<template>
	<view class="container">
		<view class="row b-b flex_item">
			<input class="input" placeholder-style="color:#C7C7C7" type="text" v-model="phone" placeholder="请输入手机号" placeholder-class="placeholder" />
			<view class="code"><text>获取验证码</text></view>
		</view>
		<view class="row b-b">
			<input class="input" placeholder-style="color:#C7C7C7" type="text" v-model="code" placeholder="请输入验证码" placeholder-class="placeholder" />
		</view>
		<button class="btn-submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'15046854521',
				code:4585
			};
		},
		onLoad() {},
		methods: {}
	};
	</script>
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.container{
		font-size: 28rpx;
		padding-top: 250rpx;
		color: #B7B7B7;
		margin: 0rpx 25rpx;
	}
	.row {
		padding: 25rpx 15upx;
		background: #fff;
		.uni-input-placeholder placeholder{
			color: #CECECE;
		}
		.uni-input-placeholder placeholder{
			color: #CECECE;
		}
		.input {
			flex: 1;
			font-size: 36upx;
			color: #212121;
			border-bottom: 2rpx solid #F3F3F3;
			padding-bottom: 25rpx;
			width: 300rpx;
		}
		.code{
			width: 35%;
			padding-left: 50rpx;
			text{
				font-size: 32rpx;
				border: 2rpx solid #E9E9E9;
				color: #5C5C5C;
				border-radius: 15rpx;
				padding: 18rpx 30rpx;
			}
		}
	}
	.btn-submit{
		background:#53CAC6;
		width: 90%;
		margin: 80rpx auto;
		color: #FFFFFF;
		border-radius: 50rpx;
		font-size: 35rpx;
		text-align: center;
		box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
	}
</style>
<template>
	<view class="container">
		<view class="row b-b">
			<view class="tit">项目描述</view>
		</view>
		<view class="equity_box">
			<view class="text-box uni-textarea">
				<textarea placeholder-style="color:#D8D8D8" v-model="describe" :placeholder="placeholder" @blur="bindTextAreaBlur"></textarea>
			</view>
		</view>
		<view class="tip flex">
			<view>请不要填写您的联系方式</view>
			<view>0/500字</view>
		</view>
		<!-- <button class="btn-submit">提交</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				describe:'',//自我评价
				placeholder:'请填写自我评价'
			};
		},
		onLoad() {},
		methods: {
			bindTextAreaBlur: function(e) {
				this.describe = e.detail.value;
			},
		}
	};
	</script>
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.container{
		font-size: 28rpx;
		color: #B7B7B7;
		margin: 0rpx 25rpx;
	}
	.row {
		padding: 25rpx 15upx;
		background: #fff;
	    .tit{
			padding-left: 10rpx;
			font-size: 40upx;
			color:#3E3E3E;
			padding-bottom: 25rpx;
			padding-top: 25rpx;
		}
	}
	.equity_box {
		background-color: #FFFFFF;
		border: 2rpx solid #F4F4F4;
		border-radius: 10rpx;
		padding: 25rpx 25rpx;
		.text-box {
			height: 200rpx;
			textarea {
				font-size: 35rpx;
				width: 100%;
				height: 100%;
				color: #2B2B2B;
			}
		}
	}
	.tip{
		font-size: 26rpx;
		color: #D3D3D3;
		padding-top: 15rpx;
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
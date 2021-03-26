<template>
	<view class="container">
		<view class="row b-b">
			<view class="tit">自我评价</view>
		</view>
		<view class="equity_box">
			<view class="text-box uni-textarea">
				<textarea placeholder-style="color:#D8D8D8" v-model="evaluation" :placeholder="placeholder" @blur="bindTextAreaBlur"></textarea>
			</view>
		</view>
		<view class="tip flex">
			<view>请不要填写您的联系方式</view>
			<view>0/500字</view>
		</view>
		<!-- <button class="btn-submit">提交</button> -->
		<evaluation :isShow="isShowBottom" @closeBottom="closeBottom"></evaluation>
	</view>
</template>

<script>
	import evaluation from '@/components/bbh-sheet/resume/evaluation.vue';
	export default {
		components: {
			evaluation
		},
		data() {
			return {
				evaluation:'',//自我评价
				placeholder:'例：我是一个****的人，性格****，兴趣爱好****，优点有...',//提示
				isShowBottom : false,//是否保存内容
				isShowLeftFri: false,//先显示阴影，再显示侧滑内容，加个延时不让页面闪动体验会更好点
			}
		},
		onLoad() {},
		methods: {
			//底部开关
			showBottom(){
				this.isShowBottom = true;
			},
			closeBottom(item){
				this.isShowBottom = item;
			},
			bindTextAreaBlur: function(e) {
				this.evaluation = e.detail.value;
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
<template>
	<view class="content">
		<view class="row b-b">
			<view class="tit">技能名称</view>
			<view class="flex">
				<input class="input" type="text" placeholder="例：PhotoShop" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">熟练程度</view>
			<view class="flex" @click="showBottom">
				<input class="input" disabled="disabled" type="text" placeholder="请选择" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<button class="btn-submit" >删除此项专业技能</button>
	<specialty :isShowBottom="isShowBottom" @closeBottom="closeBottom"></specialty>
	</view>
</template>

<script>
import specialty from '@/components/bbh-sheet/resume/specialty.vue';
export default {
	components: {
		specialty
	},
	data() {
		return{
			isShowBottom : false,//底部弹窗开关
			isShowLeftFri: false,//先显示阴影，再显示侧滑内容，加个延时不让页面闪动体验会更好点
		}
	},
	computed: {},
	onShow() {},
	methods: {
		//底部开关
		showBottom(){
			this.isShowBottom = true;
		},
		closeBottom(item){
			this.isShowBottom = item;
		},
	}
}		
</script>
<style lang="scss">
page {
	background: #FFFFFF;
	padding-top: 16upx;
}
.uni-picker{
	
}
.row {
	padding: 25rpx 15upx;
	background: #fff;
	.tit {
		padding-left: 10rpx;
		font-size: 40upx;
		color:#3E3E3E;
		padding-bottom: 25rpx;
		padding-top: 25rpx;
	}
	.iconenter{
		color: #BCBCBC;
	}
	.uni-input-placeholder placeholder{
		color: #CECECE;
	}
	.input {
		flex: 1;
		font-size: 34upx;
		color: #1A1A1A;
		font-weight: 500;
	}
	.phone{
		position: relative;
	}
	.yanz{
		padding: 2rpx 8rpx;
		color: #88DAD7;
		border: 2rpx solid #7FD7D4;
		background-color: #EEFAF9;
		position: absolute;
		left: 230rpx;
		font-size: 22rpx;
		border-radius: 7rpx;
	}
	.iconlocation {
		font-size: 36upx;
		color: blue;
	}
}
.b-b{
	border-bottom: 2rpx solid #F6F6F6;
}
.btn-submit{
		border:2rpx solid #53CAC6;
		width: 80%;
		margin: 80rpx auto;
		color: #53CAC6;
		border-radius: 50rpx;
		font-size: 35rpx;
		text-align: center;
		background-color: #FFFFFF;
	}
</style>

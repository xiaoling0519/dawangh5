<template>
	<view class="content">
		<view class="row b-b">
			<view class="tit">职位类别</view>
			<view class="flex">
				<input class="input" type="text" placeholder="例：互联网软件工程" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">行业类别</view>
				<view class="flex">
					<input class="input" disabled="disabled" type="text" placeholder="例：互联网/电子商务" placeholder-class="placeholder" />
					<text class="iconfont iconenter"></text>
				</view>
		</view>
		<view class="row b-b">
			<view class="tit">期望月薪</view>
				<view class="flex">
					<input class="input" disabled="disabled" type="text" placeholder="例：8000-10000" placeholder-class="placeholder" />
					<text class="iconfont iconenter"></text>
				</view>
		</view>
		<view class="row b-b">
			<view class="tit">工作地区</view>
			<view class="flex">
				<input class="input" type="text" placeholder="例：广东-深圳" disabled="disabled" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">工作状态</view>
			<view class="flex" @click="showBottom1">
				<input class="input" type="text" placeholder="例：随时到岗" disabled="disabled" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">工作性质</view>
			<view class="flex" @click="showBottom">
				<input class="input" type="text" placeholder="例：全职" disabled="disabled" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">电子邮箱</view>
			<view class="flex">
				<input class="input" type="text" placeholder="请选择" placeholder-class="placeholder" />
			</view>
		</view>
	<!-- 	<button class="btn-submit" >删除此项专业技能</button> -->
	<nature :isShowBottom="isShowBottom" @closeBottom="closeBottom"></nature>
	<condition :isShowBottom="isShowBottom1" @closeBottom="closeBottom1"></condition>
	</view>
</template>

<script>
import nature from '@/components/bbh-sheet/resume/nature.vue';
import condition from '@/components/bbh-sheet/resume/condition.vue';
export default {
	components: {
		nature,
		condition
	},
	data() {
		return{
			isShowBottom : false,//底部弹窗开关
			isShowBottom1 : false,//底部弹窗开关
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
		//底部开关
		showBottom1(){
			this.isShowBottom1 = true;
		},
		closeBottom1(item){
			this.isShowBottom1 = item;
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

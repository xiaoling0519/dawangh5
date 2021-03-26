<template>
	<view class="container">
		<uni-section title="工作" type="line"></uni-section>
		<view class="input-box flex">
			<view class="input-name">意向职业</view>
			<view class="select">
				<text class="selected">餐饮</text>
				<text class="selected">服务员</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="input-box flex">
			<view class="input-name">工作地点</view>
			<view class="select">
				<text class="selected">浙江</text>
				<text class="selected">温州</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="input-box flex">
			<view class="input-name">工作性质</view>
			<view class="select">
				<text class="selected">全职</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<uni-section title="个人" type="line"></uni-section>
		<view class="input-box flex">
			<view class="input-name">工作经验</view>
			<view class="select">
				<text class="selected">1-3年</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="input-box flex">
			<view class="input-name">最高学历</view>
			<view class="select">
				<text class="selected">高中</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<uni-section title="待遇" type="line"></uni-section>
		<view class="input-box flex">
			<view class="input-name">职位标签</view>
			<view class="select">
				<text class="selected">五险一金，全勤奖，包吃</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="input-box flex">
			<view class="input-name">最高薪资</view>
			<view class="select">
				<text class="selected">4000-6000元</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="btn-submit">我选好了</view>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		components: {
			uniSection,
		},
		data() {
			return {};
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
		padding-top: 25rpx;
	}
	uni-input{
		font-size: 13px;
		color: #2D2D2D;
	}
	.uni-input-placeholder{
		color: #2D2D2D;
	}
	.input-name{
		font-size: 13px;
		color: #2D2D2D;
	}
	.input-box{
		width: 90%;
		margin: 0rpx auto;
		padding: 20rpx 25rpx;
		background-color:#F7F7F7;
		margin-bottom: 25rpx;
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
	.select{
		color:#C2C2C2;
	}
	.selected{
		color: #6DD0CD;
		font-size: 34rpx;
		margin-left: 90rpx;
	}
</style>

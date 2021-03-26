<template>
	<view class="content">
		<view class="input-box flex">
			<view class="input-content flex">
				<view class="iconfont iconsearch"></view>
				<view class="input"><input type="text" placeholder="请输入搜索内容" /></view>
			</view>
			<view class="search-btn">搜索</view>
			<view class="input-button flex"><text>取消</text></view>
		</view>
		<swiper  class="swiper-box " duration="300">
			<swiper-item class="search-hot">
				<view class="search-box">
					<view class="title"><text>热门职位：</text></view>
					<view class="hot-list">
						<view class="list-item">营业长</view>
						<view class="list-item">店长</view>
						<view class="list-item">收银员</view>
						<view class="list-item">服务员</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
export default {
	data() {
		return {};
	},
	//下拉刷新
		onPullDownRefresh() {},
	methods: {}
};
</script>
<style lang="scss">
page,
.content {
	height: 100%;
	background-color: #F7F7F7;
}
.vheight{
	height: var(--status-bar-height);
	background-color: #FFFFFF;
}
.input-box {
	padding: 25rpx;
	background-color: #F2F2F2;
	height: 30px;
	position: relative;
	.iconsearch {
		font-size: 35rpx;
		color: #757575;
	}
	.input-content {
		border-radius: 99rpx;
		flex-grow: 1;
		padding: 10rpx 30rpx;
		background-color: #FFFFFF;
		.input {
			flex-grow: 1;
			input {
				font-size: 32rpx;
			}
		}
	}
	.search-btn{
		position: absolute;
		right: 110rpx;
		padding: 13rpx 35rpx;
		border-radius: 50rpx;
		background: #53CAC6;
		color: #FFFFFF;
		font-size: 32rpx;
	}
	.input-button {
		padding-left: 20rpx;
		font-size: 36rpx;
		height: 100%;
		color: #808080;
	}
}

.swiper-box {
	/* #ifndef MP */
	height: 100%;
	/* #endif */
	/* #ifdef MP */
	height: calc(100% - 44px);
	/* #endif */
	.search-hot {
		.search-box{
			padding: 25rpx 50rpx;
			height: 300rpx;
			background: #FFFFFF;
			.title {
				font-size: 32rpx;
				color: #212121;
			}
			.hot-list {
				display: flex;
				flex-wrap: wrap;
				margin-top: 30rpx;
				.list-item {
					padding: 10rpx 20rpx;
					border: 1px solid #D0D0D0;
					color: #747474;
					font-size: 28rpx;
					margin-right: 20rpx;
					margin-bottom: 20rpx;
				}
			}
		}
	}
}
</style>

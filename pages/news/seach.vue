<template>
	<view class="input-box flex">
		<view class=" input-content flex">
			<view class="iconfont iconsearch"></view>
			<view class="input"><input type="text" placeholder="搜索" /></view>
		</view>
		<view class="input-button flex"><text>取消</text></view>
	</view>
</template>
<script>
</script>
<style lang="scss">
	.flex_item {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
	}
	/* 弹性盒子 */
	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.input-box {
		padding: 25rpx;
		background-color: #ffffff;
		border-bottom:1px solid rgb(243,243,243);
		.iconsearch {
			font-size: 35rpx;
		}
		.input-content {
			border-radius: 15rpx;
			flex-grow: 1;
			padding: 12rpx 30rpx;
			background-color: #F7F7F7;
			.input {
				flex-grow: 1;
				input {
					font-size: 24rpx;
				}
			}
		}
		.input-button {
			padding-left: 20rpx;
			font-size: 24rpx;
			height: 100%;
		}
	}
</style>

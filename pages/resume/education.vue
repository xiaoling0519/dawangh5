<template>
	<view class="content">
		<view class="row b-b">
			<view class="tit">毕业学校全称</view>
			<view class="flex">
				<input class="input" type="text" value='' placeholder="例：东华师范大学" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">学历</view>
			<view class="flex">
				<input class="input" value=''  type="text" placeholder="例：本科" placeholder-class="placeholder" />
			    <text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">所学专业</view>
			<view class="flex">
				<input class="input" value=''  type="text" placeholder="例：视觉传达设计" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">在读时间</view>
			<view class="flex">
				<input class="input" value='' type="text" placeholder="入学时间" placeholder-class="placeholder" />
				<view class="flex_item">
					<view class="tip">—</view>
					<input class="input" value='' type="text" placeholder="毕业时间" placeholder-class="placeholder" />
				</view>
			</view>
		</view>
		<!-- <button class="btn-submit" >删除此项专业技能</button> -->
	</view>
</template>

<script>

export default {
	data() {
		return{}
	},
	computed: {},
	onShow() {},
	methods: {}
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
.tip{
	font-weight: bold;
	padding-right: 35rpx;
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

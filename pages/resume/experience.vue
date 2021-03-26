<template>
	<view class="content">
		<view class="row b-b">
			<view class="tit">公司名称</view>
			<view class="flex">
				<input class="input" type="text" value='东京股份有限公司' placeholder="例：互联网软件工程" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">职位名称</view>
			<view class="flex">
				<input class="input" value='UI设计师'  type="text" placeholder="例：8000-10000" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">在职时间</view>
			<view class="flex">
				<input class="input" value='2016.11' type="text" placeholder="例：互联网/电子商务" placeholder-class="placeholder" />
				<view class="flex_item">
					<view class="tip">—</view>
					<input class="input" value='2018.05' type="text" placeholder="例：互联网/电子商务" placeholder-class="placeholder" />
				</view>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">薪资</view>
			<view class="flex">
				<input class="input" value='UI设计师'  type="text" placeholder="例：8000-10000" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">工作描述</view>
			<view class="flex">
				<input class="input clamp" type="text" value='反反复复付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付' placeholder="例：互联网软件工程" placeholder-class="placeholder" />
			    <text class="iconfont iconenter"></text>
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

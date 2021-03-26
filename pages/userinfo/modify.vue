<template>
	<view class="content">
		<view class="row b-b">
			<view class="tit">姓名</view>
			<view class="flex">
				<input class="input" type="text" placeholder="例:张三" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">性别</view>
			<picker @change="bindPickerChange" :value="Gender" :range="array">
				<view class="flex">
					<input class="input" v-model="Gender" disabled="disabled" type="text" placeholder="请选择" placeholder-class="placeholder" />
					<text class="iconfont iconenter"></text>
				</view>
			</picker>
		</view>
		<view class="row b-b">
			<view class="tit">出生年月</view>
				<picker mode="date" @change="bindDateChange">
					<view class="flex">
						<input class="input" type="text" v-model="date" disabled="disabled" placeholder="请选择" placeholder-class="placeholder" />
						<text class="iconfont iconenter"></text>
					</view>
				</picker>
		</view>
		<view class="row b-b">
			<view class="tit">参加工作</view>
			<view class="flex">
				<input class="input" type="text" placeholder="请选择" disabled="disabled" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">现居住城市</view>
			<view class="flex">
				<input class="input" type="text" placeholder="请选择" disabled="disabled" placeholder-class="placeholder" />
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">手机号码</view>
			<view class="flex phone">
				<input class="input" type="text" v-model="phone" placeholder="请绑定" disabled="disabled" placeholder-class="placeholder" />
				<text v-if="phone" class="yanz">已验证</text>
				<text class="iconfont iconenter"></text>
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">电子邮箱</view>
			<view class="flex">
				<input class="input" type="text" placeholder="请选择" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="row b-b">
			<view class="tit">微信号码</view>
			<view class="flex">
				<input class="input" type="text" placeholder="请选择" placeholder-class="placeholder" />
			</view>
		</view>
		<button class="btn-submit" >提交</button>
	</view>
</template>

<script>

export default {
	data() {
		return{
			 array: ['男', '女'],
			 Gender:'',
			 date:'',
			 phone:'150****7950'
		}
	},
	computed: {},
	onShow() {},
	methods: {
		  bindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
					console.log(e.target)
		            this.Gender = this.array[e.target.value];
		        },
				bindDateChange: function(e) {
					this.date = e.target.value
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
		color: #333333;
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

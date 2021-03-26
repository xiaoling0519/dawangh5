<template>
	<view class="container">
		<uni-section title="工作" type="line"></uni-section>
		<view class="input-box flex">
			<input class="uni-input" placeholder="意向职业" />
			<view class="select" @click="showBottom">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<view class="input-box flex">
			<input class="uni-input" placeholder="工作地点" />
			<view class="select" @click="showBottom">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<view class="input-box flex">
			<input class="uni-input" placeholder="工作性质" />
			<view class="select">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<uni-section title="个人" type="line"></uni-section>
		<view class="input-box flex">
			<input class="uni-input" placeholder="工作经验" />
			<view class="select">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<view class="input-box flex">
			<input class="uni-input" placeholder="最高学历" />
			<view class="select">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<uni-section title="待遇" type="line"></uni-section>
		<view class="input-box flex">
			<input class="uni-input" placeholder="职位标签" />
			<view class="select" @click="showBottom3">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<view class="input-box flex">
			<input class="uni-input" placeholder="最高薪资" />
			<view class="select">请选择<text class="iconfont iconenter"></text></view>
		</view>
		<view class="btn-submit">我选好了</view>
		<handson :isShowBottom="isShowBottom" @closeBottom="closeBottom"></handson>
		<positiontip :isShowBottom="isShowBottom3" @closeBottom="closeBottom3"></positiontip>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import handson from '@/components/bbh-sheet/quickentry/hands-on.vue';
	import positiontip from '@/components/bbh-sheet/quickentry/positiontip.vue';
	export default {
		components: {
			uniSection,
			handson,
			positiontip
		},
		data() {
			return {
				isShowBottom : false,//底部弹窗开关
				isShowLeftFri: false,//先显示阴影，再显示侧滑内容，加个延时不让页面闪动体验会更好点
				isShowBottom3:false,
			};
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
			//底部开关
			showBottom3(){
				this.isShowBottom3 = true;
			},
			closeBottom3(item){
				this.isShowBottom3 = item;
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
		padding-top: 25rpx;
	}
	uni-input{
		font-size: 13px;
		color: #2D2D2D;
	}
	.uni-input-placeholder{
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
		padding: 25rpx 0rpx;
		font-size: 35rpx;
		text-align: center;
		box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
	}
	.select{
		color:#C2C2C2;
	}
	
</style>

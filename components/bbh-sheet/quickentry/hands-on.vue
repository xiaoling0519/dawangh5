<template>
	<view class="content">
		<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}"    @touchmove.stop.prevent="moveHandle"  
		@click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isShowBottom}"   @click.stop="stopEvent()" >
				<view class="box-content">
					<view class="box-top"><text class="text">工作经验</text></view>
					<view class="list">不限</view>
					<view class="list">1年以下</view>
					<view class="list">1-3年</view>
					<view class="list">3-5年</view>
					<view class="list">1-3年</view>
					<view class="list">1-3年</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		name : "bottomSheet",
		props: {
			isShowBottom : Boolean
		},
		methods: {
			closeSheet(){
				let item = false;
				this.$emit('closeBottom',item);
			},
			stopEvent(){						//@click.stop防止事件冒泡
				
			},
			moveHandle(){						//不让页面滚动
				
			}
		}
	}
</script>

<style>
	/* sheet弹窗 */
	.sheet{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 120%;
		left: 0upx;
		bottom: 0upx;
		right: 0upx;
		background:rgba(0,0,0,0.3);
		z-index: 10000;
	}
	
	/* 显示时候的动画默认0.5s */
	.sheetView{
		width: 100%;
		height: 0upx;
		position: absolute;
		bottom: 0upx;
		background: white;
		z-index: 10001;
		transition: all 0.5s;
	}
	.sheetShow{
		top:0upx !important;
	}
	/* 关闭时的动画，时间自己可以设置0.5s*/
	.sheeHide{
		top:120% !important;
		transition: all 0.5s;		
	}
	
	/* 项目需求根据设计稿要展示的高度,超出这个高度就自动滚动*/
	.sheetView_active{
		height: 767rpx;
		border-top-right-radius: 15rpx;
		border-top-left-radius: 15rpx;
	}
	.box-content{
		padding: 0rpx 25rpx;
		font-size:32rpx;
	}
	.box-top{
		text-align: center;
		color: #383838;
		padding: 35rpx 0rpx;
		font-size: 35rpx;
		
	}
	.text{
		padding-bottom: 5rpx;
		border-bottom: 1.5px solid #00BCD4;
	}
	.list{
		color: #1A1A1A;
		border-bottom: 2rpx solid #F4F4F4;
		padding: 25rpx 0rpx;
	}
	.submit-name{
		padding: 0rpx 0rpx;
		
	}
	.tip{
		margin-top: 25rpx;
		border: 2rpx solid #59CBC8;
		color: #59CBC8;
		padding: 10rpx 20rpx;
		border-radius: 7rpx;
		margin-right: 20rpx;
		background-color: #EDFAF9;
	}
	.foot-btn{
		margin-top: 55rpx;
	}
	.btn-list{
		width: 50%;
		padding: 35rpx 0rpx;
		text-align: center;
		border-top: 2rpx solid #53CAC6;
	}
	.delivery{
		background-color: #53CAC6;
	}
		
</style>

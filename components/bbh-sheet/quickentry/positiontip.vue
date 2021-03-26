<template>
	<view class="content">
		<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}"    @touchmove.stop.prevent="moveHandle"  
		@click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isShowBottom}"   @click.stop="stopEvent()" >
				<view class="box-content">
					<view class="box-top"><text class="text">职位标签</text></view>
					<view class="tip"><text class="text">*</text>最多可选三项</view>
					<view class="list">
						<view class="list-item checked">五险一金<image class="tip-img" src="/static/img/img13.png"></image></view>
						<view class="list-item ">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item checked">五险一金<image class="tip-img" src="/static/img/img13.png"></image></view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item checked">五险一金<image class="tip-img" src="/static/img/img13.png"></image></view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
						<view class="list-item">五险一金</view>
					</view>
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

<style lang="scss">
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
	.tip{
		color: #C9C9C9;
		padding: 25rpx 0rpx;
		font-size: 22rpx;
		padding-left: 35rpx;
	}
	.text{
		font-size: 25rpx;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		padding-left: 40rpx;
		font-size: 24rpx;
		color: #656565;
		text-align: center;
	}
	.list-item {
		padding: 15rpx 0rpx;
		margin-bottom: 45rpx;
		border: 2rpx solid #DFDFDF;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		width: 160rpx;
		background-color: white;
		border-radius: 7rpx;
		position: relative;
		&:nth-child(n + 1) {
			margin-right: 8%;
		}
	}
	.tip-img{
		position: absolute;
		right: 0;
		bottom: 29rpx;
		width: 32rpx;
		height: 32rpx;
	}
	.checked{
		border: 2rpx solid #53CAC6 !important;
		background: #EDFAF9 !important;
	}
</style>

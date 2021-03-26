<template>
	<view class="content">
		<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}"    @touchmove.stop.prevent="moveHandle"  
		@click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isShowBottom}"   @click.stop="stopEvent()" >
				<view class="box-content">
					<view class="box-top flex_item">
						<view><icon type="warn" size="14"/></view>
						<view class="text">正常职位不会收费，请提交警惕</view>
					</view>
					<view class="list">
						<view class="submit-name">确定工作职位</view>
						<view class="box-tpl flex_item">
							<view class="tip">派单传发</view>
						</view>
					</view>
					<view class="list">
						<view class="submit-name">确定工作要求</view>
						<view class="box-tpl flex_item">
							<view class="tip">男</view>
							<view class="tip">18-40岁</view>
						</view>
					</view>
					<view class="list">
						<view class="submit-name">确定工作地点</view>
						<view class="box-tpl flex_item">
							<view class="tip">温州市府大道509号</view>
						</view>
					</view>
				</view>
				<view class="foot-btn flex">
					<view class="btn-list cancel" @click="closeSheet()">取消</view>
					<view class="btn-list delivery">投递简历</view>
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
		padding: 25rpx 100rpx;
		color: #DE3333;
	}
	.text{
		padding-top: 10rpx;
		padding-left: 15rpx;
	}
	.list{
		border-top: 2rpx solid #F4F4F4;
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

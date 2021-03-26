<template>
	<view class="content">
		<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}"    @touchmove.stop.prevent="moveHandle"  
		@click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isShowBottom}"   @click.stop="stopEvent()" >
				<view class="box-content">
					<view class="box-top">分享到</view>
					<view class="flex">
						<view class="list">
							<view class="img"><image src="/static/img/icon_qq.png"></image></view>
							<view class="name">QQ</view>
						</view>
						<view class="list">
							<view class="img"><image src="/static/img/icon_weixin.png"></image></view>
							<view class="name">微信</view>
						</view>
						<view class="list">
							<view class="img"><image src="/static/img/icon_youxiang.png"></image></view>
							<view class="name">邮箱</view>
						</view>
					</view>
					<view class="foot" @click="closeSheet()">取消</view>
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
		height: 400rpx;
	}
	.box-content{
		padding: 0rpx 120rpx;
		font-size:32rpx;
	}
	.box-top{
		text-align: center;
		color: #383838;
		padding: 35rpx 0rpx;
		font-size: 35rpx;
		
	}
	.foot{
		text-align: center;
		color: #383838;
		padding-top: 35rpx;
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
		text-align: center;
		
	}
	.img{
		width:85rpx;
		height: 95rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.name{
		padding-top: 15rpx;
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

<template>
	<view>
		<view class="modelBox"  v-if="isShow"  @touchmove.stop.prevent="moveHandle"  @click="closeSheet()">
			<view class="modelSheet" @click.stop="otherClick()">
				<view class="text">您刚刚对此内容做出了修改，如要离开是否保存？</view>
				<view class="btn-box flex">
					<view class="cancel btn">放弃</view>
					<view class="keep btn">保存</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			isShow : {
				type : Boolean
			}
		},
		methods:{
			moveHandle(){	//阻止蒙版底部的滑动
				return
			},	  
			otherClick(){	//弹窗的点击事件，阻止事件冒泡
				
			},
			closeSheet(){
				let item = false;
				this.$emit('closeBottom',item);
			},
		}
	}
</script>
<style>
	.modelBox{
		position: fixed;
		z-index: 999;
		width: 100%;
		height:100%;
		top: 0;
		left:0;
		background:rgba(0,0,0,0.3);
		display: flex;
		/* align-items: center; */
		justify-content: center;
	}
	.modelSheet{
		width: 68%;
		height:250rpx;
		background-color:#FFF;
		text-align: center;
		border-radius: 8rpx;
		overflow: hidden;
		margin-top: 200rpx;
		font-size: 35rpx;
		color: #393939;
	}
	.text{
		padding: 30rpx 40rpx;
		border-bottom: 2rpx solid #F6F6F6;
	}
	.btn-box{
		height: 100rpx;
		
	}
	.btn{
		width: 50%;
		text-align: center;
	}
	.keep{
		color: #53CAC6 !important;
	}
</style>

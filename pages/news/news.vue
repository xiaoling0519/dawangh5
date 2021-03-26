<template>
	<view class="content">
		<view class="search-box flex">
			<view class="title flex_item">
				<view class="notice" v-for="ls in NoticeList" v-bind:class="{ message: ls.id == checkid }" @click="change(ls.id)">{{ ls.name }}</view>
			</view>
			<view><text class="iconfont iconsearch" @click="tosearch"></text></view>
		</view>
		<view v-show="MeaasgeShow">
			<view class="message-list">
				<wkiwiSwipeAction :options="options" :messagesList="messages"></wkiwiSwipeAction>
			</view>
		</view>
		<view class="notice-list" v-show="NoticeShow">
			<view class="list">
				<view class="time"><text>今天12:00</text></view>
				<view class="notice-box">
					<view class="notice-text">
						欢迎你~ 我是你的大王小助手，帮助你实现职业梦想，找到自己心仪的工作。为了表达出我的心意，送你一份【求职绝招】。
						请点击查看这份礼物<text>www.baidu.com</text>
					</view>
					<view class="tpl flex_item">
						<view class="img"><image src="../../static/img/img41.png"></image></view>
						<view class="tpl-name">招聘小助手</view>
						<view class="tip flex_item">
							<view class="icon"><image src="../../static/img/img42.png"></image></view>
							<view class="tip-name">官方账号</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import wkiwiSwipeAction from "../../components/wkiwi-swipe-action.vue";
export default {
	 components: { wkiwiSwipeAction },
	data() {
		return {
			focus: false,
			isShowView: true,
			options: [
				{
					text: '置顶',
					style: {
						backgroundColor: '#C7C6CD'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			MeaasgeShow:true,
			NoticeShow:false,
			checkid: 1,
			NoticeList: [
				{
					id: 1,
					name: '消息'
				},
				{
					id: 2,
					name: '通知'
				}
			],
			messages: [
				{
					title: '陶晓馨',
					url: ['http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg'],
					message: '这是一条系统消息',
					time: '15:15',
					count: 5,
					stick: false, //是否为置顶状态
					disabled: false, //是否禁止滑动
					type: 1 //通知类型消息
				},
				{
					title: '陶晓馨',
					url: ['http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg'],
					message: '这是一条消息任务',
					time: '15:15',
					count: 5,
					stick: false, //是否为置顶状态
					disabled: false, //是否禁止滑动
					type: 1 //通知类型消息
				}
			]
		};
	},
	onLoad() {},
	methods: {
		//点击切换商品种类
		change(item) {
			let id = item;
			this.checkid = id;
			if(this.checkid == 1){
				this.MeaasgeShow = true;
				this.NoticeShow = false;
			}
			if(this.checkid == 2){
				this.MeaasgeShow = false;
				this.NoticeShow = true;
			}
			
		},
		tosearch() {
			uni.navigateTo({
				url: '/pages/news/seach'
			});
		}
	},
	onNavigationBarButtonTap(e) {
	  if (e.index == 0) {
	    this.floatingMenuShow = !this.floatingMenuShow;
	  }
	}
};
</script>

<style scoped="true" lang="scss">
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
.message {
	font-size: 55rpx !important;
}
.search-box {
	padding: 15rpx 25rpx;
	border-bottom: 2rpx solid #f3f3f3;
	.title {
		.notice {
			font-size: 35rpx;
			padding-left: 35rpx;
		}
	}
	.iconfont{
		font-size: 50rpx;
	}
}
.floating-menus {
	position: fixed;
	top: 0;
	right: 20upx;
	z-index: 10;
	opacity: 0;
	transition: all 0.4s;
	height: 0;
	overflow: hidden;
}
.floating-menus {
	&.show {
		opacity: 1;
		height: auto;
	}
	&.hidden {
		opacity: 0;
		height: 0;
	}
}
.notice-list{
	width: 100%;
	.list{
		width: 100%;
		text-align: center;
		.time{
			padding-top: 35rpx;
			font-size: 22rpx;
			text{
				background-color: #E6E6E6;
				color: #FFFFFF;
				padding: 10rpx 25rpx;
			}
		}
		.notice-box{
			padding: 25rpx 25rpx;
			width: 70%;
			margin: 35rpx auto;
			text-align: left;
			box-shadow: 0upx 0upx 5upx rgba(0, 0, 0, 0.2);
			border-radius: 15rpx;
			.notice-text{
				font-size: 32rpx !important;
				padding-bottom: 25rpx;
				border-bottom:1px solid rgb(243,243,243);
				text{
					color: #18BBFF;
				}
			}
			.tpl{
				padding-top: 25rpx;
				.img{
					width: 50rpx;
					height: 50rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.tpl-name{
					padding: 0rpx 15rpx;
					font-size: 35rpx;
				}
				.tip{
					border: 2rpx solid #6FD3D0;
					padding: 0rpx 10rpx;
					color:#6FD3D0;
					font-size: 14rpx !important;
					border-radius: 7rpx;
					.icon{
						width: 25rpx;
						height: 25rpx;
						position: relative;
						image{
							position: absolute;
							top: 2rpx;
							width: 100%;
							height: 100%;
						}
					}
					.tip-name{
						padding-left: 3rpx;
						font-size: 22rpx !important;
					}
				}
				
			}
		}
	}
}
</style>

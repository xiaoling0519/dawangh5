<template>
	<view class="container">
		<view class="details">
		  <view class="flex">
			  	<view class="name">前台收银员</view>
				<view class="money">【4k-5k/月】</view>
		  </view>
		  <view class="list flex_item">
			<view class="details-tpl flex">
				<image class="img1" src="/static/img/img26.png"></image>
				<view class="text">温州</view>
			</view>
			<view class="details-tpl flex">
				<image class="img" src="/static/img/img25.png"></image>
				<view class="text">1-3年</view>
			</view>
			<view class="details-tpl flex">
				<image class="img2" src="/static/img/img27.png"></image>
				<view class="text">高中</view>
			</view>
		  </view>
		  <view class="tip-box flex">
			  <view class="tip">全职<text>|</text>包住<text>|</text>年低福利<text>|</text>团建旅游</view>
			  <view class="time">8月14日</view>
		  </view>
		  <view class="shop flex">
			  <view class="portrait"><image src="../../static/img/img28.png"></image></view>
			  <view class="info">
				  <view class="info-name clamp">亿旺连锁酒店</view>
				   <view class="info-tip clamp">休闲及餐饮工商业行业、服务行业</view>
			  </view>
			 <view class="iconfont iconenter"></view>
		  </view>
		  <view class="addr flex_item">
			  <view class="image"><image src="../../static/img/img29.png"></image></view>
			  <view class="addr-text clamp">温州市瓯海区牛山北路442号</view>
			 <view class="iconfont iconenter"></view>
		  </view>
		</view>
		<view class="list-box">
			<view class="title-box flex_item">
				<view class="image"><image src="../../static/img/img30.png"></image></view>
				<view class="title">职位介绍</view>
				<view class="tip"></view>
			</view>
			<view class="responsibilities">
				<view class="title">岗位职责：</view>
				<view class="tpl">1、按时完成公司工作，以及其他与岗位相关的事情；</view>
				<view class="tpl">2、协助同事完成要求的工作；</view>
				<view class="tpl">3、心态积极阳光，工作仔细负责认真，高效执行力，热爱学习，有上进心；</view>
				<view class="title">待遇：</view>
				<view class="tpl">1、试用期1-3个月，转正后平均月薪范围6000-8000元；</view>
				<view class="tpl">2、包住，公司组织团建旅游，年底有福利</view>
			</view>
		</view>
		<view class="Tips flex_item">
			<view class="Tips-img"><image src="../../static/img/img31.png"></image></view>
			<view class="Tips-text">以任何理由向你索取财物，收取费用，扣留证件都是违法行为；请注意并提高警惕</view>
		</view>
		<view class="position-list">
			<view class="list-title flex_item">
				<view class="tips"></view>
				<view class="title">查看其他相似职位</view>
				<view class="tips"></view>
			</view>
			<view class="position-tpl">
				<view class="list-cont" @click="navTo('/pages/position/details')">
					<view class="title flex">
						<view class="name clamp">服务员</view>
						<view class="salary">4千-5千/月</view>
					</view>
					<view class="list-tpl flex">
						<view class="tpl">瓯海<text>|</text>梧田<text>|</text>经验不限<text>|</text>高中</view>
						<view class="distance">离你2.5km</view>
					</view>
					<view class="list-tip flex_item">
						<view class="tip">全职</view>
						<view class="tip">宝宿舍</view>
						<view class="tip">周某单休</view>
						<view class="tip">节假福利</view>
					</view>
					<view class="shopship flex_item">
						<view class="portrait"><image src="../../static/img/img28.png"></image></view>
						<view class="shop-text">
							<view class="name clamp">明珠之星商务酒店</view>
							<view class="about flex">
								<view>0-50人<text>|</text>餐饮服务</view>
								<view class="">7月29日</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="foot-box flex">
			<view class="foot-image">
				<view class="img"><image src="../../static/img/img32.png"></image></view>
				<view class="text">收藏</view>
			</view>
			<view class="btn-box flex_item">
				<view class="Talk btn">先聊聊</view>
				<view class="Submit btn">投简历</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {},
		methods: {}
	};
	</script>
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.container{
		font-size:32rpx;
		color: #7F7F7F;
	}
	.details{
		box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.2);
		padding: 20rpx 20rpx;
		width: 85%;
		margin: 35rpx auto;
		border-radius: 15rpx;
	}
	.name{
		font-size: 35rpx;
		color: #1A1A1A;
	}
	.money{
		font-size: 35rpx;
	   color: #53CAC6;
	}
	.list{
		padding-top: 35rpx;
		.details-tpl{
			padding-right: 65rpx;
			.text{
				padding-left: 15rpx;
				font-size: 32rpx;
				color: #3A3A3A;
			}
			.img{
				width: 40rpx;
				height: 40rpx;
			}
			.img1{
				width: 35rpx;
				height: 40rpx;
			}
			.img2{
				width: 40rpx;
				height: 35rpx;
			}
		}
	}
	.tip-box{
		padding: 25rpx 0rpx;
		border-bottom: 2rpx solid #F8F8F8;
		.tip{
			text{
				padding: 0rpx 10rpx;
			}
		}
		.time{
			
		}
	}
	.shop{
		padding: 25rpx 0rpx;
		border-bottom: 2rpx solid #F8F8F8;
		.portrait{
			width: 100rpx;
			height: 100rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.info{
			width: 70%;
			.info-name{
				color: #333333;
				font-size: 35rpx;
				padding-bottom: 7rpx;
			}
			.info-tip{
				font-size: 28rpx;
			}
		}
		.iconfont{
			font-size: 45rpx;
		}
	}
	.addr{
		padding-top: 25rpx;
		.image{
			width: 28rpx;
			height: 35rpx;
		    margin-top: 5rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.addr-text{
			width: 87%;
			padding-left: 15rpx;
		}
	}
	.list-box{
		padding: 45rpx 30rpx;
		.title-box{
			.image{
				width: 55rpx;
				height: 50rpx;
				margin-top: -5rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				padding-left: 15rpx;
				font-size: 35rpx;
				color: #1A1A1A;
			}
			.tip{
				margin-left: 25rpx;
				width: 65%;
				height: 2rpx;
				background-color: #F3F3F3;
			}
		}
	}
	.responsibilities{
		.title{
			padding: 25rpx 0rpx;
			color: #333333;
			font-size: 32rpx;
		}
		.tpl{
			font-size: 30rpx;
			padding-bottom: 10rpx;
		}
	}
	.Tips{
		padding: 25rpx 25rpx;
		border-top: 12rpx solid #EDEDED;
		border-bottom: 12rpx solid #EDEDED;
		.Tips-img{
			width: 100rpx;
			height: 95rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.Tips-text{
			padding-left: 25rpx;
			font-size: 30rpx;
			width: 90%;
		}
	}
	.position-list{
		padding: 30rpx 30rpx;
		padding-right: 0rpx !important;
		.tips{
			width: 100rpx;
			height: 2rpx;
			background-color: #D6D6D6;
		}
		.list-title{
			padding: 0rpx 100rpx;
		}
	}
	.position-tpl{
	  padding-bottom: 120rpx;
		.list-cont{
			padding: 25rpx 0rpx;
			width: 97%;
			border-bottom: 2rpx solid #F3F3F3;
			.title{
				font-size: 35rpx;
				font-weight: 600;
				.name{
					width: 60%;
				}
				.salary{
					color: #53CAC6;
				}
			}
			.list-tpl{
				padding: 15rpx 0rpx;
				color: #535353;
				text{
					padding: 0rpx 10rpx;
				}
				.distance{
					color:#A2A2A2 ;
				}
			}
			.list-tip{
				padding-bottom: 25rpx;
				.tip{
					background-color: #EDEDED;
					color: #A2A2A2;
					margin-right: 10rpx;
					padding: 4rpx 15rpx;
					font-size: 22rpx;
				}
			}
			.shopship{
				.portrait{
					border-radius: 100%;
					width: 80rpx;
					height: 80rpx;
					margin-right: 25rpx;
					image{
						width: 100%;
						height: 100%;
					}
					
				}
				.shop-text{
					width: 90%;
					.name{
						font-size:30rpx;
						font-weight: 700;
					}
					.about{
						color: #979797;
						padding-top: 10rpx;
						font-size: 28rpx;
						text{
							padding: 0rpx 10rpx;
						}
					}
				}
			}
		}
	}
	
	.foot-box{
		width: 100%;
		position: fixed;
		padding: 15rpx 35rpx;
		bottom: 0;
		box-shadow: 0upx 0upx 20upx rgba(0, 0, 0, 0.2);
		background-color: #FFFFFF;
		.foot-image{
			text-align: center;
			.img{
				width: 60rpx;
				height: 60rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				font-size: 28rpx;
				color: #53CAC6;
				padding-top: 10rpx;
			}
		}
		.btn-box{
			text-align: center;
			width: 85%;
			.btn{
				width: 43%;
				color: #53CAC6;
				box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.2);
				padding: 25rpx 0rpx;
				border-radius: 15rpx;
			}
			.Talk{
				margin-right: 5%;
			}
			.Submit{
				margin-right: 8%;
				background-color: #53CAC6;
				color: #FFFFFF;
			}
		}
	}
</style>

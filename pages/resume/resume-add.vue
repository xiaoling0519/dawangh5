<template>
	<view class="content">
		<view class="Top-Nav flex">
			<view class="resume-name flex">
				<image class="resume-img" src="/static/img/icon_shuaxin.jpg"></image>
				<view>刷新简历</view>
			</view>
			<view class="resume-name borde flex">
				<image class="resume-img" src="/static/img/icon_fenxiang .jpg"></image>
				<view>分享简历</view>
			</view>
		</view>
		<view class="resume">
			<view class="resume-info flex_item">
				<view class="portrait"><image src="/static/img/portrait.jpg"></image></view>
				<view class="info">
					<view class="info-tpl flex">
						<view class="name">先生/女士<!-- <text>女士</text> --></view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img15.png"></image></view>
							<view class="tip-text">编辑</view>
						</view>
					</view>
					<view class="info-text">年龄<text>|</text>工作：年限<text>|</text>现居：地区</view>
				</view>
			</view>
			<view class="information flex_item">
				<view class="information-img"><image src="../../static/img/img17.jpg"></image></view>
				<view class="information-info">电话号码</view>
			</view>
			<view class="information flex_item">
				<view class="img1"><image src="../../static/img/img18.jpg"></image></view>
				<view class="information-info">邮箱地址</view>
			</view>
			<view class="resume-list">
				<view class="list-title flex">
					<view class="title">求职意向<text>必填</text></view>
					<view class="tip flex_item">
						<view class="tip-img"><image src="../../static/img/img15.png"></image></view>
						<view class="tip-text">编辑</view>
					</view>
				</view>
			<!-- 	<view class="information flex_item">
					<view class="information-img"><image src="/static/img/img19.png"></image></view>
					<view class="information-info">视频剪辑/影视后期</view>
				</view>
				<view class="information flex_item">
					<view class="information-img"><image src="/static/img/img20.png"></image></view>
					<view class="information-info">媒体/影视/文化传播</view>
				</view>
				<view class="information flex_item">
					<view class="information-img"><image src="/static/img/img21.png"></image></view>
					<view class="information-info">8千/1.2万</view>
				</view>
				<view class="information flex_item">
					<view class="information-img"><image src="/static/img/img22.png"></image></view>
					<view class="information-info">温州地区</view>
				</view>
				<view class="information flex_item">
					<view class="information-img"><image src="/static/img/img23.png"></image></view>
					<view class="information-info">月内到岗/全职</view>
				</view> -->
			</view>
			<view class="resume-list">
				<view class="list-title flex">
					<view class="title">学历教育<text>必填</text></view>
					<view class="tip flex_item">
						<view class="tip-img"><image src="/static/img/img15.png"></image></view>
						<view class="tip-text">编辑</view>
					</view>
				</view>
				<!-- <view class="information flex_item">
					<view class="img2"><image src="/static/img/icon_xuexiao.png"></image></view>
					<view class="information-info">华东师范大学</view>
				</view>
				<view class="information flex_item">
					<view class="img2"><image src="/static/img/icon_xueli.png"></image></view>
					<view class="information-info">本科</view>
				</view>
				<view class="information flex_item">
					<view class="img2"><image src="/static/img/icon_xiangmu.png"></image></view>
					<view class="information-info">视觉传达设计</view>
				</view>
				<view class="information flex_item">
					<view class="img2"><image src="/static/img/icon_shijian.png"></image></view>
					<view class="information-info">2011.9-2015.8</view>
				</view> -->
		    </view>
			<view class="resume-list">
				<view class="list-title flex">
					<view class="title">工作/实习经历<text>必填</text></view>
					<view class="tip flex_item">
						<view class="tip-img3"><image src="../../static/img/img14.jpg"></image></view>
						<view class="tip-text">添加</view>
					</view>
				</view>
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon"><image src="../../static/img/img24.png"></image></view>
						<view class="list-name">阿里巴巴网络有限技术公司</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx"><text>起始于</text>2016年5月<text>--</text><text>结束于</text>2017年5月</view>
						<view class="list-position flex">
							<view class="position">影视策划/后期制作</view>
							<view class="money">8600元/月</view>
						</view>
						<view class="list-tetx">
								对拍摄完的影片或者软件制作的动画，做后期的处理，使其形
							成完整的影片，包括加特效，加文字，并且为影片制作声音等。
							影视后期制作基本上是包括初剪-正式剪辑-作曲选曲-特效录
							入-配音合成等一系列工作。
						</view>
					</view>
				</view> -->
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon"><image src="../../static/img/img24.png"></image></view>
						<view class="list-name">阿里巴巴网络有限技术公司</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx"><text>起始于</text>2016年5月<text>--</text><text>结束于</text>2017年5月</view>
						<view class="list-position flex">
							<view class="position">影视策划/后期制作</view>
							<view class="money">8600元/月</view>
						</view>
						<view class="list-tetx">
								对拍摄完的影片或者软件制作的动画，做后期的处理，使其形
							成完整的影片，包括加特效，加文字，并且为影片制作声音等。
							影视后期制作基本上是包括初剪-正式剪辑-作曲选曲-特效录
							入-配音合成等一系列工作。
						</view>
					</view>
				</view> -->
			</view>
			<view class="resume-list">
				<view class="list-title flex">
					<view class="title">项目经历<!-- <text>必填</text> --></view>
					<view class="tip flex_item">
						<view class="tip-img3"><image src="../../static/img/img14.jpg"></image></view>
						<view class="tip-text">添加</view>
					</view>
				</view>
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon"><image src="../../static/img/icon_xiangmu.png"></image></view>
						<view class="list-name">支付宝</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx"><text>起始于</text>2016年5月<text>--</text><text>结束于</text>2017年5月</view>
						<view class="list-tetx">
								对拍摄完的影片或者软件制作的动画，做后期的处理，使其形
							成完整的影片，包括加特效，加文字，并且为影片制作声音等。
							影视后期制作基本上是包括初剪-正式剪辑-作曲选曲-特效录
							入-配音合成等一系列工作。
						</view>
					</view>
				</view> -->
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon"><image src="../../static/img/icon_xiangmu.png"></image></view>
						<view class="list-name">王者荣耀</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx"><text>起始于</text>2016年5月<text>--</text><text>结束于</text>2017年5月</view>
						<view class="list-tetx">
								对拍摄完的影片或者软件制作的动画，做后期的处理，使其形
							成完整的影片，包括加特效，加文字，并且为影片制作声音等。
							影视后期制作基本上是包括初剪-正式剪辑-作曲选曲-特效录
							入-配音合成等一系列工作。
						</view>
					</view>
				</view> -->
			</view>
			<view class="resume-list">
				<view class="list-title flex">
					<view class="title">专业技能<!-- <text>必填</text> --></view>
					<view class="tip flex_item">
						<view class="tip-img3"><image src="../../static/img/img14.jpg"></image></view>
						<view class="tip-text">添加</view>
					</view>
				</view>
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon1"><image src="../../static/img/icon_jineng.png"></image></view>
						<view class="list-name">Adobe Premiere</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx">熟练程度：精通</view>
					</view>
				</view> -->
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon1"><image src="../../static/img/icon_jineng.png"></image></view>
						<view class="list-name">Adobe Premiere</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx">熟练程度：精通</view>
					</view>
				</view> -->
				<!-- <view class="list-box">
					<view class="list flex">
						<view class="list-icon1"><image src="../../static/img/icon_jineng.png"></image></view>
						<view class="list-name">Adobe Premiere</view>
						<view class="tip flex_item">
							<view class="tip-img"><image src="../../static/img/img16.jpg"></image></view>
							<view class="tip-text1">编辑</view>
						</view>
					</view>
					<view class="list-info">
						<view class="list-tetx">熟练程度：精通</view>
					</view>
				</view> -->
			</view>
			<view class="resume-list">
				<view class="list-title flex">
					<view class="title">自我评价<!-- <text>必填</text> --></view>
					<view class="tip flex_item">
						<view class="tip-img"><image src="../../static/img/img15.png"></image></view>
						<view class="tip-text">编辑</view>
					</view>
				</view>
				<view class="list-textarea">
					<view class="text-box uni-textarea">
						<textarea placeholder-style="color:#B9B9B9" v-model="evaluation" :placeholder="placeholder" @blur="bindTextAreaBlur"></textarea>
					</view>
				</view>
			</view>
		</view>
		<view class="foot-box">
			<view class="Tips">人家也是有底线的~</view>
			<view class="Tips">还有什么要补充的吗，可以反馈给我们哦~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				placeholder:'介绍一下自己，让别人眼熟你吧~',
				evaluation:''
			}
		},
		onLoad() {

		},
		methods: {}
	}
</script>

<style lang="scss">
	page {
		background: #ffffff;
		font-size: 28rpx;
	}
	.content{
		height: 100%;
	}
	.Top-Nav{
		height: 200rpx;
		background-image: url(../../static/img/img07.jpg);
		background-size: 100% 100%;
		padding: 0rpx 80rpx;
		.resume-name{
			padding: 25rpx 45rpx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			background-color: #FFFFFF;
			border-radius: 7rpx;
			border-top-left-radius: 35rpx;
			border-bottom-right-radius: 35rpx;
			font-size: 32rpx;
			.resume-img{
				width: 40rpx;
				height: 40rpx;
				padding-right: 15rpx;
			}
		}
		.borde{
			border-radius: 7rpx !important;
			border-top-right-radius: 35rpx !important;
			border-bottom-left-radius: 35rpx !important;
		}
	}
	.resume{
		padding: 25rpx 25rpx;
		color: #333333;
		font-size: 28rpx;
		.resume-info{
			margin-bottom: 40rpx;
			.portrait{
				border-radius:100%;
				width: 150rpx;
				height: 150rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius:100%;
				}
			}
			.info{
				padding-left: 25rpx;
				width: 75%;
				.info-tpl{
					.name{
						font-size: 40rpx;
						text{
							margin-left: 25rpx;
							font-size: 28rpx;
							background-color: #EEFAF9;
							color: #62CECA;
							border: 2rpx solid #62CECA;
							padding: 2rpx 10rpx;
							border-radius: 10rpx;
						}
					}
				}
				.info-text{
					padding-top: 25rpx;
					text{
						color: #79D5D2;
						padding: 0rpx 20rpx;
					}
				}
			}
		}
	}
	.information{
		margin-bottom: 20rpx;
		.information-img{
			width: 28rpx;
			height: 35rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.img1{
			width: 35rpx;
			height: 30rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.img2{
			width: 40rpx;
			height: 40rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.information-info{
			padding-left: 30rpx;
		}
	}
	.resume-list{
		margin-top: 80rpx;
		.list-title{
			padding-bottom: 30rpx;
			.title{
				font-size: 40rpx;
				text{
					margin-left: 25rpx;
					font-size: 28rpx;
					background-color: #EEFAF9;
					color: #62CECA;
					border: 2rpx solid #62CECA;
					padding: 2rpx 10rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
	.list-box{
		border-bottom: 2rpx solid #F9F9F9;
		padding-top: 10rpx;
		padding-bottom: 50rpx;
		.list{
			font-size: 36rpx;
			.list-icon{
				width: 35rpx;
				height: 35rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.list-icon1{
				width: 30rpx;
				height: 40rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.list-name{
				width: 70%;
			}
		}
		.list-info{
			padding-left: 50rpx;
			.list-tetx{
				padding-top: 20rpx;
				color: #8E8E8E;
			}
			.list-position{
				color: #5F5F5F;
				padding-top: 20rpx;
				font-size: 32rpx;
			}
		}
	}
	.list-textarea{
		margin-top: 25rpx;
		background-color: #F2F2F2;
		padding: 25rpx 25rpx;
		.text-box {
			height: 200rpx;
			textarea {
				font-size: 28rpx;
				width: 100%;
				height: 100%;
				color: #686868;
			}
		}
	}
	.foot-box{
		text-align: center;
		margin-top: 100rpx;
		margin-bottom: 50rpx;
		color: #C2C2C2;
		.Tips{
			padding-top: 15rpx;
		}
	}
.tip{
	font-size: 30rpx;
	padding: 0rpx 25rpx;
	padding-top: 5rpx;
	padding-bottom: 8rpx;
	box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.2);
	border-radius: 50rpx;
	.tip-img{
		width: 30rpx;
		height: 30rpx;
		padding-right: 15rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.tip-img3{
		width: 35rpx;
		height: 35rpx;
		padding-right: 15rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.tip-text{
		color: #79D5D2;
	}
	.tip-text1{
		color: #3A3A3A;
	}
}
</style>

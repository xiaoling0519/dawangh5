<template>
	<view class="container">
		<view class="list">
			<view class="list-cont">
				<view class="title flex">
					<view class="name">服务员</view>
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
				<view class="shop flex_item">
					<view class="portrait"><image src="../../static/img/img28.png"></image></view>
					<view class="shop-text">
						<view class="name clamp">明珠之星商务酒店</view>
						<view class="about flex">
							<view>0-50人<text>|</text>餐饮服务</view>
							<view>7月29日</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-cont">
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
				<view class="shop flex_item">
					<view class="portrait"><image src="../../static/img/img28.png"></image></view>
					<view class="shop-text">
						<view class="name clamp">明珠之星商务酒店</view>
						<view class="about flex">
							<view>0-50人<text>|</text>餐饮服务</view>
							<view>7月29日</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-cont">
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
				<view class="shop flex_item">
					<view class="portrait"><image src="../../static/img/img28.png"></image></view>
					<view class="shop-text">
						<view class="name clamp">明珠之星商务酒店</view>
						<view class="about flex">
							<view>0-50人<text>|</text>餐饮服务</view>
							<view>7月29日</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-cont">
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
				<view class="shop flex_item">
					<view class="portrait"><image src="../../static/img/img28.png"></image></view>
					<view class="shop-text">
						<view class="name clamp">明珠之星商务酒店</view>
						<view class="about flex">
							<view>0-50人<text>|</text>餐饮服务</view>
							<view>7月29日</view>
						</view>
					</view>
				</view>
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
		width: 100%;
		height:100%;
	}
	.container{
		height:100%;
		font-size: 28rpx;
		.banner{
			height:300rpx;
			width: 100%;
		}
	}
	// .list-top{
	// 	width: 100%;
	// 	position: fixed;
	// 	top: 0;
	// 	z-index: 9999;
	// }
	//列表
	.list{
		width: 100%;
		padding: 0rpx 25rpx;
		position: absolute;
	}
	.list-cont{
		padding: 25rpx 0rpx;
		width: 93%;
		border-bottom: 2rpx solid #F9F9F9;
		.title{
			font-size: 35rpx;
			font-weight: 600;
			.name{
				width: 60%;
				text{
					font-size: 22rpx;
					background-color:#CBFAF8 ;
					color: #6ED4D0;
					padding: 5rpx 12rpx;
					margin-right: 25rpx;
				}
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
				color: #B6B6B6;
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
		.shop{
			.portrait{
				border-radius: 100%;
				width: 100rpx;
				height: 100rpx;
				margin-right: 25rpx;
				image{
					width: 100rpx;
					height: 100rpx;
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
					text{
						padding: 0rpx 10rpx;
					}
				}
			}
		}
	}
	/* 字体图标 */
	@font-face {
		font-family: "HM-FD-font";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALAAAsAAAAABpQAAAJzAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgp4gQIBNgIkAwwLCAAEIAWEbQc5G8sFERWMIbIfCbbzqA4hp7InSBibVsYGb4J42o82b3e/nJlHMw/NHbGOlwKJRCRpwzPtpAECCOZubdqxjYpQLMlVg+70/08edrgQOtx2ukpVyApZn+dyehPoQObHo3O85rYx9vOjXoBxQIHugW2yIkqIW2QXcScu4jwE8CSWbKSmrqUHFwOaJoCsLM5P4haSGIxRcRHshrUGucLCVcfqI3AZfV/+USguKCwNmtsxVztDxU/n55C+3W0Z4QQpEOTNFqCBbMCAjDUWB9CIwWk87aa70cYgqLkyd3dEmm+18R8eKATEBrV7A5CulBT8dKiWOYZk412XNcDdKSEKSGODnyKIDl+dmVt9/Dx4pu/xyeutkMlHISGPTsPCnoTNP9nOT6wTtDdlO6dPr47efvj942lkYuQzrhMKEjq9N6y98P3340gmlJ/RStUD6F31CAEEPtUW94/7rf+7XgaAz57X0ZHXAGsFFwVgw38yALuMb0IBbVyNamFYEw4oKMDTj3AHRQP5Pt4dci9VwSVkRNQh5r7CLskZadhsWHhRDBsXczk8ZYk3ewnCxmQeQKa3BOHvA8XXO2j+vqRhf7CE+sPmn4anvoL29JLa4qqaUQkmoK+QG2osCckq7txi2leK86aIPyJ3eQZ8xytXYmyQ51jQndJAxIJlqiGSLsOqImiZCjTiZCJt6Lq26U2OoXqwUo0hRaAE0K5AziANy/uLVeXzWyjVqyjcoeupjxDr5MMDn8MDkLG9Aenu5ZrOSSoghAUsRmogkkahSoWAtnlUARnCkY3It0Iu7mWhdmd9Z/19BwBP6GidEi0G56opckXTGZVSPxgAAAA=');
	}
	.iconfont {
		font-family: "HM-FD-font" !important;
		font-size: 13px;
		font-style: normal;
		color: #757575;
		&.triangle {
			&:before {
				content: "\e65a";
			}
		}
		&.selected {
			&:before {
				content: "\e607";
			}
		}
	}
	
</style>

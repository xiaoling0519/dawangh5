<template>
	<view class="content">
		<view class="top_header">
			<!-- 顶部导航栏 -->
			<view class="top-address flex_item">
				<view class="header flex_item" @click="addr">
					<image class="icon" src="../../static/img/img01.jpg"></image>
					<view class="addr">温州<text class="iconfont iconenter"></text></view>
				</view>
				<view class="input-box">
					<view class="iconfont iconsearch"></view>
					<input placeholder="默认关键字" placeholder-style="color:#c0c0c0;" @tap="clickSearch()" />
				</view>
			</view>
			<view class="zhanwei"></view>
			<!-- 轮播图 -->
			<view class="swiper">
				<view class="swiper-box">
					<swiper circular="true" autoplay="true" @change="swiperChange">
						<swiper-item v-for="swiper in carouselList" :key="swiper.id">
							<image :src="swiper.img"></image>
						</swiper-item>
					</swiper>
					<view class="indicator">
						<view class="dots" v-for="(swiper, index) in carouselList" :class="[swiperCurrent >= index ? 'on' : '']" :key="index"></view>
					</view>
				</view>
			</view>
			<!-- 类别 -->
			<view class="category flex_item">
				<view class="category-tpl" @click="navTo('/pages/Parttimejob/Hotjobs')">
					<view class="icon"><image class="img" src="/static/img/img02.jpg"></image></view>
					<view class="name">热门职位</view>
				</view>
				<view class="category-tpl" @click="navTo('/pages/nearby/nearby')">
					<view class="icon"><image class="img" src="/static/img/img33.png"></image></view>
					<view class="name">附近职位</view>
				</view>
				<view class="category-tpl" @click="navTo('/pages/quickentry/quickentry')">
					<view class="icon"><image class="img" src="/static/img/img34.png"></image></view>
					<view class="name">快速入职</view>
				</view>
				<view class="category-tpl" @click="navTo('/pages/Parttimejob/Parttimejob')">
					<view class="icon"><image class="img" src="/static/img/img35.png"></image></view>
					<view class="name">兼职</view>
				</view>
			</view>
			<view class="scroll-list flex_item" scroll-x>
				<view class="img"><image src="../../static/img/img03.jpg"></image></view>
				<scroll-view class="scoll-tpl" scroll-x>
					<view class="scoll-box" v-for="(ls,index) in ScrollList" :key="index">
						<view class="scoll-img"><image :src="ls.icon"></image></view>
						<view class="scoll-name clamp">{{ ls.name }}</view>
					</view>
				</scroll-view>
				<view class="img"><image src="../../static/img/img04.jpg"></image></view>
			</view>
			<view class="list">
				<view class="list-top flex">
					<view class="list-nav flex_item">
						<image class="nav-img" src="../../static/img/img06.jpg"></image>
						<view class="nav-tip" @click="tabtap(ls.id)" v-for="ls in NavList" :key="ls.id" :class="{ active: ls.id === currentId }">
							{{ls.name}}
						</view>
					</view>
					<view class="all">全部职位<text class="iconfont iconenter"></text></view>
				</view>
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
					<view class="shop flex_item">
						<view class="portrait"><image src="../../static/img/img28.png"></image></view>
						<view class="shop-text">
							<view class="name clamp">明珠之星商务酒店</view>
							<view class="about">0-50人<text>|</text>餐饮服务</view>
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
							<view class="about">0-50人<text>|</text>餐饮服务</view>
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
							<view class="about">0-50人<text>|</text>餐饮服务</view>
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
							<view class="about">0-50人<text>|</text>餐饮服务</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="addr-box" v-show="addrShow">
			 <Citylist :getCity="getCity"></Citylist>
		</view>
	</view>
</template>

<script>
	import Citylist from '@/components/citylist/citylist.vue'
	export default {
		 components:{
		        Citylist,
		   },
		data() {
			return {
				addrShow:false,//定位城市
				navP:0,// 导航栏透明度
				pageProportion: 0, //保存页面基于750宽度的比例
				swiperHeight: 0,
				swiperCurrent: 0,//轮播图
				carouselList:[{
					img:'/static/img/banner.png'
				}],//轮播图列表
				ScrollList:[{
					id:1,
					icon:'/static/img/img36.png',
					name:'电影院'
				},{
					id:2,
					icon:'/static/img/img37.png',
					name:'KTV'
				},{
					id:3,
					icon:'/static/img/img38.png',
					name:'酒店住宿'
				},{
					id:4,
					icon:'/static/img/img39.png',
					name:'工程建设'
				},{
					id:5,
					icon:'/static/img/img40.png',
					name:'加油站'
				}],
				NavList:[{
					id:1,
					name:'最新'
				},{
					id:2,
					name:'最热'
				}],
				currentId:1,
			}
		},
		onLoad() {

		},
		methods: {
			addr(){
				this.addrShow = true;
			},
			 getCity(city){
			            // city 城市名称
			},
			//切换导航栏
			tabtap(item) {
				// 获取当前点击的id
				this.currentId = item;
			},
			navTo(url) {
				uni.navigateTo({
					url
				});
			},
		}
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
    .addr-box{
		position: fixed;
		top: 120rpx;
		left: 25rpx;
		background-color: #FFFFFF;
		width: 94%;
		height: 1130rpx;
		z-index: 999;
		border-radius: 15rpx;
		box-shadow: 1upx 20upx 35upx rgba(0, 0, 0, 0.4);
	}
	.top_header {
		.top-address{
			background-color: #FFFFFF;
			padding:0rpx 25rpx;
			font-size: 30rpx;
			position: fixed;
			top: 0;
			width: 100% !important;
			z-index: 999;
			//地址
			.header {
				height: 100rpx;
				.icon{
					width: 35rpx;
					height: 40rpx;
				}
				.addr {
					padding-left: 15rpx;
					color: #333333;
				}
			}
			//搜索框
			.input-box {
				width: 70%;
				height: 70rpx;
				background-color: #f5f5f5;
				border-radius: 50rpx;
				position: relative;
				display: flex;
				align-items: center;
				padding-left: 25rpx;
				.iconfont{
					color:#B3B3B3 ;
				}
				input {
					padding-left: 15rpx;
					height: 28rpx;
					font-size: 28rpx;
				}
			}
		}
		.zhanwei{
			width: 100% !important;
			height: 100rpx;
		}
		//轮播图
		.swiper {
			width: 100%;
			display: flex;
			justify-content: center;
			.swiper-box {
				width: 100%;
				height: 280rpx;
				overflow: hidden;
				background-color: #00BFFF;
				//兼容ios，微信小程序
				position: relative;
				z-index: 1;
				swiper {
					width: 100%;
					height: 280rpx;
					swiper-item {
						image {
							width: 100%;
							height: 280rpx;
						}
					}
				}
				.indicator {
					position: absolute;
					bottom: 20upx;
					left: 20upx;
					background-color: rgba(255, 255, 255, 0.4);
					width: 150upx;
					height: 5upx;
					border-radius: 3upx;
					overflow: hidden;
					display: flex;
					.dots {
						width: 0upx;
						background-color: rgba(255, 255, 255, 1);
						transition: all 0.3s ease-out;
						&.on {
							width: (100%/3);
						}
					}
				}
			}
		}
	}
	// 类别
	.category{
		margin-top: 25rpx;
		background-color: #54CAC6;
		width: 100%;
		padding: 25rpx 50rpx;
		.category-tpl{
			margin-right: 10%;
			text-align: center;
			.icon{
				width: 100rpx;
				height: 100rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}
			.name{
				font-size: 30rpx;
				color: #FFFFFF;
				padding-top: 15rpx;
				
			}
		}
		
	}
	//滑动
	.scroll-list{
		width: 100%;
		margin: 50rpx 0rpx;
		.img{
			width: 35rpx;
			height: 150rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.scoll-tpl{
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			padding-left: 25rpx;
			.scoll-box {
					margin-right: 25rpx;
					text-align: center;
					display: inline-block;
					font-size: 23rpx;
					color: #5ECDC9;
					width: 110rpx;
					.scoll-img {
						width: 100%;
						height: 75rpx;
						image {
							width: 75rpx;
							height: 100%;
							border-radius: 45%;
						}
					}
					.scoll-name {
						width: 100%;
						padding-top: 15rpx;
					}
				}
		}
	}
    .list{
		width: 100%;
		padding: 25rpx 25rpx;
		.list-top{
			border-bottom: 2rpx solid #F9F9F9;
			padding-bottom: 25rpx;
			.list-nav{
				.nav-img{
					width: 50rpx;
					height: 42rpx;
					margin-right: 15rpx;
				}
				.nav-tip{
					margin: 0rpx 25rpx;
					color:#BABABA ;
				}
				.active{
					border-bottom: 4rpx solid #5DCDC9;
					color:#5DCDC9;
				}
			}
			.all{
				color:#5DCDC9;
				padding-right: 45rpx;
			}
		}
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
		.shop{
			.portrait{
				border-radius: 100%;
				width: 100rpx;
				height: 100rpx;
				margin-right: 25rpx;
				image{
					width: 100%;
					height: 100%;
				}
				
			}
			.shop-text{
				width: 80%;
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
</style>

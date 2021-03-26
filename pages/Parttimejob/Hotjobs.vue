<template>
	<view class="container">
		<view class="list-top">
			<!-- <image class="banner" src="/static/img/img12.jpg"></image> -->
			<sl-filter
				:ref="'slFilter'"
				:topFixed="true"
				:isTransNav="true"
				:navHeight="0"
				:color="titleColor"
				:themeColor="themeColor"
				:menuList="menuList"
				@result="result"
			></sl-filter>
		</view>
		<view class="list">
			<view class="list-cont">
				<view class="title flex">
					<view class="name"><text>急聘</text>服务员</view>
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
					<view class="name clamp"><text>置顶</text>服务员</view>
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
</template>

<script>
	import slFilter from '@/components/sl-filter/sl-filter.vue';
	export default {
		components: {
			slFilter
		},
		data() {
			return {
			isShowBottom : false,//底部弹窗开关
			isShowLeftFri: false,//先显示阴影，再显示侧滑内容，加个延时不让页面闪动体验会更好点
			themeColor: '#EDFAF9',//选择内容字体颜色
			titleColor: '#666666',//导航栏字体颜色
			filterResult: '',
			menuList: [{
				title: '全温州',
				detailTitle: '请选择职位类型',
				isSort: true,//为true时，为单选排序筛选方式。
				reflexTitle: true,//是否将选择的结果映射到菜单title上。只有当isMutiple不为true时生效。
				// defaultSelectedIndex: 1,//默认选中的选项，可不设置。值为默认选中项的index或index的数组。
				id:1,
				detailList: [{
					title: '不限',
					value: ""
				},{
					title: '职位1',
					value: '职位1'
				},{
					title: '职位2',
					value: '职位2'
				},{
					title: '职位3',
					value: '职位3'
				}]
			},{
				title: '职位类型',
				id:2,
				isSort: true,
				reflexTitle: true,
				detailList: [{
					title: '不限',
					value: ''
				},{
					title: '月薪1',
					value: '月薪1'
				},{
					title: '月薪2',
					value: '月薪2'
				},{
					title: '月薪3',
					value: '月薪3'
				}]
			},{
				title: '薪资待遇',
				id:3,
				isSort: true,
				reflexTitle: true,
				detailList: [{
					title: '1000以下',
					value: ''
				},{
					title: '1000-2000',
					value: '1000-2000'
				},{
					title: '2000-4000',
					value: '2000-4000'
				},{
					title: '4000-6000',
					value: '4000-6000'
				},{
					title: '6000-8000',
					value: '6000-8000'
				},{
					title: '8000-10000',
					value: '10000-12000'
				}]
			},{
				title: '筛选',
				id:4,
				// isSort: true,
				isMutiple: false,//单选还是多选
				detailTitle: '性别要求',
				// defaultSelectedIndex: 1,//多选默认选中的选项，可不设置。值为默认选中项的index或index的数组。
				detailList: [{
					title: '全部',
					value: ''
				},{
					title: '男生可做',
					value: '男生可做'
				},{
					title: '女生可做',
					value: '女生可做'
				}]
			}],
		};
		},
		
		onLoad() {},
		methods: {
			result(val) {
				console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
			},
		}
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
		// .banner{
		// 	height:300rpx;
		// 	width: 100%;
		// }
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
		padding: 25rpx 25rpx;
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
				color:#A2A2A2;
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

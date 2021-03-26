<template>
	<view class="container">
		<view class="search"><uni-search-bar placeholder="请输入职业关键字" :bgColor="bgColor" :radius="100" @confirm="search" @input="input" ></uni-search-bar></uni-search-bar></view>
		<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in flist" :key="item.id" class="f-item b-b active" @click="tabtap(item)">{{ item.cate_name }}</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<!-- <view class="s-list">
				<view class="list-tpl">厨师</view>
				<view class="list-tpl">服务员</view>
				<view class="list-tpl">店长</view>
				<view class="list-tpl">洗碗工</view>
				<view class="list-tpl">清洁工</view>
			</view> -->
		</scroll-view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			bgColor:'#F2F2F2',
			tabScrollTop: 0,
			currentId: 1,
			flist: [
				{
				id:1,
				cate_name:'餐饮',
			},{
				id:2,
				cate_name:'服装',
			},{
				id:3,
				cate_name:'汽车维修',
			},{
				id:4,
				cate_name:'美发',
			},{
				id:5,
				cate_name:'水果',
			},
			{
				id:1,
				cate_name:'餐饮',
			},{
				id:2,
				cate_name:'服装',
			},{
				id:3,
				cate_name:'汽车维修',
			},{
				id:4,
				cate_name:'美发',
			},{
				id:5,
				cate_name:'水果',
			},
			{
				id:1,
				cate_name:'餐饮',
			},{
				id:2,
				cate_name:'服装',
			},{
				id:3,
				cate_name:'汽车维修',
			},{
				id:4,
				cate_name:'美发',
			},{
				id:5,
				cate_name:'水果',
			}
			],
		};
	},
	onLoad() {
	},
	// 监听导航栏输入框点击事件
	onNavigationBarSearchInputClicked(e) {
		uni.navigateTo({
			url: '/pages/product/search'
		});
	},
	methods: {
		//一级分类点击
		tabtap(item) {
			// 获取当前点击的id
			this.currentId = item.id;
		},
		
	}
};
</script>

<style lang="scss">
page{
	width: 100%;
	height: 100%;
	.container{
		width: 100%;
	}	
}
.content {
	height: 100%;
	display: flex;
}
.search{
	width: 92%;
	padding: 25rpx 25rpx;
	height: 100rpx;
}
.left-aside {
	flex-shrink: 0;
	width: 250rpx;
	height: 100%;
	background-color: #F2F4F4;
}
.f-item {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100rpx;
	font-size: 35rpx;
	color: #333333;
	position: relative;
	&.active {
		color: #53CAC6;
		background: #FFFFFF;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			height: 36rpx;
			width: 8rpx;
			background-color: #53CAC6;
			border-radius: 0 4px 4px 0;
			opacity: 0.8;
		}
	}
}

.right-aside {
	flex: 1;
	overflow: hidden;
	padding-left: 35rpx;
	padding-right: 20rpx;
	background:#FFFFFF ;
	.s-list{
		.list-tpl{
			padding: 25rpx 0rpx;
			border-bottom: 2rpx solid #F5F5F5;
			font-size: 32rpx;
			color:#868686 ;
		}
	}
}
</style>

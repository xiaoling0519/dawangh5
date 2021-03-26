<template>
	<view class="container">
		<view class="company">
			<view class="Maskimg"><image src="/static/img/img08.jpg"></image></view>
			<view class="company-list flex">
				<view class="info">
					<view class="info-name">君庭雨连锁酒店有限公司</view>
					<view class="info-tip"><text>民营</text><text>50-1000人</text><text>未融资</text></view>
				</view>
				<view class="portrait"><image src="../../static/img/img43.png"></image></view>
			</view>
			<view class="describe">餐饮商务</view>
		</view>
		<view class="details">
			<view class="details-nav flex">
				<view class="nav-name" @click="tabtap(ls.id)" v-for="ls in DetailsName" :key="ls.id" :class="{ active: ls.id === currentId }">
					{{ls.name}}
				</view>
			</view>
			<view class="introduce" v-show="introduce">
				<view class="list">
					<view class="info flex_item">
						<view class="tip"><image src="/static/img/img10.jpg"></image></view>
						<view class="address">公司地址</view>
					</view>
					<view class="address-text flex_item">
						<image class="img" src="/static/img/img11.jpg"></image>
						<view class="clamp">浙江省温州市瓯海区瓯海大道666号</view>
					</view>
				</view>
				<view class="list top">
					<view class="info flex_item">
						<view class="tip"><image src="/static/img/img10.jpg"></image></view>
						<view class="address">公司简介</view>
					</view>
					<view class="address-text">
						君庭雨连锁酒店有限公司坐落于美丽的温州，是一家专门从						事酒店服务、休闲餐饮与商务的工商业。酒店周围交通十分						便捷，商业活动繁华。拥有为商务人士设身打造的商务房和						标准房。商务房内书写功能宽敞，您的一切移动办公需求酒						店已经为您准备妥当。为了使您第二天能有更充分的精力投						入工作，酒店专门为商务人士设计的整体卫浴，足够解除一						天的工作疲劳。
					</view>
				</view>
				<view class="list top">
					<view class="info flex_item">
						<view class="tip"><image src="/static/img/img10.jpg"></image></view>
						<view class="address">工商信息</view>
					</view>
					<view class="tpl flex_item">
						<view class="name">公司名称</view>
						<view class="tip">君庭雨连锁酒店有限公司</view>
					</view>
					<view class="tpl flex_item">
						<view class="name">成立时间</view>
						<view class="tip">2011年8月6日</view>
					</view>
					<view class="tpl flex_item">
						<view class="name">注册资本</view>
						<view class="tip">1000万人民币</view>
					</view>
					<view class="tpl flex_item">
						<view class="name">法定代表人</view>
						<view class="tip">林雨婷</view>
					</view>
				</view>
			</view>
			<view class="position" v-show="position">22</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				DetailsName:[{
					id:1,
					name:'公司介绍'
				},{
					id:2,
					name:'在招职位'
				}],
				currentId:1,
				introduce:true,
				position:false,
				
			};
		},
		onLoad() {},
		methods: {
			//切换导航栏
			tabtap(item) {
				// 获取当前点击的id
				this.currentId = item;
				if(this.currentId == 1){
					this.introduce = true;
					this.position = false;
				}
				if(this.currentId == 2){
					this.position = true;
					this.introduce = false;
				}
			},
		}
	};
	</script>
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
		height: 100%;
	}
	.container{
		font-size: 28rpx;
		height: 100%;
	}
	.company{
		height:450rpx;
		background-image: url(../../static/img/img09.jpg);
		background-size: 100% 100%;
		position: relative;
		.Maskimg{
			position: absolute;
			top: 0;
			width: 100%;
			height: 450rpx;
			image{
				width: 100%;
				height: 100%;
				opacity: 0.2;
			}
		}
		.company-list{
			position: absolute;
			z-index: 99;
	        padding: 0rpx 25rpx;
			padding-top: 120rpx !important;
			width: 92%;
			.info{
				.info-name{
					font-size: 35rpx;
				}
				.info-tip{
					padding-top: 25rpx;
					text{
						background:#57D3CF;
						color: #FFFFFF;
						margin-right: 25rpx;
						padding: 0rpx 15rpx;
						border-radius: 7rpx;
					}
				}
			}
			.portrait{
				width: 120rpx;
				height: 120rpx;
				right: 0;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.describe{
			position: absolute;
			bottom: 160rpx;
			padding: 0rpx 25rpx;
		}
	}
	.details{
		position: relative;
		margin-top: -130rpx;
		background-color: #FFFFFF;
		height: 500rpx;
		padding:30rpx 25rpx ;
		border-top-left-radius: 25rpx;
		border-top-right-radius: 25rpx;
		.details-nav{
			padding: 0rpx 160rpx;
			font-size: 30rpx;
			border-bottom:1px solid rgb(243,243,243);
			.nav-name{
				padding-bottom: 25rpx;
			}
			.active{
				color: #57D3CF;
				font-size: 35rpx;
				font-weight: 700;
				border-bottom:5rpx solid #57D3CF;
			}
		}
		
	}
	.introduce{
		.top{
			margin-top: 60rpx;
		}
		.list{
			padding: 25rpx 0rpx;
			border-bottom:1px solid rgb(243,243,243);
			.info{
				padding-bottom: 20rpx;
				.tip{
					width: 40rpx;
					height: 40rpx;
					padding-right: 25rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.address{
					font-size: 32rpx;
				}
			}
			.address-text{
				padding-top: 10rpx;
				color: #8A8A8A;
				font-size: 30rpx;
				.img{
					width: 30rpx;
					height: 35rpx;
					padding-right: 25rpx;
				}
			}
			.tpl{
				padding: 15rpx 0rpx;
				font-size: 30rpx;
				.name{
					color: #B7B7B7;
					width:180rpx;
				}
				.tip{
					color: #8A8A8A;
				}
			}
		}
	}
	
</style>

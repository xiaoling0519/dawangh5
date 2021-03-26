<template>
	<view class="citylist">
		<scroll-view :style="{'height':windowH}" scroll-y="true" :scroll-top="scrollTop"  show-scrollbar="false" @scroll="scroll" >
			<view>
				<view class="city-list-container">
					<!-- 定位城市 -->
					<view class="city-list-content" id="location_city">
						<view class="city-title">定位城市</view>
						<view class="city-list city-list-inline" @tap="location">
							<view class="location-city">{{locationCity}}</view>
						</view>
					</view>
					<!-- 热门城市 -->
					<view id="hotcity" class="city-list-content">
						<view class="city-title">
							{{hotcity.title}}
						</view> 
						<view class="city-list city-list-inline">
							<view class="city-item" v-for="(item,index) in hotcity.lists" :key="index" @tap="selectedCity(item)">
								{{item}}
							</view>
						</view>
					</view>
					<!-- 城市列表 -->
					<view id="citytitle" class="city-list-content">
						<view class="city_title_wrap" v-for="(city,index) in citylist" :key="index">
							<view class="city-title city-title-letter">
								{{city.title}}
							</view>
							<view class="city-list city-list-block">
								<view class="city-item" v-for="(item,index) in city.lists" :key="index" @tap="selectedCity(item)">
									{{item}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 固定顶部 -->
		<!-- <view class="fixtitle" :style="{transform:fixedStyle}">
			<view class="city-title">{{fixedTitle}}</view>
		</view> -->
		<!-- 侧边栏导航 -->
		<view class="navrightcity">
			<view class="nav-item nav-letter" @tap="scroll_to_city(0)">定</view>
			<view class="nav-item nav-letter" @tap="scroll_to_city(1)">热</view>
			<view v-for="(item,index) in citylist" :key="index" class="nav-item nav-letter" @tap="scroll_to_city(index+2)">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	import CL from './citylist.json'
	export default{
		props:{
			getCity:{
				type:Function,
				default:function(){}
			}
		},
		computed:{
			fixedTitle(){
				if (this.scrollY < 0) {
					return ''
				}
				return this.title && this.title[this.currentIndex]
			}
		},
		watch:{
			scrollY(newY){
				const {tops} = this
				const index = tops.findIndex((top, index) => {
					this.diff = tops[index + 1] - newY
					return newY >= top && newY < tops[index + 1]
				})
				this.currentIndex = index;
			},
			diff(newVal) {
				let fixedTop = (newVal > 0 && newVal < 30) ? newVal - 30 : 0
				if (this.fixedTop === fixedTop) {
					this.fixedStyle = `translate3d(0,0,0)`
				}
				this.fixedTop = fixedTop
				this.fixedStyle = `translate3d(0,${fixedTop}px,0)`
			}
		},
		data(){
			return{
				scrollY:-1,//滚动记录
				tops:[],//每一个.city-title 距离顶部的距离
				diff:-1, // 
				citylist:{},
				hotcity:{},
				currentIndex:0,
				title:[],
				windowH:"",
				scrollTop:0,
				fixedStyle:"translate3d(0,0,0)",
				fixedTop:0,
				locationCity:"定位中...."
			}
		},
		methods:{
			// 初始化数据列表
			initCityList(){
				let title = [];
				this.hotcity = CL.hotcity;
				this.citylist = CL.city
				title.push("定位城市");
				title.push(this.hotcity.title);
				for(let i in this.citylist){
					title.push(this.citylist[i].title)
				}
				this.title = title;
				let sysInfo = uni.getSystemInfoSync();
				this.windowH = sysInfo.windowHeight + "px"
			} ,
			initTop(){
				// 1. 初始化tops
				const query = uni.createSelectorQuery();
				query.select('#location_city').boundingClientRect()
				.select('#hotcity').boundingClientRect()
				.selectAll('.city_title_wrap').boundingClientRect()
				.exec((list)=>{
					let tops = []
					let top = 0
					tops.push(top);
					if(list[0]){
						top += list[0].height;
						tops.push(top)
					}
					if(list[1]){
						top += list[1].height;
						tops.push(top)
					}
					if(list[2].length !== 0){
						for(let i in list[2]){
							top+= list[2][i].height
							tops.push(top);
						}
					}
					this.tops = tops;
				})
			},
			// 获取城市
			selectedCity(city){
				this.getCity&&this.getCity(city);
				console.log(city);
			},
			// 定位操作
			location(){
				console.log("触发了");
				let That = this;
				uni.getLocation({
				    type: 'wgs84',
					geocode:true,
				    success(res){
						console.log(res);
						That.locationCity = res.address&&res.address.city;
						this.getCity&&this.getCity(That.locationCity);
				    },
					fail(){
						That.locationCity = "定位失败，请点击重试"
					}
				});
			},
			// 滚动条Y距离
			scroll(e){
				this.scrollY = e.detail && e.detail.scrollTop;
			},
			// 滚动到指定位置
			scroll_to_city(index){
				this.scrollTop = this.tops[index]
			}
		},
		// 页面挂载后进行异步操作
		created(){
			this.initCityList();
		},
		mounted(){
			this.location();
			this.initTop();
		}
	}
</script>

<style lang="less">
	.citylist{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		font-size: 28rpx !important;
	}
	.city-list-container{
		width: 100%;
		height: 100%;
		background-color: #F2F2F2;
		font-size: 28rpx !important;
		color: #333;
		.city-list-content{
			// margin-right: 35px;
		}
		.city-title{
			padding-left: 15px;
			line-height: 30px;
		}
		.city-list{
			padding-right: 30px;
		}
		.city-title-letter {
			padding-left: 25px;
		}
		.city-list-block {
			background-color: #FFFFFF;
			.city-item {
				height: 44px;
				line-height: 44px;
				margin-left: 15px;
				// border-bottom: 1px solid #c8c7cc;
				&:last-child{
					border: 0;
				}
			}
		}
		.city-list-inline {
			background-color: #FFFFFF;
			padding-bottom: 8px;
			overflow: hidden;
			&::after{
				content: "";
				clear: both;
			}
			.location-city,.city-item {
				float: left;
				background: #fff;
				width: 25%;
				height: 33px;
				margin-top: 15px;
				// margin-left: 4%;
				padding: 0 4px;
				// border: 1px solid #e6e6e6;
				// border-radius: 3px;
				line-height: 33px;
				text-align: center;
				box-sizing: border-box;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.location-city{
				width: auto;
				min-width: 30%;
				padding: 0 20px;
			}
		}
	}
	.navrightcity {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		right: 30rpx;
		width: 35px;
		z-index: 10;
		text-align: center;
		font-size: 12px;
		.nav-item {
			height: 16px;
			height: 2.8vh;
		}
		.nav-letter {
			width: 15px;
			margin-left: 15px;
		}
	}
	.fixtitle{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
		.city-title{
			padding-left: 15px;
			line-height: 30px;
			font-size: 14px;
			color: #333;
			background-color: #ebebeb;
		}
	}
</style>

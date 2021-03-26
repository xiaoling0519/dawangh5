import Vue from 'vue'
import Vuex from 'vuex'
import api from '../config/api.js'
var isWxLoad = false;
var isKefuShezhi = false;
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		lbs: null,
		user: null,
		sign:0,//签到时间
		isClock : 0,//签到提醒
	},
	mutations: {
		/** 设置用户数据
		 * @param {Object} store
		 * @param {Object} user
		 */
		setUser(store, user) {
			store.user = user;
			uni.setStorage({
				key: 'w3.guaimeida.com',
				data: JSON.stringify(user)
			});
		},
		/**
		 * 设置定位信息
		 * @param {Object} store
		 * @param {Object} lbs
		 */
		setLbs(store, lbs) {
			store.lbs = lbs;
			uni.setStorage({
				key: 'lbs.guaimeida.com',
				data: JSON.stringify(lbs)
			});
		},
		/**
		 * 判断是否登录
		 * @param {Object} store
		 * @param {Object} $page
		 */
		checkLogin(store, data) {
			var that = this;
			var $page = data.page;
			var fn = data['fn'] || null;
			var isBing = data['bind'] != null ? data['bind'] : false ;//是否跳转绑定页面 false 表示需要跳转 true 不需要绑定
			var isLogin = data['isLogin'] != null ? data['isLogin'] : false;//是否跳转登录
			var isRz = data['isRz'] != null ? data['isRz'] : false;//是否跳转登录
			//微信小程序登录获取
			//#ifdef MP-WEIXIN
			var token = null;
			if($page.utils.isDefine($page.user)) {
				token = $page.user.token;	
			}
			if (!$page.utils.isDefine($page.user)) {
				if(isLogin) {
					this.commit('login', 'mp_weixin');
				}			
				return false;
			}
			//获取个人信息
			$page
				.utils
				.httpPostAsy($page.api.wxInit, {
					token: token
				})
				.then((res) => {
					uni.hideLoading();
					if (res.data.length <= 0) {
						if(isLogin) {
							this.commit('login', 'mp_weixin');
						}
						return;
					}
					that.commit('setUser', res.data);
					if(isBing) {
						if (fn != null) fn();
						return;
					}
					//未登录-跳转绑定登录
					if (res.data.is_reg == 0) {
						uni.showModal({
							title: '系统提示',
							content: '您还进行手机号码绑定，请点击绑定手机!',
							showCancel: false,
							success() {
								uni.navigateTo({
									url: '../login/bind_phone'
								});
			
							}
						});
					} else if(res.data.area == 0){
						uni.showModal({
							title: '系统提示',
							content: '您还未设置城市信息，请前往设置!',
							showCancel: false,
							success() {
								uni.navigateTo({
									url: '../user/userinfo/area'
								});
						
							}
						});
					}else {
						if (fn != null) fn();
					}
				})
				.catch(error => {});
			//#endif
		    
			//APP登录
			//#ifdef APP-PLUS
			var token = null;
			if($page.utils.isDefine($page.user)) {
				token = $page.user.token;	
			}
			if (!$page.utils.isDefine($page.user)) {
				if(isLogin) {
					this.commit('login', 'app');
				}
				return false;
			}
			$page
				.utils
				.httpPostAsy($page.api.wxInit, {
					token	 : token,
					clientid : plus.push.getClientInfo().clientid,
					plaform  : uni.getSystemInfoSync().platform
				})
				.then((res) => {
					uni.hideLoading();
					if (res.data.length <= 0) {
						if(isLogin) {
							this.commit('login', 'app');
						}
						return;
					}
					that.commit('setUser', res.data);
					if (fn != null) fn();
					if(res.data.area == 0){
						uni.showModal({
							title: '系统提示',
							content: '您还未设置城市信息，请前往设置!',
							showCancel: false,
							success() {
								uni.navigateTo({
									url: '../user/userinfo/area'
								});
						
							}
						});
						return;
					}
				})
				.catch(error => {});
			//#endif
			//H5登录获取功能。
			// #ifdef  H5
			var token = $page.$route.query.token || null;
			
			if ($page.utils.isDefine($page.user)) {
				token = $page.user.token;
			}

			if (!$page.utils.isDefine($page.user) && token == null) {
				this.commit('login', 'wechat');
				return false;
			}
			//获取个人信息
			$page
				.utils
				.httpPostAsy($page.api.wxInit, {
					token: token
				})
				.then((res) => {
					uni.hideLoading();
					if (res.data.length <= 0) {
						that.commit('login', 'wechat');
						return;
					}
					that.commit('setUser', res.data);
					if(isBing) {
						if (fn != null) fn();
						return;
					}
					
					//未登录-跳转绑定登录
					if (res.data.is_reg == 0) {
						uni.showModal({
							title: '系统提示',
							content: '您还进行手机号码绑定，请点击绑定手机!',
							showCancel: false,
							success() {
								uni.navigateTo({
									url: '/pages/login/bind_phone'
								});

							}
						});
					}else if(res.data.area == 0){
						uni.showModal({
							title: '系统提示',
							content: '您还未设置城市信息，请前往设置!',
							showCancel: false,
							success() {
								uni.navigateTo({
									url: '/pages/user/userinfo/area'
								});
						
							}
						});
					} else {
						
						if(res.data.is_idcard == 0 && isRz) {
							uni.showModal({
								title: '系统提示',
								content: '您还未进行认证!',
								showCancel: false,
								success() {
									uni.setStorage({key:'is_rz.guaimeida.com',data:location.href});
									uni.navigateTo({
										url: '/pages/user/user_cert'
									});
								}
							});
						}
						
						if(!isKefuShezhi) {
							ysf('config', {
								uid  : res.data.id,
								name : res.data.nickname,
								mobile:res.data.mobile,
								success : function(){
									console.log('配置成功');
								},
								error:function(e){
									console.log(e);
								}
							});
							isKefuShezhi = true;
						}
						if (fn != null) fn();
					}
				})
				.catch(error => {});
			// #endif

			return true;
		},
		/**
		 * 支付类型
		 * @param {Object} store
		 * @param {Object} data
		 */
		payPayment:function(store, data){
			var $page = data.page;
			var isBalance = data.isBalance || 0;
			if($page.$deviceType == 'wechat') {
				if(data.afterFn != null) {
					data.afterFn();
				}
				uni.navigateTo({
					url : "/pages/user/pay/pay?buyType=" + data.buyType
					 + '&payType=' + data.payType + "&orderId=" + data.orderId + "&isBalance=" + isBalance
				});
			}
		},
		
		//#ifdef H5
		/**
		 * 微信公告拿配置信息
		 * @param {Object} store   
		 * @param {Object} type
		 */
		wxInit(store, data) {
			var $page = data.page;
			var fn = data.fn || null;
			if (isWxLoad) {
			//	if (fn != null) fn();
			//	return;
			}
			isWxLoad = true;
			$page
				.utils
				.httpPostAsy($page.api.wxConf, {
					url: window.location.href
				})
				.then(res => {
					$page.$wx.config({
						// debug: true,
						appId: res.data.appId,
						timestamp: res.data.timestamp,
						nonceStr: res.data.nonceStr,
						signature: res.data.signature,
						jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','openLocation','scanQRCode', 'getLocation', 'previewImage', 'chooseImage']
					});

					$page.$wx.ready(function() {
						if (fn != null) fn();
					});

					$page.$wx.error(function(res) {
						console.log('err', res)
					});
					//
				})
				.catch(err => {});

		},
		
		/**
		 * 微信支付[H5]
		 * @param {Object} store
		 * @param {Object} data
		 */
		checkPay: function(store, data) {
			var jsApiCall = function(){
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest',
					{
						appId : data.jsApiParameters.appId,
						timeStamp: data.jsApiParameters.timeStamp + '',
						nonceStr: data.jsApiParameters.nonceStr,
						package: data.jsApiParameters.package,
						signType: data.jsApiParameters.signType,
						paySign: data.jsApiParameters.paySign
					},
					 function(res){
						if(res.err_msg == "get_brand_wcpay_request:ok" ){
							if(data.fn != null) {
								data.fn('ok');
							}
						} else {
							if(data.fn != null) {
								data.fn('error');
							}
						}
					}
				);
			}
			
			try{
				if (typeof WeixinJSBridge == "undefined") {
					if (document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
					} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', jsApiCall);
						document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
					}
				} else {
					jsApiCall();
				}
			} catch(e){
				uni.showModal({
					title:e
				});
				if(data.fn != null) {
					data.fn('error');
				}
			}
		},
		//#endif
		
		//#ifdef APP-PLUS
		/**
		 * 微信支付[H5]
		 * @param {Object} store
		 * @param {Object} data
		 */
		checkPay: function(store, data) {
			uni.getProvider({
				service:'payment',
				success: (res) => {
					var payAr = res.provider;
					if(data['payType'] == 'wxpay' && !payAr.includes('wxpay')) {
						uni.showModal({title: '系统提示',content: "请安装微信客户端在尝试付款",showCancel: false});
						return ;
					}
					uni.requestPayment({
						provider:data['payType'],
						orderInfo:JSON.stringify(data.jsApiParameters),
						success: () => {
							if(data.fn != null) {
								data.fn('ok');
							}
						},
						fail:(error)=>{
							if(data.fn != null) {
								data.fn('error');
							}
						}
					});
				}
			});
		},
		//#endif
		
		
		//#ifdef MP-WEIXIN
		/**
		 * 微信支付[微信小程序]
		 * @param {Object} store
		 * @param {Object} data
		 */
		checkPay: function(store, data) {
			uni.requestPayment({
				provider: 'wxpay',
				timeStamp: data.jsApiParameters.timeStamp + '',
				nonceStr: data.jsApiParameters.nonceStr,
				package: data.jsApiParameters.package,
				signType: data.jsApiParameters.signType,
				paySign: data.jsApiParameters.paySign,
				success: () => {
					if(data.fn != null) {
						data.fn('ok');
					}
				},
				fail:(error)=>{
					if(data.fn != null) {
						data.fn('error');
					}
				}
			});
		},
		//#endif
		
		/**
		 * 登录用户
		 * @param {Object} store   
		 * @param {Object} type
		 */
		login(store, type) {
			if (type == 'wechat') {
				top.location.href = api.wxLogin + "?url=" + encodeURIComponent(top.location.href);
			} 
			//小程序登录	
			if (type == 'mp_weixin') {
				uni.navigateTo({
					url : "/pages/login/wxmp_login"
				})
			}
			//手机app
			if (type == 'app') {
				uni.navigateTo({
					url : "/pages/login/login"
				})
			}
		}
	},
});
export default store

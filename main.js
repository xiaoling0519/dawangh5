import Vue from 'vue'
import App from './App'
import utils from './ulit/comm.js'
import api from './config/api.js'
import store from './store'
import VueLazyload from 'vue-lazyload'  
//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
App.mpType = 'app';
Vue.prototype.utils = utils; //utils接口
Vue.prototype.api = api; //api接口
Vue.prototype.$store = store; //stroe
Vue.prototype.$deviceType = ''; 
Vue.use(VueLazyload);
//H5
//#ifdef H5
	var wx = require('jweixin-module');
	Vue.prototype.$wx = wx;
	Vue.prototype.$deviceType = 'wechat';
//#endif
//小程序
// #ifdef MP-WEIXIN
	Vue.prototype.$deviceType = 'mp_weixin';
// #endif
//APP
// #ifdef APP-PLUS
	Vue.prototype.$deviceType = 'app';
// #endif
//获取设备信息
uni.getSystemInfo({
	success:function(res){
		Vue.prototype.$device = res;
	}
});  
try {
	var user = uni.getStorageSync('com.da.wang');//用户
	console.log(user);
	if (utils.isDefine(user)) {
		store.commit('setUser', JSON.parse(user));
	}	
} catch (e) {
	console.log(e.message);
}

const app = new Vue({
	store,
    ...App
})
app.$mount()
  
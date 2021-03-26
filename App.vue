<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>
<style>      
	/*全局公共样式和字体图标*/
	@import '/static/css/public.css';
	@import url("/static/css/animate.css");
	page{ background: #FFFFFF;-webkit-text-size-adjust:none}
	 .clearfix{zoom:1}.clearfix:after{clear:both;display:block;visibility:hidden;overflow:hidden;height:0;content:'\20'}
	 button.nt{ background: transparent; font-size: 12px; padding: 0;border-radius: 0; color: #303033;margin: 0px;line-height: 1;overflow:visible}
	 button.nt::after{border: 0;}
	.fx-r{display: flex;flex-direction: row;flex-wrap:wrap;}
	.fx-h{display: flex;flex-direction: column;}
	.fx-ac{justify-content:center;}
	.fx-as{justify-content:flex-start;}
	.fx-ae{justify-content:flex-end;}
	.fx-bc{align-items:center;}
	.fx-be{align-items:flex-end;}
	.fx-bs{align-items:flex-start;}
	.fx-g1{flex-grow:1;}
	.fx-g2{flex-grow:2;}
	.fx-g3{flex-grow:3;}
	.fx-g4{flex-grow:4;}
	.fx-s{flex-shrink:0;}
	.pr{position: relative;}
	.pa{position: absolute;}
	.fl{float:left}
	.fr{float:right}
	.font-14{font-size: 14px!important;}
	.font-12{font-size: 12px!important;}
	.border-none{border:none!important;}
	.text-r{text-align: right}
	.text-l{text-align: left}
	.dn{display: none!important;}
	.db{display: block!important;}
	.mk{background: #000;opacity: 0.5;position: fixed;top:0px;left:0px;right:0px;bottom:0px;z-index: 100}
	@keyframes rotate{
	  from{transform: rotate(0deg)}
	  to{transform: rotate(359deg)}
	}
	@keyframes living {
		0%{transform: scale(1);opacity: 0.5;}
	    50%{transform: scale(1.5);opacity: 0;}
	    100%{transform: scale(1);opacity: 0.5;}
	}
	/**图片加载效果[适用H5]**/
	img[lazy=loading]{opacity: 0;}
	img[lazy=loaded] {transition: opacity 1s ease;}
	.loading{text-align: center;height: 30px;}
	.loading image{ width: 20px; height: 20px;animation: rotate 1.5s linear infinite; margin-right: 4px;}
	.loading text{ margin-left: 3px; position: relative;font-size: 12px;}
	.loading.complete{ font-size: 14px; color: #ccc; padding: 10px 0;}
	@keyframes rotate{from{transform: rotate(0deg)} to{transform: rotate(359deg)}}
	.m-10{ margin-top: 10rpx!important;}
	.m-20{ margin-top: 20rpx!important;}
	.m-30{ margin-top: 30rpx!important;}
	.m-40{ margin-top: 40rpx!important;}
	.m-50{ margin-top: 50rpx!important;}
	.m-60{ margin-top: 60rpx!important;}
	.m-70{ margin-top: 70rpx!important;}
	.m-80{ margin-top: 80rpx!important;}
	.m-90{ margin-top: 90rpx!important;}
	.m-100{ margin-top: 100rpx!important;}
	.m-110{ margin-top: 110rpx!important;}
	
	.ml-10{ margin-left: 10rpx!important;}
	.ml-20{ margin-left: 20rpx!important;}
	.ml-30{ margin-left: 30rpx!important;}
	.ml-40{ margin-left: 40rpx!important;}
	.ml-50{ margin-left: 50rpx!important;}
	.ml-60{ margin-left: 60rpx!important;}
	.ml-70{ margin-left: 70rpx!important;}
	.ml-80{ margin-left: 80rpx!important;}
	.ml-90{ margin-left: 90rpx!important;}
	.ml-100{ margin-left: 100rpx!important;}
	.ml-110{ margin-left: 110rpx!important;}
	.p-10{ padding: 10px 0;}
</style>
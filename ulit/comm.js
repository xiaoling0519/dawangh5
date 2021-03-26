
/**
 * @param  {string} text   提示内容 
 * @param  {int}    time 多少时间消失 
 * @return {function}  fn 函数
 * 
 */
const Tip = (text, time = 2000, fn = null) => {
	uni.showToast({
		'title'	: text,
		duration : time,
		icon:'none'
	});
  if (fn != null)  setTimeout(() => {fn();}, time);
  }
  /**
   * 加载数据
   */
  const loadIng = (title = false,mask = false) => {
	uni.showLoading({
		title: title ? title : "加载中...",
		mask : mask
	});
  }
  /**
	 * 判断是否微信
	 *  @return {bool}  是否微信
	 */
	function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

/**
 * 判断是否存在
 * @param {Object} value
 */
function isDefine(value) {
  if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof (value) == 'undefined') {
    return false;
  }
  else {
    value = value + "";
    value = value.replace(/\s/g, "");
    if (value == "") {
      return false;
    }
    return true;
  }
}
/**
 * 时间戳11位
 */
function timest() {
  var tmp = Date.parse( new Date() ).toString();
  tmp = tmp.substr(0,10);
  return tmp;
}
/** 
 * 时间戳格式化函数 
 * @param  {string} format    格式 
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
 * @return {string}           格式化的时间字符串 
 */
function date(format, timestamp) {
  var a, jsdate = ((timestamp) ? new Date(timestamp * 1000) : new Date());
  var pad = function (n, c) {
    n = n + "";
    if (n.length < c) {
      var i = c - n.length;
      var v = '';
      for (var j = 0; j < i; j++) {
        v += '0';
      }
      return v + n;
    } else {
      return n;
    }
  };
  var txt_weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  var txt_ordin = { "1": "st", "2": "nd", "3": "rd", "21": "st", "22": "nd", "23": "rd", "31": "st" };
  var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var f = {
    // Day 
    d: function () { return pad(f.j(), 2) },
    D: function () { return f.l().substr(0, 3) },
    j: function () { return jsdate.getDate() },
    l: function () { return txt_weekdays[f.w()] },
    N: function () { return f.w() + 1 },
    S: function () { return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th' },
    w: function () { return jsdate.getDay() }
    ,
    // Week 
    W: function () {
      var a = f.z(), b = 364 + f.L() - a;
      var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
      if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
        return 1;
      } else {
        if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
          nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
          return date("W", Math.round(nd2.getTime() / 1000));
        } else {
          return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
        }
      }
    },

    // Month 
    F: function () { return txt_months[f.n()] },
    m: function () { return pad(f.n(), 2) },
    M: function () { return f.F().substr(0, 3) },
    n: function () { return jsdate.getMonth() + 1 },
    t: function () {
      var n;
      if ((n = jsdate.getMonth() + 1) == 2) {
        return 28 + f.L();
      } else {
        if (n & 1 && n < 8 || !(n & 1) && n > 7) {
          return 31;
        } else {
          return 30;
        }
      }
    },
    //o not supported yet 
    Y: function () { return jsdate.getFullYear() },
    y: function () { return (jsdate.getFullYear() + "") },

    // Time 
    a: function () { return jsdate.getHours() > 11 ? "pm" : "am" },
    A: function () { return f.a().toUpperCase() },
    B: function () {
      // peter paul koch: 
      var off = (jsdate.getTimezoneOffset() + 60) * 60;
      var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
      var beat = Math.floor(theSeconds / 86.4);
      if (beat > 1000) beat -= 1000;
      if (beat < 0) beat += 1000;
      if ((String(beat)).length == 1) beat = "00" + beat;
      if ((String(beat)).length == 2) beat = "0" + beat;
      return beat;
    },
    g: function () { return jsdate.getHours() % 12 || 12 },
    G: function () { return jsdate.getHours() },
    h: function () { return pad(f.g(), 2) },
    H: function () { return pad(jsdate.getHours(), 2) },
    i: function () { return pad(jsdate.getMinutes(), 2) },
    s: function () { return pad(jsdate.getSeconds(), 2) },
    //u not supported yet 

    // Timezone 
    //e not supported yet 
    //I not supported yet 
    O: function () {
      var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
      if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
      return t;
    },
    P: function () { var O = f.O(); return (O.substr(0, 3) + ":" + O.substr(3, 2)) },
    //T not supported yet 
    //Z not supported yet 

    // Full Date/Time 
    c: function () { return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P() },
    //r not supported yet 
    U: function () { return Math.round(jsdate.getTime() / 1000) }
  };

  return format.replace(/[\\]?([a-zA-Z])/g, function (t, s) {
      var ret = '';
      if (t != s) {
        ret = s;
      } else if (f[s]) {
        ret = f[s]();
      } else {
        ret = s;
      }
      return ret;
    });
}

/**
 * strtotime()函数
 * strtotime('2012-07-27 12:43:43') OR strtotime('2012-07-27')
 * @return 时间戳
 */
function strtotime(str = '') {
  if(str == '') {
	var _temp = new Date();
	return parseInt(_temp.getTime() / 1000);
  }	
  var _arr = str.split(' ');
  var _day = _arr[0].split('-');
  _arr[1] = (_arr[1] == null) ? '0:0:0' : _arr[1];
  var _time = _arr[1].split(':');
  for (var i = _day.length - 1; i >= 0; i--) {
    _day[i] = isNaN(parseInt(_day[i])) ? 0 : parseInt(_day[i]);
  };
  for (var i = _time.length - 1; i >= 0; i--) {
    _time[i] = isNaN(parseInt(_time[i])) ? 0 : parseInt(_time[i]);
  };
  var _temp = new Date(_day[0], _day[1] - 1, _day[2], _time[0], _time[1], _time[2]);
  return parseInt(_temp.getTime() / 1000);
}


/**
 * 小数保留默认2位
 */
function returnFloat(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}
/**
 * 倒计时【验证码】
 * @time 倒计时 秒
 * @结束
 */
function CountDowm(time, fe = null) {
  var id = setInterval(() => {
    time--;
    if (fe != null) fe(time, 0);
    if (time <= 0) {
      clearInterval(id);
      fe(0, 1);
    }
  }, 1000);
}
/**
 * 远程获取[GET同步返回]
 * @parm url 地址
 * @parm data get数据
 * @parm fn 异步返回 
 */
const httpGet = (url, data, fn, fe) => {
//  if (fe == null) { fe = () => { Tip("网络错误，请稍等尝试..."); wx.hideLoading() } };
if (data == null) data = {time:Math.round(new Date().getTime() / 1000)};
  uni.request({
    url: url,
    data: post,
    success: res => {
      if (res.statusCode == 200) if (fn != null) fn(res.data); else fe();
    },
    fail: () => { fe(); }});
}

/**
 * 远程获取[GET异步返回]
 * @parm url 地址
 * @parm data get数据
 */
const httpGetAsy = (url, data) => {
 return new Promise((resolve, reject) => {
   if (data == null) data = {time:Math.round(new Date().getTime() / 1000)};
   uni.request({
     url     : url,
     data    : data,
     success : res => {if (res.statusCode == 200) resolve(res.data); else reject();},
     fail: ()=> {reject();}
   });   
 });
};
/**
 * 远程获取[POST同步返回] 
 * @parm url 地址
 * @parm post post数据
 * @parm fn   返回函数 
 * @parm fe   返回错误
 */
const httpPost = (url, post, fn, fe) => {
 // if (fe == null) { fe = ()=>{Tip("网络错误，请稍等尝试..."); wx.hideLoading()}};
  uni.request({
    url     : url,
    method  : 'POST',
    data    : post,
    success : res => {
      if (res.statusCode == 200)  if (fn != null) fn(res.data); else  fe();
    },
    fail: (res)=> { fe(); }
  });
};
/**
 * 判断手机号码是否准确
 */
const isPoneAvailable = (tel) => {
	var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (!myreg.test(tel)) {
		return false;
	} else {
		return true;
	}
};
/**
 * 远程获取[POST异步操作]
 * @parm url 地址
 * @parm post post数据 
 */
const httpPostAsy = (url, post) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url     : url,
      method  : 'POST',
      data    : post,
	  header  : {
		"content-type"	: "application/x-www-form-urlencoded"
	  },	
      success: res => { if (res.statusCode == 200) resolve(res.data); else reject(); },
      fail: () => { reject(); } 
    });
  });
};

/**
 * 广告跳转页面
 * @param {Object} url
 */
function navigateTo(url) {
	if (url == '#' || url == '') {
		return;
	}
	var switchAr = [
		
	];
	for(var i in switchAr) {
		if(switchAr[i] == url) {
			uni.switchTab({
				url : url
			});
		}
	}
	if(url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0) {
		location.href = url;
		return;
	}
	
	uni.navigateTo({
		url: url
	});
}
/**
 * 阿拉伯数字转中文数字
 * @param {Object} num
 */
function noToChinese(num) {
    if (!/^\d*(\.\d*)?$/.test(num)) {
        alert("Number is wrong!");
        return "Number is wrong!";
    }
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");
    var BB = new Array("", "十", "百", "千", "万", "亿", "点", "");
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
        if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }
    if (a.length > 1) //加上小数部分(如果有小数部分) 
    {
        re += BB[6];
        for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
    }
    return re;
};

/**
 * 字节转换
 */
function bytesToSize(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024;
  var sizes = ['B', 'KB', 'M', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return toDecimal(bytes / Math.pow(k, i)) + ' ' + sizes[i];
}
/**
 * 星座
 */
function constellation(strBirthday) {
  if (strBirthday == '0') return '无';
  var strBirthdayArr = strBirthday.split("-");
  var month = strBirthdayArr[1];
  var date = strBirthdayArr[2]; 
  if (month == 1 && date >= 20 || month == 2 && date <= 18) { return "水瓶座"; }
  if (month == 2 && date >= 19 || month == 3 && date <= 20) { return "双鱼座"; }
  if (month == 3 && date >= 21 || month == 4 && date <= 19) { return "白羊座"; }
  if (month == 4 && date >= 20 || month == 5 && date <= 20) { return "金牛座"; }
  if (month == 5 && date >= 21 || month == 6 && date <= 21) { return "双子座"; }
  if (month == 6 && date >= 22 || month == 7 && date <= 22) { return "巨蟹座"; }
  if (month == 7 && date >= 23 || month == 8 && date <= 22) { return "狮子座"; }
  if (month == 8 && date >= 23 || month == 9 && date <= 22) { return "室女座"; }
  if (month == 9 && date >= 23 || month == 10 && date <= 22) { return "天秤座"; }
  if (month == 10 && date >= 23 || month == 11 && date <= 21) { return "天蝎座"; }
  if (month == 11 && date >= 22 || month == 12 && date <= 21) { return "人马座"; }
  if (month == 12 && date >= 22 || month == 1 && date <= 19) { return "摩羯座"; }
}

/** 
 * 消息时间值转化  
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
 * @return {string}           格式化的时间字符串 
 */
function timeLastdate(timestamp,isWeekTime = false){
  //判断是否今天
  var stoday = strtotime(date('Y-m-d 00:00:00'));
  
  if (timestamp > stoday){
    var h = date('H');
    if(h <= 12) 
      return '早上' + date('H:i', timestamp);
    else 
      return '下午' + date('H:i', timestamp);
  }
  //昨天
  var day = getDate();
  day.setTime(day.getTime() - 24 * 60 * 60 * 1000);
  var ytoday = day.getTime() / 1000;
  var s_yesterday = strtotime(date('Y-m-d 0:0:0', ytoday));
  var e_yesterday = strtotime(date('Y-m-d 23:59:59', ytoday));
  if (timestamp > s_yesterday && timestamp < e_yesterday){
    return '昨天' + date('H:i', timestamp);
  }

  //获取周一时间
  var dayInWeek = day.getDay();
  dayInWeek == 0 && (dayInWeek = 7);
  var beginWeek = strtotime(date('Y-m-d 0:0:0',(day.getTime() - (dayInWeek - 1) * 86400000) / 1000));
  if (timestamp >= beginWeek){
    return date('l', timestamp) + (isWeekTime == true ? date('h:i',timestamp) : '');
  }

  //判断是否今年
  var y  = day.getFullYear() ;
  var y1 = date('Y', timestamp);
  if(y == y1){
    return isWeekTime ? date('m月d日 H:i', timestamp) : date('m月d日', timestamp);
  }

  return date('Y年m月d日 H:i', timestamp);
}


export default {
	Tip				: Tip,//
	loadIng     	: loadIng,//加载效果
	date 			: date,//时间戳解析时间
	strtotime   	: strtotime,//日期解析时间戳
	returnFloat 	: returnFloat,//小数保留二位
	CountDowm	  	: CountDowm,//倒计时
	isDefine    	: isDefine,//判断是否空
	httpGet		  	: httpGet,//同步获取GET
	timest			: timest,//获取11位时间戳
	httpPost	  	: httpPost,//同步POST
	httpGetAsy		: httpGetAsy,//异步GET
	httpPostAsy		: httpPostAsy,//异步POST
	isPoneAvailable : isPoneAvailable,//判断手机号码
	navigateTo		: navigateTo,
	noToChinese		: noToChinese,//数字转为中文数字
}
	//定义一个定时器
//	var myTime = null;
	//定义一个函数获取时间
	var getTime = function(){
		var d = new Date();
		var str = toDateTimeString(d,"/");
		document.getElementById("timeOn").innerHTML = str;
	}
	function showTime(){
		setInterval(getTime,0);
	}
	window.onload = function(){
		showTime();
	}
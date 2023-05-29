var close_time;	// 시간 정보
var close_time2 =10;
var str1 = "남은 시간은 ";
var str2 = "초 입니다";

clearTimeout(close_time);
close_time = setTimeout("close_window()", 10000);
show_time();

function show_time(){
	let divClock=document.getElementById('Time');
	divClock.innerText = str1 + close_time2 + str2;
	close_time2--;
	setTimeout(show_time,1000);
}

function close_window(){
	window.close();
}

//window.onload=show_Window;

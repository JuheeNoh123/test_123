function pop_up() {
	
	// 윈도우.open() 함수는 창을 열거나 닫는(.close) 전용 함수이다.
	var cookieCheck = getCookie("popupYN");	//getCookie를 불러오고
	if (cookieCheck != "N"){
		window.open("../pop_up.html","팝업테스트", "width=400,height = 300,top=10,left=10");
	}
}

function show_clock(){
	let currentDate = new Date();	//날짜 객체 생성
	let divClock = document.getElementById('divClock');
	let msg = "현재 시간 : ";
	if(currentDate.getHours()>12){
		msg += "오후";
		msg += currentDate.getHours()-12+"시";
	}
	else{
		msg += "오전";
		msg += currentDate.getHours()+"시";
	}
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	divClock.innerText =msg;
	
	if(currentDate.getMinutes()>58){
		divClock.style.color = "red";
	}
	setTimeout(show_clock,1000);
}

// 쿠키를 Set 하는 함수 : 시간 설정 함수
function setCookie(name, value, expiredays) {
        var date = new Date();		// 시간 불러오는 함수
        date.setDate(date.getDate() + expiredays);	//set 날짜함수는 날짜 데이터의 원하는 형식만 다른 값으로 교체하는 함수
        // 현재 날짜에 원하는만료일수를 더함
		document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";;        
    }

// 쿠키를 Get 하는 함수 : 쿠키를 얻음
function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {	// 쿠키가 존재하면
            var cookie_array = cookie.split("; ");
			//console.log(cookie_array);
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                //console.log(cookie_name);
                if (cookie_name[0] == "popupYN") {	//키가 팝업YN이면
                    return cookie_name[1];		//값을 리턴
                }
            }
        }
        return ;
}

function closePopup() {
        if (document.getElementById('check_popup').value) {
            setCookie("popupYN", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
    }
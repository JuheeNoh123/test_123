function setCookie(name, value, expiredays) {
        var date = new Date();		// 시간 불러오는 함수
        date.setDate(date.getDate() + expiredays);	//set 날짜함수는 날짜 데이터의 원하는 형식만 다른 값으로 교체하는 함수
        // 현재 날짜에 원하는만료일수를 더함
		document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";        
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
                if (cookie_name[0] == "id") {	//키가 팝업YN이면
                    return cookie_name[1];		//값을 리턴
                }
            }
        }
        return ;
}


//만료기한 지나면 쿠키 삭제하는것 같음
function deleteCookie(cookieName){
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "= " + "; expires="+ expireDate.toGMTString();
	
}
function login_count(){
	var glc = getloginCookie("login_cnt");
	
	if(glc == ""){
		//let cnt = Number(0);
		var cnt = Number(0);
	}
	else{
		cnt = Number(glc);	
	}
	
	setloginCookie("login_cnt",cnt) ;
	console.log(glc);
	
	if (glc > 20){
		alert("로그인가능 횟수를 초과했습니다.");
		btnActive();
	}
		
}

//버튼 비활성화
function btnActive()  {
  const target = document.getElementById('target_btn');
  target.disabled = true;
}

function setloginCookie(name, value) {
        // 현재 날짜에 원하는만료일수를 더함
		document.cookie = escape(name) + "=" + escape(value) ;     
	
    }

// 쿠키를 Get 하는 함수 : 쿠키를 얻음
function getloginCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {	// 쿠키가 존재하면
			var cookie_array = cookie.split("; ");
			console.log(cookie_array);
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                console.log(cookie_name);
                if (cookie_name[0] == "login_cnt") {	//키가 팝업YN이면
					
					let cookievalue = Number(cookie_name[1]) + 1;
					document.cookie = cookie_name[0]+"="+cookievalue;
					return cookievalue;
					//console.log(typeof(cookiename));
                    
                }
        	}
        }
        return;		//값을 리턴	;
}


function logoutdeleteCookie(cookieName){
	document.cookie = escape(cookieName) + "= ";
	
}
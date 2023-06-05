//시작할 때 아이디 기억
function init(){
	let id = document.querySelector("#floatingInput");
	let check = document.querySelector("#idSaveCheck");
	let get_id = getCookie("id");
	
	if(get_id){
		id.value = get_id;
		check.checked = true;
	}
	session_check();	//세션 유무 검사
}


function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");
	
    form.action = "../index_login.html";
    form.method = "get"
	
    if(check.checked == true){
		alert("쿠키를 저장합니다.");
		setCookie("id",id.value,1);
		alert("쿠키값 : " + id.value);
	}
	else { 
		setCookie("id",id.value,0);
	}
	
	login_count();
	
	let rst = login_check();
	console.log(rst);
	
	
	
	if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.")
    }
	else if(rst == true){
		session_set();
		form.submit();
	}
	else{
        return;
    }
}


function logout(){
    session_del();
	logoutdeleteCookie("login_cnt");
	location.href='../index.html';
	
}


function get_id(){
	if(true){
		decrypt_text();
	}
	else{
		var getParameters = function(paramName){
		var returnValue;
		var url = location.href;		//현재 접속중인 주소 정보 저장
		var parameters = (url.slice(url.indexOf("?")+1, url.length)).split("&");	//?기준 자른(slice) 후 split으로 나눔(분리)
		console.log(url);	//https://test--oujdt.run.goorm.site/index_login.html?id=sarah19270%40naver.com&pass=ZxZxzxzxc
		console.log(parameters);	// ['id=sarah19270%40naver.com', 'pass=ZxZxzxzxc']
		for (var i = 0; i<parameters.length; i++){
			var varName = parameters[i].split('=')[0];	//[id, sarah19270%40naver.com]
			console.log(varName);		//id
			if(varName.toUpperCase() == paramName.toUpperCase()){	//매개변수로 받은id와 varName의 id가 같다면
				returnValue = parameters[i].split('=')[1];	//sarah19270%40naver.com 리턴
				return decodeURIComponent(returnValue);
				//나누어어진 값의 비교를 통해 paramName으로 요청된 데이터의 값만 return
			}
		}//2중 for문 끝
		
	};	// 함수 끝
	alert(getParameters('id')+'님 반갑습니다!');	//메세지창 출력
	}
	
	
}


//9주차 응용문제 
// 아이디, 패스워드 필터링 하기(정규 표현식 값사용, test()함수로 값 검사 가능)
//정규 표현식 : 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용
// 이메일과 비밀번호 형태를 제대로 띄고 있나 검사하는 용도 같음.
function login_check(){

	let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	
	var regexr1 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	//메일 주소 형식에 맞는지 검사한다.
	var regexr2 = /^[A-Za-z0-9]{4,10}$/;
	// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
	// {4,10}: 4 ~ 10자리
	
	 
	let rst1 = regexr1.test(id.value);
	let rst2 = regexr2.test(password.value);
	
	if(rst1 != true){
		alert("이메일 형식을 확인해주세요.");
	}
	
	else if(rst2 != true){
		alert("비밀번호 형식이 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 확인해주세요.");
	}
	
	else{
		return true;
	}
		//return(rst1,rst2);
	//return regexr1.test(email), regexr2.test(pw);
}


//10주차 응용문제 





function addJavascript(jsname){
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

addJavascript('/js/security.js');
addJavascript('/js/cookie.js');
addJavascript('/js/session.js');
addJavascript('/js/login_cookie_count.js');
addJavascript('/js/close_login.js');
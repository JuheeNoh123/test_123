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
	
	if (glc > 2){
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



//11주차 세션
function session_set() {
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	
	if (sessionStorage)	{
		let en_text = encrypt_text(password.value);
		sessionStorage.setItem("Session_Storage_test",en_text);
		// setItem(key, value)  :  해당 키값에 대한 데이터 저장
	}
	else{
		alert("세션 스토리지 지원");
	}
}


function session_get(){
	if (sessionStorage){
		return sessionStorage.getItem("Session_Storage_test");
		//getItem(key) : 해당 key값에 해당하는 데이터(문자열)을 반환
	}
	else{
		alert("세션 스토리지 지원 X");
	}
}


function session_check(){	//세션 검사
	if (sessionStorage.getItem("Session_Storage_test")) {
		alert("이미 로그인 되었습니다.");
		location.href = 'index_login.html';
	}
}

function session_del(){
	
	if(sessionStorage){
		sessionStorage.removeItem("Session_Storage_test");
		alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
	}
	else {
		alert('세션 스토리지 지원 X');
	}
}

//암/복호화 함수
function encodeByAES256(key, data){
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
};

function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}

function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb);
    console.log(b); 
}

var close_time;	// 시간 정보
var close_time2 =30;
var str1 = "로그아웃까지 남은 시간은 ";
var str2 = "초 입니다";

function setTime(){
	clearTimeout(close_time);
	close_time = setTimeout("close_login()", 30000);
	show_time();


}

function show_time(){
	let divClock=document.getElementById('logoutClock');
	divClock.innerText = str1 + close_time2 + str2;
	close_time2--;
	let showlogintime = setTimeout(show_time, 300000);	//5분 이따 시작
}

function close_login(){
	logout();
}

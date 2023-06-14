function addJavascript(jsname){
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

addJavascript('/js/security.js');


function session_set() {
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	
    if (sessionStorage) {
        let en_text = encrypt_text(password.value);
        sessionStorage.setItem("Session_Storage_test", en_text);

    } 
	else{
		alert("세션 스토리지 지원 X");
	}
}
/*
function session_set() {
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	
	let random = new Date();	//랜덤 타임스탬프
	
	const obj = {	//객체 선언
		id : id.value,
		otp : random
	}
	
	if(sessionStorage){
		const objString = JSON.stringify(obj);	//객체 -> JSON 문자열 변환
		let en_text = encrypt_text(objString);
		sessionStorage.setItem("Session_Storage_object",objString);	//객체		{"id":"sarah19270@naver.com","otp":"2023-06-05T18:50:20.908Z"}
		//sessionStorage.setItem("Session_Storage_encrypted",en_text);	//암호화	dlThKzWTnGdT/awdHFRAb6xyOCv+hvNPNdmh/m5gk4O2g1phjQzchA3jxFv7hjVSgkykgND/V5XLZhV
	}
	else{
		alert("세션 스토리지 지원 X");
	}
}
*/
function session_get(){
	if (sessionStorage){
		return sessionStorage.getItem("Session_Storage_encrypted");
		//getItem(key) : 해당 key값에 해당하는 데이터(문자열)을 반환
	}
	else{
		alert("세션 스토리지 지원 X");
	}
}


function session_check(){	//세션 검사
	console.log("dd");
	if (sessionStorage.getItem("Session_Storage_test")) {
		alert("이미 로그인 되었습니다.");
		location.href = '../index_login.html';
	};
}


function session_del() {//세션 삭제
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_join_set(){
	let f_name = document.querySelector("#firstName").value;
	let l_name = document.querySelector("#lastName").value;
	let b_day = document.querySelector("#birthdayDate").value;
	let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress").value;
    let p_number = document.querySelector("#phoneNumber").value;
    let class_check = document.querySelector(".select form-control-lg");
    let random = new Date(); // 랜덤 타임스탬프
	
	const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
	console.log(newSignUp.fullName);
	console.log(newSignUp.contactInfo);
	
	if(sessionStorage){
		const objString = JSON.stringify(newSignUp);
		let en_text = encrypt_text(objString); // 암호화
        //sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encrypted", en_text);
	}
	else {
        alert("세션 스토리지 지원 x");
    } 
}

function session_join_get(){
	if (sessionStorage){
		decrypt_text();
		return sessionStorage.getItem("Session_Storage_encryted");
		
		
	
	}
	else{
		alert("세션 스토리지 지원 X");
	}
}

//addJavascript('/js/cookie.js');
//addJavascript('/js/session.js');
//addJavascript('/js/login_cookie_count.js');
//addJavascript('/js/close_login.js');*/
function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    
    form.action = "../index_login.html";
    form.method = "get"
    
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.")
    }
	else{
        form.submit();
    }
}

function logout(){
    location.href='../index.html';
}

function get_id(){
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

//9주차 응용문제 
// 아이디, 패스워드 필터링 하기(정규 표현식 값사용, test()함수로 값 검사 가능)
//정규 표현식 : 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용
// 이메일과 비밀번호 형태를 제대로 띄고 있나 검사하는 용도 같음.
function login_check(){
	var url = location.href;
	var imformation = (url.slice(url.indexOf("?")+1, url.length)).split("&");
	var email = decodeURIComponent(imformation[0].split('=')[1]);
	var pw = imformation[1].split('=')[1];
	var regexr1 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	//메일 주소 형식에 맞는지 검사한다.
	var regexr2 = /^[A-Za-z0-9]{4,10}$/;
	// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
	// {4,10}: 4 ~ 10자리
	console.log(regexr1.test(email));
	console.log(regexr2.test(pw));
	
}


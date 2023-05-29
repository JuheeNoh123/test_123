//getElementById : 문서의 특정 id 가져옴
//addEventListener : 이벤트 등록
//click : 이벤트 한종류

document.getElementById("search_btn").addEventListener('click',search_message);
var search_array=[];
//search_message() : 함수
function search_message(){
	let array = ['비','속','어'];
	
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
	if(search_str.value === array[0] || search_str.value === array[1] ||search_str.value === array[2])
		{
			alert("비속어 감지");

		}
	else if(search_str.value.length===0){
			alert("검색창이 비었습니다.");
	}
	else
	{	//문자 길이,엄격한 비교(값+자료형 비교)
		alert("검색을 수행합니다");	//메세지 출력
		search_array.push(search_str.value);	//배열에 검색어 추가
		if (search_array.length>=10){
			search_array.shift();
		}
		let text = document.getElementById("search_message").innerHTML = search_array.toString();
		document.querySelector("#form_main").submit();
			
	}

	

		
	
		
	
		
	
	
	
	
	//원래 코드
	/*
   	document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
   	console.log(search_str.value); // 콘솔에 출력
	*/
}
	
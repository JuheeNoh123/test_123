//getElementById : 문서의 특정 id 가져옴
//addEventListener : 이벤트 등록
//click : 이벤트 한종류
document.getElementById("search_btn").addEventListener('click',search_message);

//search_message() : 함수
function search_message(){
	alert("검색을 수행합니다");	//메세지 출력
	let search_str = ducument.querySelector("#search_txt");	//변수에 저장
	document.getElementById("search_message").innerHTML = search_str.value;	//태그에 값 추가
	console.log(search_str.value);	//콘솔에 출력
}
	
let empty1 = [];	//빈 배열
let empty2 = [, , ,];	//쉼표 개수 = 크기
let all = [1,'test',3.14];	// 다른 데이터 타입 사용 가능
let coffee = ['americano','latte'];	// 이름, 괄호
const cars = ['Saab','Volvo','BMW'];	//상수 배열
cars[0]="Jaab";	//0번 인덱스 값 수정
//const cars = new Array["Saab","Volvo", "BMW"];	//Identifier 'cars' has already been declared
let car = cars[2];	// 변수에 배열 값 초기화 -> BMW
cars[1] = Date.now();	// 값에 객체 삽입 가능


console.log(empty1);
console.log(empty2);
console.log(all);
console.log(coffee);
console.log(cars);	// 배열 출력
console.log(car);
console.log(typeof cars);
// (3) ['Jaab', 1682429393647, 'BMW']
// object

for (var i =0; i<all.length;i++){
	console.log(all[i]);	// 1, test, 3.14
}

all.forEach((value, index) =>{
	console.log("index: " + index + " Value: " + value);
	//index: 0 Value: 1
	//index: 1 Value: test
	//index: 2 Value: 3.14
})
document.getElementById("search_message").innerHTML = cars;
var arr = ['a', 'b', 'c']; 
var arr2 = [1, 'b', 3.5151231231]; 
// arr = ['a', 'b', 'c', 'e'];
arr[arr.length]='e';	//배열의 끝에 요소 추가
arr=['a','b','c'];
arr.length = arr.length-1;	//['a','b']
// 배열의 크기 1개 x
arr[5] = 'g';	//(6) ['a', 'b', empty × 3, 'g']
arr.pop();	// 값 삭제(뒤) -> (5) ['a', 'b', empty × 3]
arr2.push("pushed");	//값 추가(뒤) ->(4) [1, 'b', 3.5151231231, 'pushed']
arr.shift(); //값 삭제(앞) -> (4) ['b', empty × 3]
//arr2.unshift("pushed2");	//값 추가(앞) ->(5) ['pushed2', 1, 'b', 3.5151231231, 'pushed']

console.log(arr2);
console.log(typeof arr2[0]);	//string
console.log(arr2.toString()); 	//문자열로 변환 출력
console.log(typeof arr[3]);	//empty값 -> undefined 출력
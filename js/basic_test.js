var jb = 'hi';
var a= 1;
var b;
b = 5;

if (true) {
	let c = 'let 접근'; //let 변수명 = 값 (일반) ; {} 안에 변수 외부 접근 X
	var c_1='var 접근';
	const c_2 = 'const 접근'
}

//console.log(c); // Uncaught ReferenceError: c is not defined
//console.log(c_2); // Uncaught ReferenceError: c_2 is not defined
console.log(c_1);
 


let d= 5;
//let d = '값 재할당';	//Uncaught SyntaxError: Identifier 'd' has already been declared
d = 10;
console.log(d);	//10

//const 변수명 = 값(상수) ; 재할당 및 재선언 X
const e = '상수1 접근';

//e=5;	// Uncaught TypeError: Assignment to constant variable.
//const f;	//Error : Const must be initialized

console.log(e);	//상수1 접근
 
 
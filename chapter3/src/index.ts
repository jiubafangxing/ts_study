 console.log("hello world")
//function squareOf(n){
//	return n*n
//}
function squareOf(n :number){
	return n*n
}

console.log(squareOf(2))
//squareOf('z')

//3.2.2 unknown
let a: unknown = 30
let b = a == 33
//error 
//let c= a+10
if(typeof a == 'number'){
	let d = a+1
}
//3.2.3
let a323 = true
var b323 = false
const c323 = true
let d323 :boolean = true
let f323 :true = true




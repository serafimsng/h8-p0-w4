

function checkAB(str) {
var s = str.split('')
var a = ''
var b = ''
for(var j = 0; j< s.length-1;j++){
	if (s[j] === 'a') {
		a += j 
	}else if(s[j] === 'b'){
		b += j
	}
}
var c = a.split('')
var d = b.split('')
var x =0
var y =0
for(var k=0; k<Math.max(c.length,d.length);k++){
for(var l=0; l<Math.min(c.length,d.length);l++){
	if (Math.abs(a[k]-b[l]) == 4) {
		x +=1
	}else{
		
	}
}
}
if(x > 0){
	return true
}else{
	return false
}
if(a.length == 0|| b.length == 0){
	return false
}

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

function fpb(angka1,angka2){
	var x = []
	for(var i = 0; i<=angka1; i++){
		if (angka1%i===0) {
			x.push(i)
		}
	}
	// console.log(x);
	var y =[]
	for(var j = 0; j<=angka2; j++){
		if (angka2%j===0) {
			y.push(j)
		}
	}
	// console.log(y);
// console.log(Math.max(x.length,y.length));
	var newarr = []
	for(var k = 0; k < Math.min(x.length,y.length);k++){
		for(var l = 0; l < Math.max(x.length,y.length); l++){
			if (y[k] === x[l]) {
				newarr.push(y[k])
			}
		}

	}
	// console.log(newarr);

	return newarr.pop()


}
// divide(12,16)
// // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
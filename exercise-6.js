function digitPerkalianMinimum(angka) {
  var x =[]

  for (var i =0; i <= angka; i++){
  	for (var j = 0; j <= angka; j++){
  		if (i*j===angka){
  			x.push([i,j])
  		}
  	}
  }
  
  for(var k = 0; k < x.length; k++){
  	for(var l = 0; l < x.length; l++){
  		if(x[k][0]+x[k][1] === x[l][0]+x[l][1] && x.length>1){
  			x.pop(x[k])
  		}
  	}
  }
  // console.log(x);
  var n = []
  // const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  for(var m = 0; m < x.length; m++){
  	const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  	n.push(arrSum(x[m]))
  	if(String(n).length===1){
  		return String(x).split(',').length
  	}

  }
  
  for(var y = 0; y < n.length; y++){
  		if(n[y] === Math.min(...n)){
  			return String(x[y]).length-1
  		}
  	}
  	
	return n
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


// console.log(arrSum([20, 10, 5, 10]))
function digitPerkalianMinimum(angka) {
  var pasangan =[]

  for (var i =0; i <= angka; i++){
  	for (var j = 0; j <= angka; j++){
  		if (i*j===angka){
  			pasangan.push([i,j])
  		}
  	}
  }
  
  for(var k = 0; k < pasangan.length; k++){
  	for(var l = 0; l < pasangan.length; l++){
  		if(pasangan[k][0]+pasangan[k][1] === pasangan[l][0]+pasangan[l][1] && pasangan.length>1){
  			pasangan.pop(pasangan[k])
  		}
  	}
  }
  // console.log(x);
  var jumlah = []
  for(var m = 0; m < pasangan.length; m++){
  	const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  	jumlah.push(arrSum(pasangan[m]))
  	if(String(jumlah).length===1){
  		return String(pasangan).split(',').length
  	}

  }
  
  for(var y = 0; y < jumlah.length; y++){
  		if(jumlah[y] === Math.min(...jumlah)){
  			return String(pasangan[y]).length-1
  		}
  	}
  	
	return jumlah
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


// console.log(arrSum([20, 10, 5, 10]))
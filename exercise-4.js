/*Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
Jika modus tidak ditemukan, function akan me-return -1. 
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang 
paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, 
Contohnya [1, 1, 1] adalah -1*/


function cariModus(arr) {
  // you can only write your code here!
  var baru=arr
  var newarr=[...new Set(baru)].filter(item => arr.includes(item))
  if(newarr.length==1){
  	return -1
  }
  var tamp=[]
  var result=[]
  for(let i=0;i<arr.length;i++){
  	tamp.push(arr[i])
  	for(let j=0;j<tamp.length;j++){
  		if(tamp[j]==arr[i+1]){
  			result.push(tamp[j])
  		}
  	}
  }
  if(result.length===0){
  	return -1
  }
  var jumlah=0
  for(let i=0;i<result.length;i++){
  	if(result[i]==result[i+1]){
  		jumlah++
  	}
  }
  if(jumlah>1){
  	result.splice(0,jumlah)
  }

  for(let i=0;i<arr.length;i++){
  	for(let j=0;j<result.length;j++){
  		if(arr[i]===result[j] && i<j){
  			return arr[i]
  		}
  	}
  }
  
  return result[0]

}


  


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([7, 7, 7, 7, 3, 5,5])); // -1
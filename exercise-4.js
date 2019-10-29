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
var x =0
var y = 0
var modus = 0
// arr.sort(function(a1,a2){return a1 - a2})
// console.log(arr)
	for(var i=0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			if(arr[i]===arr[j] && i !== j){
				x ++
			}
			if(x>y){
				y = x
				modus = i
			}
		}
		}console.log(modus);
		if(modus===0){
			return -1
		}
		var sama = 0
		for(var k = 0; k <= arr.length;k++){
			sama += arr[k]
			if (sama/arr.length===arr[k]) {
				return -1
			}
		}

		return arr[modus]

}


  


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([7, 7, 7, 7, 3, 5])); // -1
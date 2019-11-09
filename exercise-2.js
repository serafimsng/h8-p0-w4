
function fpb(angka1,angka2){
var satu=[]
var dua=[]
  for(let i=0; i<angka1;i++){
  	if(angka1%i===0){
  		satu.push(i)
  	}
  }
  for(let i=0; i<angka2;i++){
  	if(angka2%i===0){
  		dua.push(i)
  	}
  }
  var sama=[]
  for(let i=0; i<satu.length; i++){
  	for(let j=0;j<dua.length;j++){
  		if(satu[i]===dua[j]){
  			sama.push(satu[i])
  		}
  	}
  }
  return sama[sama.length-1]
}
// // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
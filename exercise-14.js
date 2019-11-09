/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]*/

function naikAngkot(arr) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var newarr=[]
 for(var i=0;i<arr.length;i++){
  var obj={}
  obj.penumpang=arr[i][0]
  obj.naikDari=arr[i][1]
  obj.tujuan=arr[i][2]
  obj.baya= (rute.indexOf(obj.tujuan)-rute.indexOf(obj.naikDari))*2000
  newarr.push(obj)
 }return newarr
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
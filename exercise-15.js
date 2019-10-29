// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }
function highestScore (students) {
var data={}
var listKelas=[]
var listMurid=[]
var listNilai=[]

for(var i=0; i<students.length;i++){
  //list Nilai
  var nilai= students[i].score
  listNilai.push(nilai)
  // list murid
  var murid = students[i].name
  listMurid.push(murid)
  //untuk class
  var kelas=students[i].class
  if(listKelas.includes(students[i].class)){

  }else{
    listKelas.push(kelas)
  }



}
for(var j=0;j<listKelas.length; j++){
  var objNilai={}
  for(var k=0;k<students.length;k++){
    if(listKelas[j] == students[k].class && objNilai.includes(students[k].score)==false){
      objNilai.nilai=students[k].score
    }
      console.log(objNilai);
  }

}

listNilai.sort()




// console.log(listNilai);
// console.log(listKelas);
// console.log(listMurid);
}

// const obj1 = {
//   innerObj:{
//     name:'Bob'
//   },
//   innerOBj2:{
//     color:'blue'
//   }
// }

// const obj2 = {
//   lastName:'Some',
//   age:45
// }

// obj1.innerObj = Object.assign(obj1.innerObj,obj2);
// console.log(obj1);


// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
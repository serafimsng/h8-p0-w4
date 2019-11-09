// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }
function highestScore (students) {
  var kelas=[]
  var obj={}
  for(let i=0;i<students.length;i++){
    kelas.push(students[i].class)
  }
  var newkelas=[...new Set(kelas)]
  for(let i=0;i<newkelas.length;i++){
    var daftarKelas=newkelas[i]
    obj[daftarKelas]={name:'', score:0}
  }
  for(let i=0;i<students.length; i++){
    for(let prop in obj){
      if(obj[prop].score<students[i].score && prop===students[i].class){
        obj[prop].name=students[i].name
        obj[prop].score=students[i].score
      }
    }
  }
  return obj
}

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
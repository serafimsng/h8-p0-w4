function changeMe(arr) {

	for(var i=0; i< arr.length;i++){
		var x = i+1 +'. '+ arr[i][0] +' '+arr[i][1]+': \n'
		var obj={}
			obj.firstName= arr[i][0]
			obj.lastName= arr[i][1]
			obj.gender= arr[i][2]
			if(arr[i][3]===undefined){
				obj.age='Invalid Birth Year'
			}else{
				obj.age=arr[i][3]
			}
			
			console.log(x,obj);
		}
}
	// for(var i = arr.length-1; i>=0; i--){
	// 	var a = i+1
	// firstName=arr[i][0]
	// lastName=arr[i][1]
	// gender=arr[i][2]
	// age=arr[i][3]
	// if(arr[i][3] === undefined){
	// 	x.age = 'Invalid Birth Year'
	// }
	// x = a +'. '+ `${arr[i][0]} ${arr[i][1]} \n { firstName: ${arr[i][0]} \n lastName: ${arr[i][1]} \n gender: ${arr[i][2]} \n age: ${arr[i][3]}}`+ '\n' + x
	// }
	// if(arr.length === 0){
	// 	return 'No Data'
	// }


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
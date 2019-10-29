function shoppingTime(memberId, money) {
  if(memberId == ''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else if(money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }else if(memberId != ''&& money > 50000){
    return hitungan(memberId,money)
  }else{
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
}

function hitungan(memberId, money){
  var arr=[['Sepatu Stacattu',1500000],['Baju Zoro', 500000],['Baju H&N',250000],['Sweater Uniklooh',175000],['Casing Handphone',50000]]
  var kembalian = money 
  var newarr = []
  var obj={}
  for(var i=0; i < arr.length; i++){
      if(kembalian > arr[i][1]){
      kembalian = kembalian - arr[i][1]
      newarr.push(arr[i][0])
     }
  }
  obj.memberId=memberId
  obj.money=money
  obj.listPurchased=newarr
  obj.changeMoney=kembalian
  // return `{ memberId: ${memberId} \n money: ${money} \n listPurchased: ${newarr} \n changeMoney: ${kembalian} }`
  return obj
}
//
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


    // if(money >= stacattu){
    //   sisa = money-stacattu
    //   arr.push('Sepatu Stacattu')
    //   if(sisa >= zoro){
    //     sisa = sisa - zoro
    //     arr.push('Baju Zoro')
    //   }else if(sisa >= hn){
    //     sisa = sisa - hn
    //     arr.push('Baju H&N')
    //   }else if(sisa >= uniklooh){
    //     sisa = sisa - uniklooh
    //     arr.push('Baju H&N')
    //   }else{
    //     sisa = sisa - casing
    //     arr.push('Casing Handphone')
    //   }
    // }else if(money >= zoro){
    //   sisa = money - zoro
    //   arr.push('Baju Zoro')
    // }else if(money >= hn){
    //   sisa = money - hn
    //   arr.push('Baju H&N')
    // }else if(money >= uniklooh){
    //   sisa = money - uniklooh
    //   arr.push('Sweater Uniklooh')
    // }else if (money >= casing){
    //   sisa = money - casing
    //   arr.push('Casing Handphone')
    // }
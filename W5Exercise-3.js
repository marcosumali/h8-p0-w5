function shoppingTime(memberId, money) {
    // you can only write your code here!

    if (memberId == '' || memberId == null || memberId == undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    }

    var obj1 = {
        item: 'Sepatu Stacattu',
        price: 1500000
    }

    var obj2 = {
        item: 'Baju Zoro',
        price: 500000
    }

    var obj3 = {
        item: 'Baju H&N',
        price: 250000
    }

    var obj4 = {
        item: 'Sweater Uniklooh',
        price: 175000
    }

    var obj5 = {
        item: 'Casing Handphone',
        price: 50000
    }

    var purchase = [];
    var totalBiaya = 0;
    var sisaUang = money;

    // console.log(200000 - obj5.price);
    // for (var sisaUang = money; sisaUang >= 50000; sisaUang++) {

    if (sisaUang >= obj1.price) {
        purchase.push(obj1.item);
        totalBiaya += obj1.price;
        sisaUang -= obj1.price;
    } 
    
    if (sisaUang >= obj2.price) {
        purchase.push(obj2.item);
        totalBiaya += obj2.price;
        sisaUang -= obj2.price;
    }

    if (sisaUang >= obj3.price) {
        purchase.push(obj3.item);
        totalBiaya += obj3.price;
        sisaUang -= obj3.price;
    }

    if (sisaUang >= obj4.price) {
        purchase.push(obj4.item);
        totalBiaya += obj4.price;
        sisaUang -= obj4.price;
    }

    if (sisaUang >= obj5.price) {
        purchase.push(obj5.item);
        totalBiaya += obj5.price;
        sisaUang -= obj5.price;
    }
    
    // }

    var purchaseObj = {
        memberId: memberId,
        money: money,
        listPurchased: purchase,
        changeMoney: sisaUang
    }

    return purchaseObj;
}
  
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
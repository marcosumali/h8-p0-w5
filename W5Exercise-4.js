function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    // return shoppers[0].length; // undefined since objects are not arrays 
    // return shoppers[0].product; // Sepatu Stacattu
    // return shoppers.length; // 3
    
    if (shoppers.length == 0) {
        return '[]';
    }
    
    var profitReport = []; // array kosong untuk menampung profit dan sisa barang   
    var totalProfit = 0; // untuk menghitung profit
    var namaPembeliSepatu = []; // array kosong untuk menampung nama pembeli setiap jenis barang
    var namaPembeliBaju = [];
    var namaPembeliSweater = [];
    var beliSepatu = 0; // untuk menghitung jumlah pembelian per jenis barang
    var beliBaju = 0;
    var beliSweater = 0;
    var sisaSepatu = listBarang[0][2]; // untuk menghitung sisa sepatu setiap transaksi pembeli
    var sisaBaju = listBarang[1][2];
    var sisaSweater = listBarang[2][2];
    
    for (var i = 0; i < shoppers.length; i++) { // LOOP untuk menampung data sesuai informasi dari array of objects
        if (shoppers[i].product == listBarang[0][0] && sisaSepatu >= shoppers[i].amount) { // Sepatu
            namaPembeliSepatu.push(shoppers[i].name);
            beliSepatu += shoppers[i].amount;
            sisaSepatu -= shoppers[i].amount;
        } else if (shoppers[i].product == listBarang[1][0] && sisaBaju >= shoppers[i].amount) { // Baju
            namaPembeliBaju.push(shoppers[i].name);
            beliBaju += shoppers[i].amount;
            sisaBaju -= shoppers[i].amount;
        } else if (shoppers[i].product == listBarang[2][0] && sisaSweater >= shoppers[i].amount) { // Sweater
            namaPembeliSweater.push(shoppers[i].name);
            beliSweater += shoppers[i].amount;
            sisaSweater -= shoppers[i].amount;
        } 
    }

    var laporanObjSepatu = { // Obj untuk menampung informasi test case sesuai jenis barang
        product: listBarang[0][0],
        shoppers: namaPembeliSepatu,
        leftOver: sisaSepatu, 
        totalProfit: beliSepatu * listBarang[0][1]
    }
    profitReport.push(laporanObjSepatu);
    
    var laporanObjBaju = { 
        product: listBarang[1][0],
        shoppers: namaPembeliBaju,
        leftOver: sisaBaju,
        totalProfit: beliBaju * listBarang[1][1]
    }
    profitReport.push(laporanObjBaju);
    
    var laporanObjSweater = { 
        product: listBarang[2][0],
        shoppers: namaPembeliSweater,
        leftOver: sisaSweater,
        totalProfit: beliSweater * listBarang[2][1]
    }
    profitReport.push(laporanObjSweater);

    return profitReport;

    

  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]
  
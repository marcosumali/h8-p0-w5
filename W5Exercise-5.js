function totalDigitRekursif(angka) {
    // you can only write your code here!
    //console.log(angka[0]); // harus string karena angka tidak bisa ditarik indexnya
    
    var setering = String(angka);
    //console.log(setering[0]); // 5
    
    if (angka <= 0) {
        // base case
        return 0;
    } else {
        // recursion   
        var angkaDepan = parseInt(setering[0]);
        var angkaBelakang = setering.slice(1, setering.length);
        // console.log(angkaDepan); // 5
        //console.log(angkaBelakang); // 12
        // console.log(`${angkaDepan} + ${angkaBelakang}`);
        return angkaDepan += totalDigitRekursif(angkaBelakang);

    }
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
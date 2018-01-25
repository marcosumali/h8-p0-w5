function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var keString = String(angka);
    // console.log(keString.length); // 66 // length=2
    
    if (angka < 10) {
        return parseInt(keString);
    } else {
        var hasilKali = 1;
        for (var i = 0; i < keString.length; i++) {
            hasilKali *= keString[i];
        }
        // return hasilKali; // 36
        
        return kaliTerusRekursif(hasilKali);
    }
    
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
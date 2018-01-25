function changeMe(arr) {
    // you can only write your code here!
    // console.log(arr[0].length); ['Christ', 'Evans', 'Male', 1982]

    var yearNow = 2018;
    
    for (var i = 0; i < arr.length; i++) {       

        if (yearNow > arr[i][3]) {
            var umur = yearNow - arr[i][3];
        } else {
            var umur = 'Invalid Birth Year';
        }

        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}`);
        // for (var j = 0; j < arr[i].length; j++) {           
            // console.log('--------->', i, j, arr[i][j]);
            var dataObj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: umur
            }
        // }
        console.log(dataObj);
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  // age: 'Invalid Birth Year' }
  changeMe([]); // ""
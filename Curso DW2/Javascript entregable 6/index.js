function sumArray(numArray) { 
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
      let Addindex = numArray[a];
      add += Addindex;
    } 
    return add;
  }
  
  console.log(sumArray([1, 2, 3]));
  console.log(sumArray([10, 3, 10, 4]));
  console.log(sumArray([-5, 100]));
  

  
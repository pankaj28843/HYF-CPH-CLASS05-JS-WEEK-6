function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array
    const array = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        array.push(i);
    }

    for (const number of array) {
        if (number % 3 === 0) {
            threeCallback(number);
        }

        if (number % 5 === 0) {
            fiveCallback(number);
        }
    }


    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
}

function sayThree(n) {
    console.log(`${n} is divisible by 3`);
}

function sayFive(n) {
    console.log(`${n} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);




function repeatStringNumTimes(str, num) {
  let str2 = ''

  for (let i=0; i< num; i++) {
    str2 += str;
  }

  return str2;


}

console.log(repeatStringNumTimes("abc", 3));

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);

  return { min, max, avg: Number(avg) };
}

function summElementsWorker(arr) {
  let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            sum += arr[i];
        }
    }
    return sum;
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
}

function differenceMaxMinWorker(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

}

function differenceEvenOddWorker(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  return evenSum - oddSum;
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269
}

function averageEvenElementsWorker(arr) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  
  if (evenNumbers.length === 0) {
    return 0;
  }
  
  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  
  const average = sum / evenNumbers.length;
  
  return average;
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult;
  if (arrOfArr.length > 0) {
    maxWorkerResult = func(...arrOfArr[0]);
  } else {
    return undefined;
  }

  for (let i = 1; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
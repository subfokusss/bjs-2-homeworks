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

function summElementsWorker(...arr) {
  let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
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
}

function averageEvenElementsWorker(...arr) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  
  if (evenNumbers.length === 0) {
    return 0;
  }

  return evenNumbers.reduce((acc, num) => acc + num, 0) / evenNumbers.length;
  
}

function makeWork(arrOfWorker, func) {
  let maxWorkerResult = func(...arrOfWorker[0]);

  for (let i = 1; i < arrOfWorker.length; i++) {
    const workerResult = func(...arrOfWorker[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
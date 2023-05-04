/*---- Пузырьковая сортировка ----*/
function bubbleSort(array) {
  let count = 0;
  let cycle = 0;
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - 1 - i; j++){
      cycle++
      if (array[j] > array[j+1]) {
        let buf = array[j];
        array[j] = array[j+1];
        array[j+1] = buf;
        count++
        // console.log('Перестановка ', count,', результат: ', array)
      }
    }
  }
  console.log("bubbleSort: перестановок: ", count, ", итераций:", cycle);
  return array;
}


/*---- Шейкерная сортировка ----*/
function shakerSort(array){
  let count = 0;
  let cycle = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length - i - 1; j++) {
      cycle++
      if (array[j] > array[j+1]) {
        let buf = array[j];
        array[j] = array[j+1];
        array[j+1] = buf;
        count++
        // console.log('Цикл вправо, перестановка ', count,', результат: ', array)
      }
    }
    for (let k = array.length - i - 2; k > i; k--){
      cycle++
      if (array[k] < array[k-1]) {
        let buf = array[k-1];
        array[k-1] = array[k];
        array[k] = buf;
        count++
        // console.log('Цикл влево, перестановка ', count,', результат: ', array)
    }
  }
  
  }
  console.log("shakerSort: перестановок: ", count, ", итераций:", cycle);
  return array;
}

/*---- Сортировка вставками ----*/
function insertSort (array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j+1] = array[j]
      j--
    }
    array[j + 1] = current;
  }
  // console.log("insertSort: перестановок: ", count);
  return array
}

/*---- Сортировка выбором ----*/
function selectSort(array) {
  for (let i = 0; i < array.length; i++){
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      let buf = array[i];
      array[i] = array[minIndex];
      array[minIndex] = buf
    }
  } 
  return array;
}

/*---- Сортировка Шелла ----*/

function shellSort(array) {
  let shift = Math.floor(array.length / 2);
  while (shift >= 1) {
    for (let i = shift; i < array.length; i++) {
      let current = array[i];
      let j = i;
      while (j > 0 && array[j - shift] > current) {
        array[j] = array[j - shift];
        j -= shift;
      }
      array[j] = current;
    }
    shift = Math.floor(shift / 2);
  }
  return array;
}



/*---- Сортировка слиянием ----*/
let iterations = 0;
function mergeSort(array) {
  if(array.length <= 2) {
    let buf = array[0];
    if(buf > array[array.length - 1]){
      array[0] = array[array.length - 1];
      array[array.length - 1] = buf;
      iterations++;
    }
    return array;
  } else {
    let mid = Math.floor(array.length/2);
    return mergeArrays(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
  }
}


function mergeArrays(arr1, arr2){
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      while (j < arr2.length) {
        result.push(arr2[j++])
        iterations++
      }
    }
    else if(j >= arr2.length) {
      while (i < arr1.length) {
        result.push(arr1[i++])
        iterations++
      }
    } 
    else if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++])
      iterations++
    } else {
      result.push(arr2[j++])
      iterations++
    }
  }
  return result;
}

/*---- Быстрая сортировка ----*/

function quickSort(array) {
  if (array.length < 2) return array;
  let pivot = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++){
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
    // console.log(array);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

/*---- Код генерации массивов для тестирования ----*/
const generateRandomArray = function(num = 1000, maxValue = 1000){
  let result = []
  for (let ind = 1; ind <= num; ind++) {
    result.push(Math.floor(Math.random() * (maxValue + 1)));
  }
  return result;
}

const generateAscendingArray = function(num = 1000) {
  let result = []
  for (let i = 1; i <= num; i++){
    result.push(i)
  }
  return result;
}

const generateDescendingArray = function(num = 1000) {
  let result = []
  for (let i = 1; i <= num; i++){
    result.push(num-i)
  }
  return result;
}

const generateEvenArray = function(num = 1000) {
  let result = []
  let elem = Math.round(Math.random() * 10 + 1)
  for (let i = 1; i <= num; i++){
    result.push(elem)
  }
  return result;
}

/*---- Код тестирования ----*/
let array = generateDescendingArray(100000)
console.log(array)
let start = new Date()
let newArray = insertSort(array)
let end = new Date()
console.log(`Время сортировки: ${end - start} мсек`)
console.log(newArray);
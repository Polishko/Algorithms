// Implementation of sorting algorithms in JavaScript

// 1. Bubble Sort -> O(n2)
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// test output
// console.log(bubbleSort([5, 7, 12, 1, 3, 6, 4]));

// 2. Merge Sort -> O(n logn)
function mergeSort(arr) {
  if (arr.length === 0) return "Empty array";
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let part1 = arr.slice(0, middle);
  let part2 = arr.slice(middle);

  part1 = mergeSort(part1);
  part2 = mergeSort(part2);

  return merge(part1, part2, 0, 0);

  function merge(part1, part2, p1, p2) {
    let result = [];
    const [l1, l2] = [part1.length, part2.length];

    while (p1 < l1 && p2 < l2) {
      if (part1[p1] < part2[p2]) {
        result.push(part1[p1]);
        p1 += 1;
      } else {
        result.push(part2[p2]);
        p2 += 1;
      }
    }

    if (p1 >= l1 && p2 < l2) {
      result = result.concat(part2.slice(p2));
      //   part2.slice(p2).forEach((item) => result.push(item)); to not recreate the array
    } else if (p2 >= l2 && p1 < l1) {
      result = result.concat(part1.slice(p1));
    }

    return result;
  }
}

// test outout
// console.log(mergeSort([5, 7, 12, 1, 3, 6, 4]));
// console.log(mergeSort([3, 2]));
// console.log([2].concat(...[3].slice(0)));

// 3. Quick Sort -> best and average O(n log n) worst case O(n2)
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;

  function partition(arr, start, end) {
    const pivot = arr[start];
    let left = start + 1;
    let right = end;

    while (true) {
      while (left <= right && arr[left] < pivot) left++;
      while (left <= right && arr[right] > pivot) right--;

      if (right < left) {
        break;
      }

      if (arr[right] < pivot) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
    }

    [arr[start], arr[right]] = [arr[right], arr[start]];

    return right;
  }
}

// test output
// const arr = [20, 6, 8, 53, 23, 87, 42, 19];
// console.log(quickSort(arr, 0, arr.length - 1));

// Quick Sort -> initial working but less optimal implementation
// function quickSort(arr, start, end) {
//   if (start >= end) return;

//   const pivotIndex = start;
//   let left = start + 1;
//   let right = end;

//   const pivot = arr[pivotIndex];

//   while (left <= right) {
//     if (arr[left] < pivot) {
//       left++;
//     } else {
//       while (arr[right] > pivot) {
//         right--;
//         if (right < left) break;
//       }

//       if (arr[right] < pivot && right >= left) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//       }
//     }
//   }

//   [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

//   quickSort(arr, start, right - 1);
//   quickSort(arr, right + 1, end);

//   return arr;
// }

// const arr = [20, 6, 8, 53, 23, 87, 42, 19];
// console.log(quickSort(arr, 0, arr.length - 1));

// 4. Insertion Sort -> O(n2) but fast for arrays of size < 10
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

// test output
// console.log(insertionSort([20, 6, 8, 53, 23, 87, 42, 19]));

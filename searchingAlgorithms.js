// Implementation and practice on searching algorithms in JavaScript

// 1. Simple linear Search (Single Loop)
function searchValue(arr, value) {
  if (arr.length === 0) return "Empty array";

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item === value) {
      return `Found at index: ${i}`;
    }
  }

  return "Not found";
}

// test output
// console.log(searchValue([2, 8, 24, 5, 0, 56], 0));

// 2. Two-pointer Linear Search
function searchValueWithTwoPointers(arr, value) {
  const mid = Math.floor(arr.length / 2);
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 <= mid) {
    if (arr[p1] === value) {
      return `Found at index: ${p1}`;
    }

    if (arr[p2] === value) {
      return `Found at index: ${p2}`;
    }

    p1++;
    p2--;
  }

  return "Not found";
}

// test output
// console.log(searchValueWithTwoPointers([2, 8, 24, 5, 0, 56], 0));

// 3. Binary search in a sorted list
function binarySearch(arr, left = 0, right = arr.length - 1, value) {
  if (left > right) return "Not found";

  let mid = Math.floor((right - left) / 2) + left;

  if (arr[mid] === value) {
    return `Found at index: ${mid}`;
  }

  if (value >= arr[mid]) return binarySearch(arr, mid + 1, right, value);
  if (value < arr[mid]) return binarySearch(arr, left, mid - 1, value);
}

// test output
// let arr = [0, 1, 2, 3, 4, 5, 6];
// console.log(binarySearch(arr, 0, arr.length - 1, 0));
// left, right, mid -> 0, 6, 2 binarySearch(arr, 0, 2)
// left, right, mid -> 0, 2, 1 binarySearch(arr, 0, 1)
// left, right, mid -> 0, 1, 0

// console.log(binarySearch(arr, 0, arr.length - 1, 5));
// console.log(binarySearch(arr, 0, arr.length - 1, 4));
// console.log(binarySearch(arr, 0, arr.length - 1, 6));

// 4. Determine if an array is sorted -> O(n)
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }

  return true;
}

// test output
// console.log(isSorted([1]));
// console.log(isSorted([3, 7, 1, 2]));
// console.log(isSorted([3, 4, 8, 3, 12]));
// console.log(isSorted([3, 4, 4, 8, 12]));

// 4. Search in a rotated array
function binarySearchInRotatedSortedArray(arr, left, right, target) {
  if (left > right) return -1;

  let mid = Math.floor((right - left) / 2) + left;

  if (arr[mid] === target) return mid;

  if (arr[left] <= arr[mid]) {
    if (target >= arr[left] && target < arr[mid]) {
      return binarySearchInRotatedSortedArray(arr, left, mid - 1, target);
    } else {
      return binarySearchInRotatedSortedArray(arr, mid + 1, right, target);
    }
  }

  if (target > arr[mid] && target <= arr[right]) {
    return binarySearchInRotatedSortedArray(arr, mid + 1, right, target);
  } else {
    return binarySearchInRotatedSortedArray(arr, left, mid - 1, target);
  }
}

// test output
// const rotatedArr = [6, 7, 8, 0, 1, 2, 3, 4, 5];
// console.log(
//   binarySearchInRotatedSortedArray(rotatedArr, 0, rotatedArr.length - 1, 0)
// );

// [6, 7, 8, 0, 1, 2, 3, 4, 5]
// [6, 8, 12, 20, 4]

// 5. Find unique values in an array
function findUniqueValues(arr) {
  const setValues = new Set([]);

  arr.forEach((item) => setValues.add(item));

  return [...setValues];
}

// test output
// console.log(findUniqueValues([3, "3", { 3: "3" }, 6, "hello", 4, 3, "hello"]));

// 6. Find unique letters in a statement
function countUniqueLettersInSentence(sentence) {
  const uniqueLettersCollection = new Set([]);
  const pattern = /[A-Za-z]/;

  sentence.split("").forEach((char) => {
    if (pattern.test(char)) {
      uniqueLettersCollection.add(char.toLowerCase());
    }
  });

  return uniqueLettersCollection.size;
}

// test output
// console.log(countUniqueLettersInSentence("How many times to tell how many"));

// 7. Find unique items using a 'dictionary' 
function countUniqueItemssUsingDictionary(arr) {
  const map = new Map();

  arr.forEach((item) => {
    map.set(item, (map.has(item) || 0) + 1);
  });

  return map;
}

// test output
// console.log(
//   countUniqueItemssUsingDictionary([
//     3,
//     "3",
//     { 3: "3" },
//     6,
//     "hello",
//     4,
//     3,
//     "hello",
//   ])
// );

// 8. Find the max value in an array recursively -> O(n) linear
function findMaxValue(arr, idx = 0, maxValue = 0) {
  if (idx === arr.length - 1) return maxValue;

  maxValue = Math.max(maxValue, arr[idx]);

  return findMaxValue(arr, idx + 1, maxValue);
}

// test output
// console.log(findMaxValue([1, 3, 7, 2, 3, 5]));

// [1, 3, 7, 2, 3, 5]
// idx -> max -> 1

// 9. Check if a statement is balanced (parentheses)
function isBalanced(statement) {
  if (!statement) return "Empty statement";

  const parenthesesPairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const parenthesesArray = ["{", "[", "(", "}", "]", ")"];
  const trackOpening = [];
  const arr = statement.split("");

  findItem(arr, 0, trackOpening);

  function findItem(arr, pointer, trackOpening) {
    while (pointer < arr.length) {
      let current = arr[pointer];
      let lastOpening = trackOpening[trackOpening.length - 1];

      if (!parenthesesArray.includes(current)) {
        pointer++;
        continue;
      }

      if (parenthesesPairs[current]) {
        trackOpening.push(current);
        pointer++;
        pointer = findItem(arr, pointer, trackOpening);
      } else {
        if (lastOpening && parenthesesPairs[lastOpening] === current) {
          trackOpening.pop();
          pointer++;
        } else {
          return arr.length;
        }

        return pointer;
      }
    }

    return pointer;
  }

  return trackOpening.length === 0;
}

// test output
// console.log(isBalanced("{"));
// console.log(isBalanced("a"));
// console.log(isBalanced("{aabt{vd}lf[]xd}"));
// console.log(isBalanced("{aabt{vdlf[]xd}"));
// console.log(isBalanced("{(a{)}}"));
// console.log(isBalanced("({[)]}"));

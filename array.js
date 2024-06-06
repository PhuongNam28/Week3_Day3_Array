//The Array constructor in JavaScript is used to create new arrays. It can be used in different ways:
let arr = new Array(5); // Creates an array of length 5
let arr2 = [1, 2, 3, 4, 5]; // Creates an array with elements 1, 2, 3, 4, 5
let arr3 = new Array(6, 7, 8, 9, 10); // Creates an array with elements 1, 2, 3, 4, 5


//ARR Properties
console.log(arr2.length); // Output: 5
console.log(arr2.constructor); // Output: [Function: Array]



//Array Methods
//push
arr.push(4); // arr is now [1, 2, 3, 4]

//pop
let lastElement = arr.pop(); // lastElement is 4, arr is now [1, 2, 3]

//shift 
let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]

//unshift
arr.unshift(0); // arr is now [0, 2, 3]
//concat
let newArr = arr2.concat(arr3); // newArr is [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10]

//splice:  Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 1, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 4, 5]

//indexOf : Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = arr2.indexOf(3); // index is 2
//includes: Determines whether an array includes a certain value among its entries, returning true or false.
let hasThree = arr2.includes(3); // hasThree is true

//forEach: Executes a provided function once for each array element.
arr2.forEach(element => console.log(element)); // Output: 1 2 3 4 5

//map(callback(currentValue, index, array)): Creates a new array with the results of calling a provided function on every element in the calling array.
let newArr2 = arr2.map(x => x * 2); // newArr is [2, 4, 6 , 8 , 10]

//filter(callback(element, index, array)): Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArr = arr2.filter(x => x > 2); // filteredArr is [3, 4, 5]

//reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
let sum = arr2.reduce((acc, x) => acc + x, 0); // sum is 15

//find(callback(element, index, array)): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let found = arr2.find(x => x > 3); // found is 4

//findIndex(callback(element, index, array)): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let index2 = arr.findIndex(x => x > 3); // index2 is 3

//sort(compareFunction): Sorts the elements of an array in place and returns the array.
let arr5 = [3, 1, 4, 1, 5, 9];
arr5.sort(); // arr is now [1, 1, 3, 4, 5, 9]
arr5.sort((a, b) => b - a); // arr5 is now [9, 5, 4, 3, 1, 1]

//reverse(): Reverses the order of the elements in an array in place and returns the array.
arr2.reverse(); // arr is now [5, 4, 3, 2, 1]

//join(separator): Joins all elements of an array into a string and returns this string.
let arr6 = ['Hello', 'world'];
let str = arr.join(' '); // str is 'Hello world'

//toString(): Returns a string representing the specified array and its elements.
let str2 = arr2.toString(); // str is '1,2,3,4,5'

//every(callback(element, index, array)): Tests whether all elements in the array pass the test implemented by the provided function.
let allGreaterThanZero = arr.every(x => x > 0); // allGreaterThanZero is true

//some(callback(element, index, array)): Tests whether at least one element in the array passes the test implemented by the provided function.
let someGreaterThanThree = arr.some(x => x > 3); // someGreaterThanThree is true





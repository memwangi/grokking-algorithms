/**
 * Quick sort

let list = [12, 5, 6, 7, 8, 6.8, 9, 13, 23, 44.4, 0, 33, 4];

function quickSort(array) {
	if (array.length <= 1) {
		return array; //Already sorted
	} 
	
	let pivot = array[array.length - 1];
	let rightArray = [];
	let leftArray = [];

	for(const el of array.slice(0, array.length-1)){
		el > pivot? rightArray.push(el): leftArray.push(el);
	}

	return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];

		
	
}

console.log(quickSort(list));

*/

/**
 * 
 * Find largest number
 * 
let list = [12,5,6,7,8,6.8,9,13,23,44.4,0,33,4]

function findLargestNumber(array) {
	if(array.length === 2){
		return (array[0] > array[1] ? array[0] : array[1]);
	}
	else {
		let [head, ...tail] = array;
		const sub_max = findLargestNumber(tail);
		return (head > sub_max? head: sub_max);
	}
}

console.log(findLargestNumber(list));
*/

/**
 * Divide and conquer
 * 
const summa = function (array) {
	if (array.length === 0) {
		return 0;
	} else {
		let [head, ...tail] = array;
		return head + summa(tail);
	}
};

console.log(summa([3, 4, 5, 12, 12, 12, 2, 4, 5, 6, 7, 8, 9, 0, 9]));
*/

// // Countdown to zero

// const countdown = (number) => {
//     console.log(number)
//     if(number <= 0) {
//         console.log("Process complete")
//     }
//     else {
//         countdown(number-1)
//     }
// };
// countdown(10000)

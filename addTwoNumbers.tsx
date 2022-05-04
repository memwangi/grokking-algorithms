// class ListNode {
//     val: number
//     next: ListNode | null

//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

// function addTwoNumber(l1: ListNode | null, l2: ListNode | null): ListNode | null {

// }

//get the contents of a listNode
// Undo the reverse

// add them

//return reversed linkedList

const findFactorial = (val: number): number => {
	if (val === 1) {
		return 1;
	}

	return val * findFactorial(val - 1);
};

console.log(`Answer ${findFactorial(7)}`);


const findValue = (growthrate: number, years: number) => {
	let value = 100

	for(let i=0; i <= years; i++) {
		value = value * (growthrate/100)
	}

	return value
}

console.log(`New Value ${findValue(10,3)}`)
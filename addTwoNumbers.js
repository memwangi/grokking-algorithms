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
var findFactorial = function (val) {
    if (val === 1) {
        return 1;
    }
    return val * findFactorial(val - 1);
};
console.log("Answer " + findFactorial(7));
var findValue = function (growthrate, years) {
    var value = 100;
    var count = 0
    for (var i = 0; i < years; i++) {
        value += (value * (growthrate / 100));
        count += 1
    }
    return {"value": value, "count": count};
};
console.log("New Value " + findValue(10, 3).value);
